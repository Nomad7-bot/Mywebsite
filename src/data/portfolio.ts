// src/data/portfolio.ts
export interface PortfolioItem {
  id: string;
  volume: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'vol-01',
    volume: 'Volume 01',
    title: 'The Mid-Century Modernism Resurgence.',
    description: 'An in-depth look at the enduring legacy of the Eames and Miller era in today\'s digital homes.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7hP9Zg_Rj5LInXf-eO7Yv_rP9z-hW6e8z8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8',
    imageAlt: 'archival photo of mid-century modern furniture'
  },
  {
    id: 'vol-02',
    volume: 'Volume 02',
    title: 'Monochrome as a Mindset.',
    description: 'Why limiting your palette can actually expand your creative horizons and mental clarity.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8kQ0vR_V9lP6m_v8z8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8',
    imageAlt: 'black and white architecture photo'
  },
  {
    id: 'vol-03',
    volume: 'Volume 03',
    title: 'The Craft of Analog Productivity.',
    description: 'Exploring the tactile joy of paper planners, fountain pens, and offline thinking.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuF2nL9pE_Z1mO8v_v8z8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8',
    imageAlt: 'top view of a well-organized creative workspace'
  },
  {
    id: 'vol-04',
    volume: 'Volume 04',
    title: 'Sustenance in the City.',
    description: 'How urban dwellers are reclaiming their relationship with food through indoor cultivation.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9kL0mB_Y3mP4v_v8z8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8x8',
    imageAlt: 'minimalist kitchen garden'
  }
];
