import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/data/articles';

export default function Hero({ article }: { article: Article }) {
  const href = `/blog/${article.id}`;

  return (
    <section className="w-full min-h-0 lg:min-h-[100svh] pt-[52px] pb-6 lg:pb-12 lg:flex lg:items-center lg:pt-0 relative overflow-hidden bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-0 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-12 items-center">
          <Link href={href} className="lg:col-span-7 overflow-hidden rounded-b-xl md:rounded-xl shadow-xl md:shadow-2xl relative aspect-[16/10] block group cursor-pointer">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-1000"
            />
          </Link>
          <div className="lg:col-span-5 flex flex-col justify-center py-12 px-8 md:px-0">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 font-bold">Featured Story</span>
            <h1 className="font-headline text-4xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-8 text-on-surface hover:text-primary transition-colors cursor-pointer">
              <Link href={href}>{article.title}</Link>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md">
              {article.summary}
            </p>
            <Link href={href} className="inline-flex items-center gap-3 font-label text-sm font-bold text-primary group">
              Read the essay
              <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-40 animate-bounce">
        <span className="font-label text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="material-symbols-outlined text-sm">expand_more</span>
      </div>
    </section>
  );
}
