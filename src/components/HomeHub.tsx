import { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, FileText, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS, PROFILE } from '../data/profile';
import {
  ARCHIVE_ENTRIES,
  ARCHIVE_FILTERS,
  ArchiveCategory,
  ArchiveEntry,
  PINNED_ENTRIES,
} from '../lib/archive';

interface HomeHubProps {
  onOpenEntry: (slug: string) => void;
}

function EntryCard({
  entry,
  featured,
  onOpen,
}: {
  entry: ArchiveEntry;
  featured?: boolean;
  onOpen: (slug: string) => void;
}) {
  return (
    <a
      href={`#/work/${entry.slug}`}
      onClick={(e) => {
        e.preventDefault();
        onOpen(entry.slug);
      }}
      className={`${
        featured ? 'glass-card-featured' : 'glass-card'
      } group flex flex-col justify-between overflow-hidden text-left`}
    >
      <div>
        {entry.photo && (
          <div className="aspect-[16/9] w-full overflow-hidden border-b border-white/[0.08] bg-[#050B16]">
            <img
              src={entry.photo.src}
              alt={entry.photo.alt}
              loading="lazy"
              className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
            />
          </div>
        )}

        <div className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-muted">
            <span className="truncate">{entry.venue}</span>
            <span className="shrink-0">{entry.date}</span>
          </div>

          <h3 className="mt-2 font-display text-[18px] font-semibold leading-snug text-ink group-hover:text-gold-hover sm:text-[19px]">
            {entry.title}
          </h3>

          {entry.award && (
            <div className="award-badge mt-2 inline-block rounded-md px-2.5 py-0.5 font-mono text-[11px] font-medium">
              {entry.award}
            </div>
          )}

          <p className="mt-2.5 line-clamp-3 text-[14px] leading-relaxed text-muted">
            {entry.summary}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="flex flex-wrap gap-1.5">
          {entry.tags.slice(0, 4).map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/[0.08] pt-3 font-mono text-xs">
          <span className="font-medium text-gold group-hover:text-gold-hover">
            Read Deep Dive -&gt;
          </span>
          <span className="text-[11px] text-muted">
            {entry.pdfUrl ? 'PDF + Dossier' : entry.writeupUrl ? 'Writeup' : 'Architecture'}
          </span>
        </div>
      </div>
    </a>
  );
}

export function HomeHub({ onOpenEntry }: HomeHubProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | ArchiveCategory>('All');

  const filteredArchive = useMemo(() => {
    if (activeFilter === 'All') return ARCHIVE_ENTRIES;
    return ARCHIVE_ENTRIES.filter((entry) => entry.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div>
      {/* Compact Hero (~40-45% of initial viewport so Pinned Highlights peek above the fold) */}
      <section className="hero-navy border-b border-white/[0.08]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-3 py-1 font-mono text-[11px] font-medium text-gold-badge">
              <span>Humber Polytechnic B.Eng. &apos;29 · 87.9% Dean&apos;s List · GIAC GFACT (#8458)</span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
              {PROFILE.fullName}
            </h1>

            <p className="mt-2 font-mono text-sm font-medium text-gold-badge sm:text-base">
              Security Engineering · DFIR · Cloud Incident Triage &amp; Hardware/OT Systems
            </p>

            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Representing Humber on international CTF stages in France (9th Student / 14th Overall),
              shipping causal threat-intel pipelines, and winning solo &amp; team hackathons.
              Available for Summer 2027 Co-op (4 to 16 months).
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <a
                href={CERTIFICATIONS[0]?.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-gold/50 bg-gold/15 px-3.5 py-2 font-mono text-xs font-semibold text-gold-badge transition hover:bg-gold hover:text-navy"
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                GIAC GFACT Credly
              </a>
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 font-mono text-xs text-ink transition hover:border-gold/55 hover:text-gold"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 font-mono text-xs text-ink transition hover:border-gold/55 hover:text-gold"
              >
                <Linkedin className="h-3.5 w-3.5" />
                LinkedIn
              </a>
              <a
                href={PROFILE.links.medium}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 font-mono text-xs text-ink transition hover:border-gold/55 hover:text-gold"
              >
                <BookOpen className="h-3.5 w-3.5" />
                Medium
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 font-mono text-xs text-ink transition hover:border-gold/55 hover:text-gold"
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
              <a
                href="/writeups/midnight-flag-voltage-fault-injection.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2 font-mono text-xs text-muted transition hover:border-gold/55 hover:text-gold"
              >
                <FileText className="h-3.5 w-3.5" />
                France Hardware PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pinned Highlights (3 Cards Max) */}
      <section id="pinned" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-gold-badge">
              Pinned Highlights
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink">
              Flagship Engineering, International Finals &amp; Solo Win
            </h2>
          </div>
          <a
            href="#archive"
            className="hidden items-center gap-1 font-mono text-xs text-muted transition hover:text-gold sm:inline-flex"
          >
            Jump to full archive <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {PINNED_ENTRIES.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} featured onOpen={onOpenEntry} />
          ))}
        </div>
      </section>

      {/* Sticky Tag Filter Bar */}
      <div
        id="archive"
        className="sticky top-14 z-30 border-y border-white/[0.08] bg-navy/90 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Archive Filter">
            {ARCHIVE_FILTERS.map((filter) => {
              const active = activeFilter === filter;
              const count =
                filter === 'All'
                  ? ARCHIVE_ENTRIES.length
                  : ARCHIVE_ENTRIES.filter((e) => e.categories.includes(filter)).length;

              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-md px-3 py-1.5 font-mono text-xs transition ${
                    active
                      ? 'border-b-2 border-gold bg-gold/15 font-semibold text-gold-badge'
                      : 'border border-white/[0.08] bg-white/[0.03] text-muted hover:border-gold/40 hover:text-ink'
                  }`}
                >
                  {filter} <span className="opacity-75">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="font-mono text-[11px] text-muted">
            Showing <span className="font-semibold text-gold-badge">{filteredArchive.length}</span>{' '}
            entries
          </div>
        </div>
      </div>

      {/* Unified Filterable Archive */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredArchive.map((entry) => (
            <EntryCard key={entry.slug} entry={entry} onOpen={onOpenEntry} />
          ))}
        </div>
      </section>
    </div>
  );
}
