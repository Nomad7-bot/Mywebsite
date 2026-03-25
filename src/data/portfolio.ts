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
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c1bad943?w=800&q=80',
    imageAlt: 'archival photo of mid-century modern furniture'
  },
  {
    id: 'vol-02',
    volume: 'Volume 02',
    title: 'Monochrome as a Mindset.',
    description: 'Why limiting your palette can actually expand your creative horizons and mental clarity.',
    imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&q=80',
    imageAlt: 'black and white architecture photo'
  },
  {
    id: 'vol-03',
    volume: 'Volume 03',
    title: 'The Craft of Analog Productivity.',
    description: 'Exploring the tactile joy of paper planners, fountain pens, and offline thinking.',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    imageAlt: 'top view of a well-organized creative workspace'
  },
  {
    id: 'vol-04',
    volume: 'Volume 04',
    title: 'Sustenance in the City.',
    description: 'How urban dwellers are reclaiming their relationship with food through indoor cultivation.',
    imageUrl: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80',
    imageAlt: 'minimalist kitchen garden'
  },
  {
    id: 'vol-05',
    volume: 'Volume 05',
    title: 'The New Quiet Luxury.',
    description: 'How understated materials and restrained palettes are redefining what it means to dress with intention.',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
    imageAlt: 'minimalist fashion editorial in neutral tones'
  },
  {
    id: 'vol-06',
    volume: 'Volume 06',
    title: 'Architecture of Solitude.',
    description: 'A study of spaces designed not for gathering but for focused, contemplative presence.',
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80',
    imageAlt: 'minimalist interior with single chair by window'
  },
  {
    id: 'vol-07',
    volume: 'Volume 07',
    title: 'Terroir of the Table.',
    description: 'Tracing the invisible lines between soil, season, and the meals that define a culture\'s identity.',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    imageAlt: 'carefully plated seasonal dish on stone surface'
  },
  {
    id: 'vol-08',
    volume: 'Volume 08',
    title: 'Print in the Age of Streams.',
    description: 'Independent publishers are betting on the permanence of ink as a counter to the ephemeral feed.',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    imageAlt: 'stack of curated independent magazines on wooden desk'
  }
];
