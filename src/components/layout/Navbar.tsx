'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/blog?category=tech', label: 'TECH' },
  { href: '/blog?category=eat', label: 'EAT' },
  { href: '/blog?category=lifestyle', label: 'LIFESTYLE' },
  { href: '/contact', label: 'ETC' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl">
        <div className="flex justify-between items-center pl-3 pr-3 md:px-8 py-3 w-full">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-bold tracking-tighter text-on-surface font-headline relative z-[60]"
          >
            Digital Curator
          </Link>
          <button
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="material-symbols-outlined text-on-surface text-[7.2rem] relative z-[60] transition-transform duration-300 hover:scale-110 mr-2 md:mr-0"
            style={{ transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
          >
            <span className="lg:scale-150 inline-block">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* 풀스크린 오버레이 */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-surface flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-gmarket text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface hover:text-primary"
              style={{
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0,
                transitionProperty: 'color, transform, opacity',
                transitionDuration: '400ms',
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
