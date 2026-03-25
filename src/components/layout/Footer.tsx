import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-primary/10 bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-20 gap-8 max-w-7xl mx-auto">
        <div className="font-label text-xs uppercase tracking-widest opacity-80 text-primary">
          © {new Date().getFullYear()} Digital Curator. Designed for the Organic Minimalist.
        </div>
        <div className="flex gap-10">
          <Link href="#" className="font-label text-xs uppercase tracking-widest text-on-surface/40 hover:text-primary transition-colors">Twitter</Link>
          <Link href="#" className="font-label text-xs uppercase tracking-widest text-on-surface/40 hover:text-primary transition-colors">Instagram</Link>
          <Link href="#" className="font-label text-xs uppercase tracking-widest text-on-surface/40 hover:text-primary transition-colors">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}
