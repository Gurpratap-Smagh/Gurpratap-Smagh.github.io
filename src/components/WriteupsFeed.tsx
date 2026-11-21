import { useEffect, useState } from 'react';
import { BookOpen, ExternalLink, FileText, X } from 'lucide-react';
import { WRITEUPS } from '../data/writeups';
import { WriteupItem } from '../data/types';

const KINDS: ('All' | WriteupItem['kind'])[] = [
  'All',
  'Technical Breakdown',
  'CTF Writeup',
  'Article',
  'Field Note',
];

export function WriteupsFeed() {
  const [kindFilter, setKindFilter] = useState<'All' | WriteupItem['kind']>('All');
  const [activeWriteup, setActiveWriteup] = useState<WriteupItem | null>(null);

  useEffect(() => {
    if (!activeWriteup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveWriteup(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeWriteup]);

  const items = kindFilter === 'All' ? WRITEUPS : WRITEUPS.filter((w) => w.kind === kindFilter);

  return (
    <section id="writeups" className="border-b border-hairline bg-panel/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-bright">
              07 // Public Documentation &amp; Writeups
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Medium Articles, Technical Breakdowns &amp; Field Notes
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Documenting attacks, detections, and failed prototypes in plain engineering English.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {KINDS.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setKindFilter(k)}
                className={`rounded-md border px-3 py-1.5 font-mono text-xs transition ${
                  kindFilter === k
                    ? 'border-teal-bright bg-teal-forensic/20 text-teal-bright'
                    : 'border-hairline bg-panel text-slate-300 hover:text-white'
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {items.map((item) => {
            const isFeatured = Boolean(item.fullMarkdownSections);
            return (
              <article
                key={item.id}
                className={`flex flex-col justify-between rounded-xl border p-5 transition ${
                  isFeatured
                    ? 'border-teal-forensic/50 bg-panel shadow-lg'
                    : 'border-hairline bg-panel hover:border-slate-600'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
                    <span className="rounded bg-elevated px-2 py-0.5 text-teal-bright">
                      {item.kind} · {item.platform}
                    </span>
                    <span className="text-slate-400">{item.date}</span>
                  </div>

                  <h3 className="mt-3 font-display text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">{item.summary}</p>

                  {item.excerpt && (
                    <blockquote className="mt-3 rounded-lg border-l-2 border-gold-humber bg-obsidian/70 px-3.5 py-2.5 font-mono text-xs leading-relaxed text-slate-300">
                      {item.excerpt}
                    </blockquote>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-hairline bg-obsidian px-2 py-0.5 font-mono text-[10px] text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    {item.fullMarkdownSections && (
                      <button
                        type="button"
                        onClick={() => setActiveWriteup(item)}
                        className="inline-flex items-center gap-1.5 rounded-md bg-teal-forensic px-3 py-1.5 font-mono text-xs font-semibold text-obsidian transition hover:bg-teal-bright"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        Read Breakdown
                      </button>
                    )}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border border-hairline bg-elevated px-3 py-1.5 font-mono text-xs text-slate-200 transition hover:border-teal-forensic hover:text-teal-bright"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Open on {item.platform === 'Site Dossier' ? 'Medium' : item.platform}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {activeWriteup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activeWriteup.title}
          onClick={() => setActiveWriteup(null)}
        >
          <div
            className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-hairline bg-panel p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-hairline pb-4">
              <div>
                <span className="font-mono text-xs text-teal-bright">
                  {activeWriteup.kind} · {activeWriteup.date}
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold text-white">{activeWriteup.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveWriteup(null)}
                className="rounded-md border border-hairline bg-elevated p-2 text-slate-300 hover:text-white"
                aria-label="Close writeup reader"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 space-y-5">
              {activeWriteup.fullMarkdownSections?.map((sec) => (
                <div key={sec.heading}>
                  <h4 className="font-display text-base font-bold text-gold-bright">{sec.heading}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-200">{sec.body}</p>
                  {sec.code && (
                    <pre className="mt-2.5 overflow-x-auto rounded-lg border border-hairline bg-obsidian p-3 font-mono text-xs text-teal-bright">
                      {sec.code}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
