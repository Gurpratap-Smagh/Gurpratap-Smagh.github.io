import { useEffect } from 'react';
import { ExternalLink, GitCommit, Github, Globe, X } from 'lucide-react';
import { PhotoItem, WorkItem } from '../data/types';

interface WorkDetailModalProps {
  item: WorkItem;
  onClose: () => void;
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
}

export function WorkDetailModal({ item, onClose, onOpenLightbox }: WorkDetailModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <div
        className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-rule bg-surface p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-rule pb-4">
          <div>
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="rounded border border-forest/30 bg-forest-soft px-2 py-0.5 font-mono text-[10px] font-semibold text-forest"
                >
                  {t}
                </span>
              ))}
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink">{item.title}</h2>
            <p className="mt-0.5 font-mono text-xs text-muted">
              {item.venue} · {item.date}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-rule bg-paper p-1.5 text-ink hover:border-rust hover:text-rust"
            aria-label="Close project dossier"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {item.photo && (
          <button
            type="button"
            onClick={() => onOpenLightbox([item.photo!], 0)}
            className="group mt-4 block w-full overflow-hidden rounded-lg border border-rule bg-sand text-left"
          >
            <img
              src={item.photo.src}
              alt={item.photo.alt}
              className="aspect-[16/9] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
            />
            <div className="border-t border-rule bg-paper px-3 py-2 font-mono text-[11px] text-muted">
              <span className="font-semibold text-rust">
                {item.photo.location} · {item.photo.date}
              </span>{' '}
              ({item.photo.caption})
            </div>
          </button>
        )}

        {item.outcome && (
          <div className="mt-4 inline-block rounded border border-ochre/35 bg-ochre-soft px-3 py-1 font-mono text-xs font-semibold text-ochre">
            {item.outcome}
          </div>
        )}

        <p className="mt-3 text-sm leading-relaxed text-ink">{item.summary}</p>

        <div className="mt-4 rounded-lg border border-rule bg-paper/80 p-4 text-xs leading-relaxed text-ink">
          <div className="font-mono font-semibold uppercase tracking-wider text-forest">
            Technical Architecture
          </div>
          <p className="mt-1.5">{item.technicalArchitecture}</p>
        </div>

        {item.tradeOff && (
          <div className="mt-3 rounded-lg border border-rust/25 bg-rust-soft/70 p-4 text-xs leading-relaxed text-ink">
            <div className="font-mono font-semibold uppercase tracking-wider text-rust">
              Hard Trade-Off / Pivot
            </div>
            <p className="mt-1.5">{item.tradeOff}</p>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-rule bg-sand/70 px-2 py-0.5 font-mono text-[11px] text-ink"
            >
              {tech}
            </span>
          ))}
          {item.softSkills?.map((sk) => (
            <span
              key={sk}
              className="rounded border border-ochre/30 bg-ochre-soft/70 px-2 py-0.5 font-mono text-[11px] text-ochre"
            >
              {sk}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-4">
          {item.gitProof ? (
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted">
              <GitCommit className="h-3.5 w-3.5 text-forest" />
              {item.gitProof}
            </span>
          ) : (
            <span />
          )}

          <div className="flex flex-wrap gap-2">
            {item.repoUrl && (
              <a
                href={item.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded border border-rule bg-paper px-3 py-1.5 font-mono text-xs font-medium text-ink hover:border-forest hover:text-forest"
              >
                <Github className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded bg-forest px-3 py-1.5 font-mono text-xs font-medium text-surface hover:bg-forest-bright"
              >
                <Globe className="h-3.5 w-3.5" />
                Live App
              </a>
            )}
            {item.writeupUrl && (
              <a
                href={item.writeupUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded border border-rule bg-paper px-3 py-1.5 font-mono text-xs font-medium text-cobalt hover:border-cobalt"
              >
                Writeup
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            {item.postUrl && (
              <a
                href={item.postUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded border border-rule bg-paper px-3 py-1.5 font-mono text-xs text-muted hover:text-ink"
              >
                Post
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
