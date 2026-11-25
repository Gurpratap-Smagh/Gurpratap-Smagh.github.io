import { BookOpen, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS, PROFILE } from '../data/profile';

export type AppRoute = 'home' | 'work' | 'ctfs' | 'academia';

interface NavbarProps {
  isDetailPage: boolean;
  onGoHome: (section?: 'pinned' | 'archive') => void;
}

export function Navbar({ isDetailPage, onGoHome }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-navy/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            onGoHome();
          }}
          className="flex items-center gap-2.5 text-left"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-gold/40 bg-gold/10 font-mono text-xs font-bold text-gold-badge">
            GS
          </span>
          <div>
            <div className="font-display text-sm font-bold leading-tight text-ink">
              Gurpratap Smagh
            </div>
            <div className="font-mono text-[10px] text-muted">
              bromskiii · Humber B.Eng. &apos;29
            </div>
          </div>
        </a>

        <div className="flex items-center gap-2 sm:gap-3">
          {!isDetailPage ? (
            <>
              <a
                href="#pinned"
                onClick={(e) => {
                  e.preventDefault();
                  onGoHome('pinned');
                }}
                className="hidden rounded-md px-2.5 py-1 font-mono text-xs text-muted transition hover:text-gold sm:inline-block"
              >
                Highlights
              </a>
              <a
                href="#archive"
                onClick={(e) => {
                  e.preventDefault();
                  onGoHome('archive');
                }}
                className="hidden rounded-md px-2.5 py-1 font-mono text-xs text-muted transition hover:text-gold sm:inline-block"
              >
                Archive
              </a>
            </>
          ) : (
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                onGoHome();
              }}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-ink transition hover:border-gold/55 hover:text-gold"
            >
              &lt;- Hub
            </a>
          )}

          <a
            href={CERTIFICATIONS[0]?.url}
            target="_blank"
            rel="noreferrer"
            title="GIAC GFACT Credly"
            aria-label="GIAC GFACT Credly"
            className="rounded-md border border-white/10 bg-white/[0.04] p-1.5 text-muted transition hover:border-gold/55 hover:text-gold"
          >
            <ShieldCheck className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            aria-label="GitHub"
            className="rounded-md border border-white/10 bg-white/[0.04] p-1.5 text-muted transition hover:border-gold/55 hover:text-gold"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
            className="rounded-md border border-white/10 bg-white/[0.04] p-1.5 text-muted transition hover:border-gold/55 hover:text-gold"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.links.medium}
            target="_blank"
            rel="noreferrer"
            title="Medium"
            aria-label="Medium"
            className="hidden rounded-md border border-white/10 bg-white/[0.04] p-1.5 text-muted transition hover:border-gold/55 hover:text-gold sm:inline-flex"
          >
            <BookOpen className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-1.5 rounded-md border border-gold/45 bg-gold/15 px-2.5 py-1.5 font-mono text-xs font-semibold text-gold-badge transition hover:bg-gold hover:text-navy"
          >
            <Mail className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>
      </div>
    </header>
  );
}
