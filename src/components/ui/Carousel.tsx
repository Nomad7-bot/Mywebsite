'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { portfolioItems } from '@/data/portfolio';

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('div')?.offsetWidth ?? 400;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -(cardWidth + 32) : cardWidth + 32, behavior: 'smooth' });
  };

  return (
    <section className="mt-32">
      <div className="flex items-center justify-between mb-12">
        <h2 className="font-headline text-3xl font-bold tracking-tight">Selected Archives</h2>
        <div className="flex gap-4">
          <button
            aria-label="Previous"
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
          >
            <span className="material-symbols-outlined text-xl">chevron_left</span>
          </button>
          <button
            aria-label="Next"
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
          >
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="relative group">
        <div ref={scrollRef} className="flex gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 -mx-4 px-4">
          {portfolioItems.map((item) => (
            <div key={item.id} className="flex-none w-[320px] md:w-[400px] snap-start group/card">
              <div className="mb-6 overflow-hidden rounded-xl bg-surface-container-low aspect-[3/4] relative">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  className="object-cover group-hover/card:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="space-y-3">
                <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">{item.volume}</span>
                <h3 className="font-headline text-xl font-bold leading-tight group-hover/card:text-primary transition-colors">{item.title}</h3>
                <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
