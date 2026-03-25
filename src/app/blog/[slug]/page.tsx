import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, type ContentBlock } from '@/data/articles';
import { formatDate } from '@/lib/utils';

function renderBlock(block: ContentBlock, index: number, isFirst: boolean) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          key={index}
          className={isFirst ? 'first-letter:text-7xl first-letter:font-headline first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-primary' : ''}
        >
          {block.text}
        </p>
      );
    case 'heading':
      return (
        <h2 key={index} className="text-3xl font-headline font-bold text-on-surface pt-6 tracking-tight">
          {block.text}
        </h2>
      );
    case 'subheading':
      return (
        <h3 key={index} className="text-2xl font-headline font-semibold text-on-surface tracking-tight">
          {block.text}
        </h3>
      );
    case 'quote':
      return (
        <blockquote key={index} className="my-16 py-8 px-10 border-l-4 border-primary bg-surface-container-low rounded-r-xl italic">
          <p className="text-2xl font-headline font-medium text-on-surface leading-snug">&ldquo;{block.text}&rdquo;</p>
          {block.author && (
            <footer className="mt-4 text-sm font-label uppercase tracking-widest text-primary">— {block.author}</footer>
          )}
        </blockquote>
      );
    case 'image':
      return (
        <figure key={index} className="my-8">
          <div className="overflow-hidden rounded-xl relative aspect-[16/10]">
            <Image fill className="object-cover" alt={block.alt} src={block.src} />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-sm italic text-on-surface-variant/60 text-center">{block.caption}</figcaption>
          )}
        </figure>
      );
    case 'image_grid':
      return (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {block.images.map((img, i) => (
            <div key={i} className={`space-y-4 ${i % 2 === 1 ? 'pt-12' : ''}`}>
              <div className="aspect-[4/5] overflow-hidden rounded-xl relative">
                <Image fill className="object-cover" alt={img.alt} src={img.src} />
              </div>
              {img.caption && (
                <p className="text-sm italic text-on-surface-variant/60">{img.caption}</p>
              )}
            </div>
          ))}
        </div>
      );
    case 'list':
      return (
        <ul key={index} className="space-y-6 list-none pl-0">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="material-symbols-outlined text-primary mr-4 mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((a) => a.id === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [{ url: article.imageUrl, alt: article.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: [article.imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const currentIndex = articles.findIndex((a) => a.id === slug);
  if (currentIndex === -1) notFound();

  const article = articles[currentIndex];
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;
  const otherArticles = articles.filter((a) => a.id !== slug);
  const relatedArticles = [
    ...otherArticles.filter((a) => a.category === article.category),
    ...otherArticles.filter((a) => a.category !== article.category),
  ].slice(0, 3);

  return (
    <main className="pt-32 pb-32">
        {/* Hero Section */}
        <header className="max-w-7xl mx-auto px-8 mb-20">
          <div className="relative w-full aspect-[21/9] mb-12 overflow-hidden rounded-xl">
            <Image
              className="object-cover"
              alt={article.imageAlt}
              src={article.imageUrl}
              fill
            />
          </div>
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">{article.category} / {formatDate(article.date)}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
              {article.title}
            </h1>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-8">
          <div className="space-y-12 text-lg leading-[1.8] text-on-surface/80 font-body">
            {article.content.map((block, i) => {
              const isFirst = i === 0 && block.type === 'paragraph';
              return renderBlock(block, i, isFirst);
            })}
          </div>

          {/* Share Section */}
          <div className="mt-24 pt-12 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-label uppercase tracking-widest text-on-surface-variant/60">Share Story</span>
              <div className="flex space-x-2">
                <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-sm">share</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-sm">link</span>
                </button>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1 rounded-full bg-surface-container text-xs font-label uppercase tracking-wider text-on-surface-variant">{article.category}</span>
            </div>
          </div>

          {/* Previous/Next Navigation */}
          <nav className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 overflow-hidden rounded-xl">
            {prevArticle ? (
              <Link href={`/blog/${prevArticle.id}`} className="group bg-surface hover:bg-surface-container-low transition-all duration-500 p-8 flex items-center space-x-6">
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 relative">
                  <Image fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt={prevArticle.imageAlt} src={prevArticle.imageUrl} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary block mb-1">Previous</span>
                  <h4 className="text-lg font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{prevArticle.title}</h4>
                </div>
              </Link>
            ) : <div />}
            {nextArticle ? (
              <Link href={`/blog/${nextArticle.id}`} className="group bg-surface hover:bg-surface-container-low transition-all duration-500 p-8 flex items-center justify-end text-right space-x-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary block mb-1">Next Up</span>
                  <h4 className="text-lg font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{nextArticle.title}</h4>
                </div>
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 relative">
                  <Image fill className="object-cover group-hover:scale-110 transition-transform duration-700" alt={nextArticle.imageAlt} src={nextArticle.imageUrl} />
                </div>
              </Link>
            ) : <div />}
          </nav>
        </article>

        {/* Related Stories Section */}
        <section className="max-w-7xl mx-auto px-8 mt-48">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold mb-4 block">Continue Reading</span>
              <h2 className="text-4xl font-headline font-extrabold text-on-surface tracking-tight">Related Stories</h2>
            </div>
            <Link className="text-sm font-bold border-b border-primary pb-1 text-primary hover:opacity-70 transition-opacity uppercase tracking-widest" href="/blog">View Journal</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {relatedArticles.map((related) => (
              <Link key={related.id} href={`/blog/${related.id}`} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden rounded-xl mb-6 relative">
                  <Image fill className="object-cover group-hover:scale-105 transition-transform duration-1000" alt={related.imageAlt} src={related.imageUrl} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 block mb-3">{related.category}</span>
                <h3 className="text-xl font-headline font-bold text-on-surface leading-tight group-hover:text-primary transition-colors mb-4">{related.title}</h3>
                <p className="text-sm text-on-surface-variant/80 line-clamp-2">{related.summary}</p>
              </Link>
            ))}
          </div>
        </section>

    </main>
  );
}
