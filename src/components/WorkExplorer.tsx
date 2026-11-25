import { useMemo, useState } from 'react';
import { ExternalLink, GitCommit, Github, Globe, Layers, X } from 'lucide-react';
import { PhotoItem, WorkTag } from '../data/types';
import { WORK_ITEMS, WORK_TAGS } from '../data/work';

interface WorkExplorerProps {
  initialTag?: WorkTag | null;
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
}

const TAG_BADGE_STYLES: Record<WorkTag, string> = {
  'Security & DFIR': 'border-rust/35 bg-rust-soft text-rust',
  'SW Dev': 'border-cobalt/35 bg-cobalt-soft text-cobalt',
  'AI / RAG': 'border-forest/35 bg-forest-soft text-forest',
  Web3: 'border-ochre/35 bg-ochre-soft text-ochre',
  Hackathons: 'border-rust/35 bg-rust-soft text-rust',
  CTFs: 'border-forest/35 bg-forest-soft text-forest',
  'Hardware & OT': 'border-cobalt/35 bg-cobalt-soft text-cobalt',
  Academia: 'border-ochre/35 bg-ochre-soft text-ochre',
};

export function WorkExplorer({ initialTag, onOpenLightbox }: WorkExplorerProps) {
  const [selectedTags, setSelectedTags] = useState<WorkTag[]>(initialTag ? [initialTag] : []);
  const [matchMode, setMatchMode] = useState<'ALL' | 'ANY'>('ALL');

  const toggleTag = (tag: WorkTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const filteredItems = useMemo(() => {
    if (selectedTags.length === 0) return WORK_ITEMS;
    return WORK_ITEMS.filter((item) =>
      matchMode === 'ALL'
        ? selectedTags.every((t) => item.tags.includes(t))
        : selectedTags.some((t) => item.tags.includes(t)),
    );
  }, [selectedTags, matchMode]);

  return (
    <section className="bg-paper py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-rule pb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-forest">
            Unified Work &amp; Projects Index
          </span>
          <h1 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Security, Software Engineering, AI, Web3, Hardware &amp; Competitions
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
            Projects often intersect across disciplines. Select one or combine multiple tags (for example,{' '}
            <code className="rounded bg-sand px-1.5 py-0.5 font-mono text-xs text-ink">SW Dev</code> +{' '}
            <code className="rounded bg-sand px-1.5 py-0.5 font-mono text-xs text-ink">Web3</code> or{' '}
            <code className="rounded bg-sand px-1.5 py-0.5 font-mono text-xs text-ink">SW Dev</code> +{' '}
            <code className="rounded bg-sand px-1.5 py-0.5 font-mono text-xs text-ink">AI / RAG</code>) to inspect exact architectures, commits, and live links.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Intersecting Work Tags">
              <button
                type="button"
                onClick={() => setSelectedTags([])}
                className={`rounded-md border px-3 py-1.5 font-mono text-xs font-medium transition ${
                  selectedTags.length === 0
                    ? 'border-forest bg-forest text-surface'
                    : 'border-rule bg-surface text-muted hover:text-ink'
                }`}
              >
                All ({WORK_ITEMS.length})
              </button>

              {WORK_TAGS.map((tag) => {
                const active = selectedTags.includes(tag);
                const count = WORK_ITEMS.filter((w) => w.tags.includes(tag)).length;
                return (
                  <button
                    key={tag}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleTag(tag)}
                    className={`rounded-md border px-3 py-1.5 font-mono text-xs font-medium transition ${
                      active
                        ? 'border-forest bg-forest text-surface'
                        : 'border-rule bg-surface text-ink hover:border-forest/60 hover:bg-sand/60'
                    }`}
                  >
                    {tag} <span className={active ? 'text-surface/80' : 'text-muted'}>({count})</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 font-mono text-[11px]">
              {selectedTags.length > 1 && (
                <div className="inline-flex overflow-hidden rounded-md border border-rule bg-surface">
                  <button
                    type="button"
                    onClick={() => setMatchMode('ALL')}
                    className={`px-2.5 py-1 ${matchMode === 'ALL' ? 'bg-rust font-semibold text-surface' : 'text-muted'}`}
                  >
                    Match ALL
                  </button>
                  <button
                    type="button"
                    onClick={() => setMatchMode('ANY')}
                    className={`px-2.5 py-1 ${matchMode === 'ANY' ? 'bg-rust font-semibold text-surface' : 'text-muted'}`}
                  >
                    Match ANY
                  </button>
                </div>
              )}

              {selectedTags.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSelectedTags([])}
                  className="inline-flex items-center gap-1 rounded-md border border-rule bg-surface px-2.5 py-1 text-muted hover:text-rust"
                >
                  <X className="h-3 w-3" />
                  Reset
                </button>
              )}
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 font-mono text-xs text-muted">
            <Layers className="h-3.5 w-3.5 text-forest" />
            <span>
              Showing <strong className="text-ink">{filteredItems.length}</strong> of {WORK_ITEMS.length} builds
              {selectedTags.length > 0 && ` matching ${matchMode}: ${selectedTags.join(' + ')}`}
            </span>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="mt-10 rounded-xl border border-rule bg-surface p-8 text-center">
            <p className="font-display text-base font-bold text-ink">
              No builds match that exact tag intersection ({selectedTags.join(' + ')}).
            </p>
            <p className="mt-1 text-xs text-muted">
              Try switching to &ldquo;Match ANY&rdquo; or clearing one tag.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-xl border border-rule bg-surface transition hover:border-forest/55"
              >
                <div className={`grid gap-6 p-6 ${item.photo ? 'lg:grid-cols-12' : ''}`}>
                  <div className={item.photo ? 'lg:col-span-8' : ''}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => toggleTag(t)}
                            className={`rounded border px-2 py-0.5 font-mono text-[10px] font-semibold ${TAG_BADGE_STYLES[t]}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      <span className="font-mono text-xs text-muted">
                        {item.venue} · {item.date}
                      </span>
                    </div>

                    <h2 className="mt-2.5 font-display text-xl font-bold text-ink sm:text-2xl">
                      {item.title}
                    </h2>
                    <p className="mt-0.5 font-mono text-xs text-forest">{item.subtitle}</p>

                    {item.outcome && (
                      <div className="mt-2.5 inline-block rounded border border-ochre/35 bg-ochre-soft px-2.5 py-1 font-mono text-xs font-semibold text-ochre">
                        {item.outcome}
                      </div>
                    )}

                    <p className="mt-3 text-sm leading-relaxed text-ink/90">{item.summary}</p>

                    <div className="mt-3 rounded-lg border border-rule bg-paper/75 p-3.5 text-xs leading-relaxed text-ink">
                      <span className="font-mono font-semibold uppercase tracking-wider text-forest">
                        Technical Architecture:{' '}
                      </span>
                      {item.technicalArchitecture}
                    </div>

                    {item.tradeOff && (
                      <div className="mt-2.5 rounded-lg border border-rust/25 bg-rust-soft/60 p-3 text-xs leading-relaxed text-ink">
                        <span className="font-mono font-semibold uppercase tracking-wider text-rust">
                          Trade-Off / Pivot:{' '}
                        </span>
                        {item.tradeOff}
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap items-center gap-1.5">
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

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-3">
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
                            className="inline-flex items-center gap-1 rounded border border-rule bg-paper px-2.5 py-1 font-mono text-[11px] font-medium text-ink hover:border-forest hover:text-forest"
                          >
                            <Github className="h-3 w-3" />
                            GitHub
                          </a>
                        )}
                        {item.liveUrl && (
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded bg-forest px-2.5 py-1 font-mono text-[11px] font-medium text-surface hover:bg-forest-bright"
                          >
                            <Globe className="h-3 w-3" />
                            Live App
                          </a>
                        )}
                        {item.writeupUrl && (
                          <a
                            href={item.writeupUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded border border-rule bg-paper px-2.5 py-1 font-mono text-[11px] font-medium text-cobalt hover:border-cobalt"
                          >
                            Writeup
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {item.postUrl && (
                          <a
                            href={item.postUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded border border-rule bg-paper px-2.5 py-1 font-mono text-[11px] text-muted hover:text-ink"
                          >
                            Post
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {item.photo && (
                    <div className="lg:col-span-4">
                      <button
                        type="button"
                        onClick={() => onOpenLightbox([item.photo!], 0)}
                        className="group block w-full overflow-hidden rounded-lg border border-rule bg-sand text-left transition hover:border-forest"
                      >
                        <img
                          src={item.photo.src}
                          alt={item.photo.alt}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                        />
                        <div className="border-t border-rule bg-paper px-3 py-2">
                          <span className="block font-mono text-[10px] font-semibold text-rust">
                            {item.photo.location} · {item.photo.date}
                          </span>
                          <span className="mt-0.5 block line-clamp-2 text-xs text-muted">
                            {item.photo.caption}
                          </span>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
