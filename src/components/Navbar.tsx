import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, BookOpen, Shield } from 'lucide-react';
import { PROFILE } from '../data/profile';

export type AppRoute = 'home' | 'work' | 'ctfs' | 'academia';

interface NavbarProps {
  route: AppRoute;
  onNavigate: (route: AppRoute) => void;
}

const NAV_ITEMS: { label: string; route: AppRoute; href: string }[] = [
  { label: 'Home Index', route: 'home', href: '#/' },
  { label: 'All Work (Tagged)', route: 'work', href: '#/work' },
  { label: 'CTFs & CyberStart', route: 'ctfs', href: '#/ctfs' },
  { label: 'Academia & Writing', route: 'academia', href: '#/academia' },
];

export function Navbar({ route, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleNav = (e: React.MouseEvent, target: AppRoute, href: string) => {
    e.preventDefault();
    window.location.hash = href.slice(1);
    onNavigate(target);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#/"
          onClick={(e) => handleNav(e, 'home', '#/')}
          className="group flex items-center gap-2.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-forest bg-surface font-mono text-xs font-bold text-forest transition group-hover:bg-forest group-hover:text-surface">
            &lt;/&gt;
          </span>
          <div className="leading-tight">
            <span className="block whitespace-nowrap font-display text-sm font-bold tracking-tight text-ink">
              Gurpratap Smagh
            </span>
            <span className="block whitespace-nowrap font-mono text-[11px] text-muted">
              bromskiii · Humber Eng &apos;29
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => {
            const active = route === item.route;
            return (
              <a
                key={item.route}
                href={item.href}
                onClick={(e) => handleNav(e, item.route, item.href)}
                className={`whitespace-nowrap rounded-md px-3 py-1.5 font-mono text-xs font-medium transition ${
                  active
                    ? 'bg-forest text-surface'
                    : 'text-muted hover:bg-sand hover:text-ink'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-1.5 sm:flex">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="rounded-md border border-rule bg-surface p-2 text-muted transition hover:border-forest hover:text-forest"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-md border border-rule bg-surface p-2 text-muted transition hover:border-forest hover:text-forest"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.links.medium}
            target="_blank"
            rel="noreferrer"
            aria-label="Medium Articles"
            className="rounded-md border border-rule bg-surface p-2 text-muted transition hover:border-forest hover:text-forest"
          >
            <BookOpen className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.links.ctftimeUser}
            target="_blank"
            rel="noreferrer"
            aria-label="CTFtime Profile"
            className="rounded-md border border-rule bg-surface p-2 text-muted transition hover:border-rust hover:text-rust"
          >
            <Shield className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="ml-1 inline-flex items-center gap-1.5 rounded-md bg-rust px-3 py-1.5 font-mono text-xs font-semibold text-surface transition hover:bg-rust-bright"
          >
            <Mail className="h-3.5 w-3.5" />
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-rule bg-surface p-2 text-ink md:hidden"
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-rule bg-surface px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.route}
                href={item.href}
                onClick={(e) => handleNav(e, item.route, item.href)}
                className={`rounded-md px-3 py-2 font-mono text-xs font-medium ${
                  route === item.route ? 'bg-forest text-surface' : 'text-ink hover:bg-sand'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-wrap gap-2 border-t border-rule pt-3">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded border border-rule bg-paper px-3 py-1.5 font-mono text-xs text-ink"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded border border-rule bg-paper px-3 py-1.5 font-mono text-xs text-ink"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-1.5 rounded bg-rust px-3 py-1.5 font-mono text-xs font-semibold text-surface"
              >
                <Mail className="h-3.5 w-3.5" /> Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
