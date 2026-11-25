import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PROFILE } from '../data/profile';

const JUMP_LINKS = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-2.5 text-left">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy font-mono text-xs font-bold text-gold">
            GS
          </span>
          <span className="font-display text-sm font-bold tracking-tight text-navy sm:text-base">
            Gurpratap Smagh
          </span>
        </a>

        <nav className="hidden items-center gap-6 sm:flex" aria-label="Section navigation">
          {JUMP_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs font-medium text-muted transition hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs font-medium text-body transition hover:text-navy"
          >
            GitHub
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs font-medium text-body transition hover:text-navy"
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-line p-1.5 text-navy sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-white px-4 py-3 sm:hidden">
          <div className="flex flex-wrap items-center gap-4">
            {JUMP_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs font-medium text-body hover:text-navy"
              >
                {item.label}
              </a>
            ))}
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs font-medium text-body hover:text-navy"
            >
              GitHub
            </a>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs font-medium text-body hover:text-navy"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
