import { ArrowLeft, ArrowRight, BookOpen, Expand, ExternalLink, FileText, Github, Globe } from 'lucide-react';
import { PhotoItem } from '../data/types';
import { ALL_ENTRIES } from '../lib/archive';
import { MarkdownBody } from '../lib/markdown';

interface WorkDetailPageProps {
  slug: string;
  onBackToArchive: () => void;
  onOpenEntry: (slug: string) => void;
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
}

export function WorkDetailPage({
  slug,
  onBackToArchive,
  onOpenEntry,
  onOpenLightbox,
}: WorkDetailPageProps) {
  const currentIdx = ALL_ENTRIES.findIndex((e) => e.slug === slug);
  const entry = currentIdx >= 0 ? ALL_ENTRIES[currentIdx] : ALL_ENTRIES[0];
  const nextEntry = ALL_ENTRIES[(Math.max(0, currentIdx) + 1) % ALL_ENTRIES.length];

  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <button
        type="button"
        onClick={onBackToArchive}
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition hover:text-gold"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Archive
      </button>

      <header className="mt-5 border-b border-white/[0.08] pb-6">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
          <span>{entry.venue}</span>
          <span>·</span>
          <span>{entry.date}</span>
        </div>

        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {entry.title}
        </h1>

        <p className="mt-2 text-base text-muted">{entry.subtitle}</p>

        {entry.award && (
          <div className="award-badge mt-4 inline-block rounded-md px-3 py-1 font-mono text-xs font-semibold">
            {entry.award}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {entry.categories.map((c) => (
            <span
              key={c}
              className="rounded-md border border-gold/30 bg-gold/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-gold-badge"
            >
              {c}
            </span>
          ))}
          {entry.tags.map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>
      </header>

      {entry.photo && (
        <div className="mt-6 space-y-2.5">
          <button
            type="button"
            onClick={() =>
              onOpenLightbox(
                entry.referencePhoto ? [entry.photo!, entry.referencePhoto] : [entry.photo!],
                0
              )
            }
            className="group relative block w-full overflow-hidden rounded-[10px] border border-white/[0.08] bg-[#050B16] text-left transition hover:border-gold/55"
          >
            <img
              src={entry.photo.src}
              alt={entry.photo.alt}
              className="aspect-[16/9] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
            />
            <div className="flex items-center justify-between gap-2 border-t border-white/[0.08] bg-[#0B1528] px-4 py-2.5 font-mono text-[11px] text-muted">
              <span>
                <strong className="text-gold-badge">
                  {entry.photo.location} · {entry.photo.date}
                </strong>{' '}
                · {entry.photo.caption}
              </span>
              <Expand className="h-3.5 w-3.5 shrink-0 text-gold" />
            </div>
          </button>

          {entry.referencePhoto && (
            <button
              type="button"
              onClick={() => onOpenLightbox([entry.photo!, entry.referencePhoto!], 1)}
              className="glass-card flex w-full items-center gap-3 p-2.5 text-left"
            >
              <img
                src={entry.referencePhoto.src}
                alt={entry.referencePhoto.alt}
                className="h-14 w-24 shrink-0 rounded border border-white/10 object-cover"
              />
              <div className="font-mono text-xs text-muted">
                <span className="block font-semibold text-gold-badge">Audience Reference</span>
                <span>{entry.referencePhoto.caption}</span>
              </div>
            </button>
          )}
        </div>
      )}

      <div className="mt-8">
        <MarkdownBody content={entry.markdownBody} />
      </div>

      {(entry.repoUrl || entry.liveUrl || entry.pdfUrl || entry.writeupUrl || entry.postUrl) && (
        <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.08] pt-6 font-mono text-xs">
          {entry.repoUrl && (
            <a
              href={entry.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gold/45 bg-gold/15 px-3.5 py-2 font-semibold text-gold-badge transition hover:bg-gold hover:text-navy"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub Repository
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {entry.liveUrl && (
            <a
              href={entry.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.05] px-3.5 py-2 text-ink transition hover:border-gold/55 hover:text-gold"
            >
              <Globe className="h-3.5 w-3.5" />
              Live Deployment
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {entry.pdfUrl && (
            <a
              href={entry.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gold/45 bg-gold/15 px-3.5 py-2 font-semibold text-gold-badge transition hover:bg-gold hover:text-navy"
            >
              <FileText className="h-3.5 w-3.5" />
              Open Illustrated PDF
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {entry.writeupUrl && (
            <a
              href={entry.writeupUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.05] px-3.5 py-2 text-ink transition hover:border-gold/55 hover:text-gold"
            >
              <BookOpen className="h-3.5 w-3.5" />
              External Writeup / Proof
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
          {entry.postUrl && (
            <a
              href={entry.postUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.05] px-3.5 py-2 text-ink transition hover:border-gold/55 hover:text-gold"
            >
              LinkedIn Post
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      )}

      <nav className="mt-10 flex flex-col justify-between gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={onBackToArchive}
          className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-muted transition hover:text-gold"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Archive
        </button>

        <button
          type="button"
          onClick={() => onOpenEntry(nextEntry.slug)}
          className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-gold-badge transition hover:text-gold-hover"
        >
          <span>Next Entry: {nextEntry.title}</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </nav>
    </article>
  );
}
