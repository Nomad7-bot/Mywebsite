import Hero from '@/components/ui/Hero';
import ArticleCard from '@/components/ui/ArticleCard';
import Carousel from '@/components/ui/Carousel';
import { articles } from '@/data/articles';

export default function Home() {
  const featuredArticle = articles.find(a => a.id === 'ritual-morning-pourover') || articles[0];
  const sideArticles = articles.filter(a => a.id !== featuredArticle.id).slice(0, 4);

  return (
    <>
      <Hero article={featuredArticle} />
      <div className="max-w-7xl mx-auto px-8 pt-10 md:pt-24 pb-24">
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
        
        <Carousel />
      </div>
    </>
  );
}
