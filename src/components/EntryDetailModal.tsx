import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
  Github,
  Globe,
  X,
} from 'lucide-react';
import { PortfolioEntry } from '../data/portfolioEntries';

interface EntryDetailModalProps {
  entry: PortfolioEntry;
  onClose: () => void;
}

export function EntryDetailModal({ entry, onClose }: EntryDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'build' | 'notes'>('build');
  const [photoIdx, setPhotoIdx] = useState(0);

  useEffect(() => {
    setActiveTab('build');
    setPhotoIdx(0);
  }, [entry.id]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const photos = entry.mediaGallery;
  const activePhoto = photos[photoIdx];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/75 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={entry.title}
      onClick={onClose}
    >
      <div
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-line bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dark #081020 Modal Header */}
        <header className="bg-navy px-5 py-4 text-white sm:px-6 sm:py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded border border-gold/60 bg-gold/20 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-gold">
                  {entry.outcomeBadge}
                </span>
                <span className="font-mono text-xs text-slate-300">
                  {entry.venue} · {entry.date}
                </span>
              </div>
              <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                {entry.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close detail modal"
              className="rounded-md border border-white/20 bg-navy-secondary p-1.5 text-slate-200 transition hover:border-gold hover:text-gold"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {(entry.links.repo ||
            entry.links.writeup ||
            entry.links.demo ||
            entry.links.pdf ||
            entry.links.post) && (
            <div className="mt-3.5 flex flex-wrap gap-2 font-mono text-xs">
              {entry.links.repo && (
                <a
                  href={entry.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded border border-white/20 bg-navy-secondary px-2.5 py-1 text-white transition hover:border-gold hover:text-gold"
                >
                  <Github className="h-3.5 w-3.5" />
                  Repo
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {entry.links.demo && (
                <a
                  href={entry.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded border border-white/20 bg-navy-secondary px-2.5 py-1 text-white transition hover:border-gold hover:text-gold"
                >
                  <Globe className="h-3.5 w-3.5" />
                  Live Demo
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {entry.links.pdf && (
                <a
                  href={entry.links.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded border border-gold/60 bg-gold/20 px-2.5 py-1 font-semibold text-gold transition hover:bg-gold hover:text-navy"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Writeup PDF
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {entry.links.writeup && (
                <a
                  href={entry.links.writeup}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded border border-gold/50 bg-gold/15 px-2.5 py-1 font-semibold text-gold transition hover:bg-gold hover:text-navy"
                >
                  Writeup / Proof
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
              {entry.links.post && (
                <a
                  href={entry.links.post}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded border border-white/20 bg-navy-secondary px-2.5 py-1 text-slate-200 transition hover:border-gold hover:text-gold"
                >
                  Pitch / Post
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          )}
        </header>

        <div className="flex-1 overflow-y-auto">
          {/* Multi-photo carousel */}
          {activePhoto && (
            <div className="border-b border-line bg-slatebg">
              <div className={`relative ${activePhoto.src.includes('logo') ? 'bg-white p-4' : 'bg-navy'}`}>
                <img
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  className={`aspect-[16/9] max-h-[320px] w-full ${
                    activePhoto.src.includes('logo')
                      ? 'object-contain'
                      : 'object-cover object-top'
                  }`}
                />

                {photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setPhotoIdx((photoIdx - 1 + photos.length) % photos.length)}
                      aria-label="Previous media item"
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-navy/85 p-1.5 text-white transition hover:border-gold hover:text-gold"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setPhotoIdx((photoIdx + 1) % photos.length)}
                      aria-label="Next media item"
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-navy/85 p-1.5 text-white transition hover:border-gold hover:text-gold"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-2.5 font-mono text-[11px] text-muted sm:px-6">
                <span>{activePhoto.caption}</span>
                {photos.length > 1 && (
                  <span className="font-semibold text-navy">
                    {photoIdx + 1} / {photos.length}
                  </span>
                )}
              </div>

              {photos.length > 1 && (
                <div className="flex gap-2 border-t border-line bg-white px-5 py-2.5 sm:px-6">
                  {photos.map((img, i) => (
                    <button
                      key={img.src}
                      type="button"
                      onClick={() => setPhotoIdx(i)}
                      aria-label={`View photo ${i + 1}`}
                      className={`h-11 w-20 overflow-hidden rounded border transition ${
                        i === photoIdx
                          ? 'border-gold ring-2 ring-gold/40'
                          : 'border-line opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Two Clean Tabs */}
          <div className="flex border-b border-line bg-slatebg px-5 sm:px-6" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'build'}
              onClick={() => setActiveTab('build')}
              className={`border-b-2 px-4 py-3 font-mono text-xs transition ${
                activeTab === 'build'
                  ? 'border-gold font-semibold text-navy'
                  : 'border-transparent text-muted hover:text-navy'
              }`}
            >
              Build &amp; Proof
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'notes'}
              onClick={() => setActiveTab('notes')}
              className={`border-b-2 px-4 py-3 font-mono text-xs transition ${
                activeTab === 'notes'
                  ? 'border-gold font-semibold text-navy'
                  : 'border-transparent text-muted hover:text-navy'
              }`}
            >
              Field Notes
            </button>
          </div>

          <div className="p-5 sm:p-6">
            {activeTab === 'build' ? (
              <div className="space-y-5">
                <div>
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                    Summary
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-body">{entry.summary}</p>
                </div>

                <div>
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
                    Technical Architecture &amp; Proof
                  </h3>
                  <div className="mt-1.5 space-y-3 text-[14px] leading-relaxed text-body">
                    {entry.technicalBreakdown.split('\n\n').map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 border-t border-line pt-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                      Stack &amp; Tooling
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {entry.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-line bg-slatebg px-2.5 py-0.5 font-mono text-xs text-navy"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                      Skills Proven
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {entry.skillsProven.map((sk) => (
                        <span
                          key={sk}
                          className="rounded border border-gold/50 bg-gold-soft px-2.5 py-0.5 font-mono text-xs font-medium text-navy"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg border border-line bg-slatebg p-4">
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-gold-hover">
                    Beyond the Resume · Decision-Making Under Pressure
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">{entry.fieldNotes}</p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {entry.pillars.map((p) => (
                    <span
                      key={p}
                      className="rounded border border-line bg-white px-2.5 py-1 font-mono text-xs text-navy"
                    >
                      Pillar: {p}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
