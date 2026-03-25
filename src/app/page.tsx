import Hero from '@/components/ui/Hero';
import ArticleCard from '@/components/ui/ArticleCard';
import Carousel from '@/components/ui/Carousel';
import { articles } from '@/data/articles';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredArticle = articles.find(a => a.id === 'ritual-morning-pourover') || articles[0];
  const otherArticles = articles.filter(a => a.id !== featuredArticle.id);
  const sideArticles = otherArticles.slice(0, 4);
  const secondArticle = otherArticles[0];
  const secondHref = `/blog/${secondArticle.id}`;

  return (
    <>
      <Hero article={featuredArticle} />
      <div className="max-w-7xl mx-auto px-8 pt-10 md:pt-24 pb-0 md:pb-24">
        <section>
          <div className="flex items-center justify-between mb-6 md:mb-16">
            <h2 className="font-headline text-3xl font-bold tracking-tight">Latest Curations</h2>
            <div className="h-px flex-1 bg-outline-variant/30 mx-8"></div>
            <button className="font-label text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">View Archive</button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-20">
            <div className="lg:col-span-7">
              <ArticleCard article={featuredArticle} featured={true} />
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-16">
              {sideArticles.map((article, index) => (
                <div key={article.id} className={index % 2 === 1 ? 'mt-12' : ''}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* 3번째 섹션 — Hero 반전 레이아웃 (텍스트 LEFT, 이미지 RIGHT) */}
      <section className="w-full bg-surface-container-lowest pt-0 pb-6 lg:py-12">
        <div className="max-w-7xl mx-auto px-0 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col justify-center py-12 px-8 md:px-0 order-2 lg:order-1">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6 font-bold">Special Edition</span>
              <h2 className="font-headline text-4xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-8 text-on-surface hover:text-primary transition-colors cursor-pointer">
                <Link href={secondHref}>{secondArticle.title}</Link>
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md">
                {secondArticle.summary}
              </p>
              <Link href={secondHref} className="inline-flex items-center gap-3 font-label text-sm font-bold text-primary group">
                Read the essay
                <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <Link href={secondHref} className="lg:col-span-7 overflow-hidden rounded-b-xl md:rounded-xl shadow-xl md:shadow-2xl relative aspect-[16/10] block group cursor-pointer order-1 lg:order-2">
              <Image
                src={secondArticle.imageUrl}
                alt={secondArticle.imageAlt}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-1000"
              />
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 pt-10 md:pt-24 pb-24">
        <Carousel />
      </div>
    </>
  );
}
