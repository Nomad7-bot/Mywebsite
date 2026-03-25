import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/ui/ArticleCard';

export const metadata: Metadata = {
  title: 'Archive — Digital Curator',
  description: 'Curated stories on design, technology, lifestyle, and architecture.',
};

const CATEGORIES = ['Tech', 'Eat', 'Lifestyle', 'Etc', 'Design', 'Architecture'] as const;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  const filtered = category
    ? articles.filter(a => a.category.toLowerCase() === category.toLowerCase())
    : articles;

  const activeLabel = category
    ? CATEGORIES.find(c => c.toLowerCase() === category.toLowerCase()) ?? 'Archive'
    : 'All Stories';

  return (
    <main className="pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block font-bold">Archive</span>
          <h1 className="font-gmarket text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.05] uppercase">
            {activeLabel}
          </h1>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-16 pb-8 border-b border-outline-variant/20">
          <Link
            href="/blog"
            className={`px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest transition-colors ${
              !category
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            All
          </Link>
          {CATEGORIES.map(cat => (
            <Link
              key={cat}
              href={`/blog?category=${cat.toLowerCase()}`}
              className={`px-5 py-2 rounded-full font-label text-xs uppercase tracking-widest transition-colors ${
                category?.toLowerCase() === cat.toLowerCase()
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Article Count */}
        <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60 mb-10">
          {filtered.length} {filtered.length === 1 ? 'Story' : 'Stories'}
        </p>

        {/* Article Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {filtered.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <p className="font-headline text-2xl text-on-surface-variant/40">No stories in this category yet.</p>
          </div>
        )}

      </div>
    </main>
  );
}
