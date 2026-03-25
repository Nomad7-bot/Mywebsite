import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';

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
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-primary">{article.category} / {article.date}</span>
              <div className="h-px w-8 bg-outline-variant/30"></div>
              <span className="text-xs uppercase tracking-[0.2em] text-on-surface-variant/60">6 Min Read</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight mb-8">
              {article.title}
            </h1>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-3xl mx-auto px-8">
          <div className="space-y-12 text-lg leading-[1.8] text-on-surface/80 font-body">
            <p className="first-letter:text-7xl first-letter:font-headline first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-primary">
              In an era defined by constant noise and digital fragmentation, the pursuit of clarity has become an act of rebellion. We often find ourselves reacting to the world rather than shaping our place within it. Purposeful living isn&apos;t about productivity hacks or rigid minimalism; it&apos;s about the intentional alignment of our surroundings with our inner values.
            </p>
            <p>
              When we curate our spaces—choosing the texture of a wooden desk or the specific warmth of a morning light—we are setting the stage for the life we want to lead. This digital journal explores how the intersection of architecture, design, and daily habit creates a sanctuary for the modern mind.
            </p>

            {/* Pull Quote */}
            <blockquote className="my-16 py-8 px-10 border-l-4 border-primary bg-surface-container-low rounded-r-xl italic">
              <p className="text-2xl font-headline font-medium text-on-surface leading-snug">
                &quot;Design is not just what it looks like and feels like. Design is how it works.&quot;
              </p>
              <footer className="mt-4 text-sm font-label uppercase tracking-widest text-primary">— Steve Jobs</footer>
            </blockquote>

            <h2 className="text-3xl font-headline font-bold text-on-surface pt-6 tracking-tight">The Architecture of Silence</h2>
            <p>
              Silence is more than the absence of noise. In design, it is the presence of negative space. By allowing an object room to breathe, we grant it significance. This philosophy extends to our digital interfaces—where every pixel must justify its existence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
              <div className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden rounded-xl relative">
                  <Image fill className="object-cover" alt="Shadow play in modern geometry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuXS3kgZ2KT1XKSUi_AblMO1usBOjtsYMVsUy25IQejW2mxhWdb-Br_-QBUSUdi9sJRmjHdN6b1aQf_CTk_d5QtE5CRtPedVuTYDl-C6H3D5nZZ-CRSkItvNe398o7a7RFH8p-ZcYz-Egu-5odUwhmOMdSV1V6w2YAqpdGP_0Oi8rQBVyUM0wVnI8DnHoBDiNONlz0D1n5YrkQoG_Vg5t8no7EDXIpSYcrBrXiSkszj10ssj9g2_W5wKn6fChb8FntEPtSUmUzxw" />
                </div>
                <p className="text-sm italic text-on-surface-variant/60">Shadow play in modern geometry.</p>
              </div>
              <div className="space-y-4 pt-12">
                <div className="aspect-[4/5] overflow-hidden rounded-xl relative">
                  <Image fill className="object-cover" alt="Form following function in light oak" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs4rZRy_P-h5DPKn2roboKiA2lxLgShpAPkg00nKAPE0wPBzxx0oxb5SfXqrCiv3dAPquUU-TDZBi_61yM0GiilhcyOQqF8VsUBTdenRTfGuFFW4Nv9lIUmPJBCgGE3BbRNkA50YoWgXrGHvqNZbl9R7QLHs4k32jK66qHoHDetJEHqrAtJpkpM66ZdY35i0vD3_xaGA0SiW9oGRBA8om0_iclt2NQxl0B6KHErTmX3Bd8tAAZq6jRwFn79sdXW-P_jgQt3Nf3zg" />
                </div>
                <p className="text-sm italic text-on-surface-variant/60">Form following function in light oak.</p>
              </div>
            </div>

            <h3 className="text-2xl font-headline font-semibold text-on-surface tracking-tight">Key Takeaways</h3>
            <ul className="space-y-6 list-none pl-0">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-4 mt-1" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span>Prioritize tactile quality over sheer quantity in your physical environment.</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-4 mt-1" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span>Embrace the &apos;Digital Sabbath&apos; to reconnect with analog textures.</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-primary mr-4 mt-1" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                <span>Curate your toolset—only use what serves your primary creative intent.</span>
              </li>
            </ul>
            <p>
              Ultimately, the art of purposeful living is a continuous process of refinement. It is about stripping away the non-essential until only what is vital remains. As we move forward into a more automated world, the human touch—the grain of the wood, the weight of the paper—becomes our most valuable luxury.
            </p>
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
              <span className="px-4 py-1 rounded-full bg-surface-container text-xs font-label uppercase tracking-wider text-on-surface-variant">Design</span>
              <span className="px-4 py-1 rounded-full bg-surface-container text-xs font-label uppercase tracking-wider text-on-surface-variant">Lifestyle</span>
              <span className="px-4 py-1 rounded-full bg-surface-container text-xs font-label uppercase tracking-wider text-on-surface-variant">Tech</span>
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
            <a className="text-sm font-bold border-b border-primary pb-1 text-primary hover:opacity-70 transition-opacity uppercase tracking-widest" href="#">View Journal</a>
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
