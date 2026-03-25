import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/data/articles';

export default function ArticleCard({ article, featured = false }: { article: Article, featured?: boolean }) {
  return (
    <article className="group">
      <Link href={`/blog/${article.id}`} className="block">
        <div className={`mb-6 overflow-hidden bg-surface-container-low relative ${featured ? '-mx-8 md:mx-0 rounded-none md:rounded-xl aspect-[5/6] md:aspect-[4/5]' : 'rounded-xl aspect-[3/4]'}`}>
          <Image 
            src={article.imageUrl} 
            alt={article.imageAlt} 
            fill
            className={`object-cover transition-transform duration-700 ${featured ? 'group-hover:scale-[1.03]' : 'group-hover:scale-105'}`}
          />
        </div>
        <div className={`space-y-3 ${featured ? 'max-w-xl space-y-4' : ''}`}>
          <div className="flex items-center gap-3">
            <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">{article.category}</span>
            <span className="text-[10px] text-on-surface/40 uppercase tracking-widest">{article.date}</span>
          </div>
          <h3 className={`font-headline font-bold transition-colors group-hover:text-primary ${featured ? 'text-3xl leading-tight' : 'text-lg leading-snug'}`}>
            {article.title}
          </h3>
          <p className={`text-on-surface-variant leading-relaxed ${featured ? 'text-base' : 'text-xs line-clamp-2'}`}>
            {article.summary}
          </p>
        </div>
      </Link>
    </article>
  );
}
