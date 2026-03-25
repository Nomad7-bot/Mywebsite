'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { portfolioItems } from '@/data/portfolio';

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    // desktop: card 400px + gap-8 (32px)
    const step = 432;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section className="pt-10 md:pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-headline text-[1.7rem] md:text-3xl font-bold tracking-tight">Selected{' '}<br className="md:hidden" />Archives</h2>
          <div className="hidden md:flex gap-4">
            <button
              aria-label="Previous"
              onClick={() => scroll('left')}
              className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base">chevron_left</span>
            </button>
            <button
              aria-label="Next"
              onClick={() => scroll('right')}
              className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors"
            >
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative group">
        <div ref={scrollRef} className="flex gap-3 md:gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-8 px-5 md:px-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="flex-none w-[calc(100vw-40px)] md:w-[400px] snap-center md:snap-start group/card md:first:ml-3">
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
