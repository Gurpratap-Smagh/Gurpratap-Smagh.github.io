import { useState } from 'react';
import { ExternalLink, Github, Globe, Images } from 'lucide-react';
import { BUILD_PROJECTS } from '../data/projects';
import { BuildCategory, PhotoItem } from '../data/types';

interface ProjectGridProps {
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
}

const CATEGORIES: ('All' | BuildCategory)[] = [
  'All',
  'Security & DFIR',
  'Hardware & Robotics',
  'Full-Stack & Web3',
];

export function ProjectGrid({ onOpenLightbox }: ProjectGridProps) {
  const [filter, setFilter] = useState<'All' | BuildCategory>('All');

  const items = filter === 'All' ? BUILD_PROJECTS : BUILD_PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="builds" className="border-b border-hairline bg-obsidian py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-bright">
              07 // Engineering Inventory
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Security Tooling, Hardware, Robotics &amp; Shipped Apps
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Every project below exists in verifiable codebases, live deployments, or campus demonstrations.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Build Categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`rounded-md border px-3 py-1.5 font-mono text-xs transition ${
                  filter === cat
                    ? 'border-teal-bright bg-teal-forensic/20 text-teal-bright'
                    : 'border-hairline bg-panel text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((proj) => (
            <article
              key={proj.id}
              className="flex flex-col justify-between rounded-xl border border-hairline bg-panel p-5 transition hover:border-slate-600"
            >
              <div>
                <div className="flex items-center justify-between gap-2 font-mono text-[11px]">
                  <span className="rounded bg-elevated px-2 py-0.5 text-teal-bright">{proj.category}</span>
                  <span className="text-slate-400">{proj.date}</span>
                </div>

                <h3 className="mt-3 font-display text-lg font-bold text-white">{proj.name}</h3>
                <p className="mt-0.5 font-mono text-[11px] text-gold-bright">{proj.venue}</p>

                <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">{proj.summary}</p>
                <p className="mt-2.5 rounded-lg border border-hairline bg-obsidian/60 p-2.5 text-xs leading-relaxed text-slate-400">
                  <span className="font-mono font-semibold text-slate-200">Build detail: </span>
                  {proj.architectureNote}
                </p>

                {proj.outcome && (
                  <p className="mt-2.5 font-mono text-[11px] text-emerald-300">Outcome: {proj.outcome}</p>
                )}
              </div>

              <div className="mt-4 border-t border-hairline pt-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-hairline bg-obsidian px-2 py-0.5 font-mono text-[10px] text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {proj.repoUrl && (
                    <a
                      href={proj.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded border border-hairline bg-elevated px-2.5 py-1 font-mono text-[11px] text-slate-200 hover:border-teal-forensic hover:text-teal-bright"
                    >
                      <Github className="h-3 w-3" />
                      Repo
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded bg-teal-forensic/20 px-2.5 py-1 font-mono text-[11px] text-teal-bright hover:bg-teal-forensic hover:text-obsidian"
                    >
                      <Globe className="h-3 w-3" />
                      Live App
                    </a>
                  )}
                  {proj.postUrl && (
                    <a
                      href={proj.postUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded border border-hairline bg-elevated px-2.5 py-1 font-mono text-[11px] text-slate-300 hover:border-teal-forensic hover:text-white"
                    >
                      Writeup / Post
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {proj.photos && proj.photos.length > 0 && (
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(proj.photos!, 0)}
                      className="inline-flex items-center gap-1 rounded border border-gold-humber/40 bg-elevated px-2.5 py-1 font-mono text-[11px] text-gold-bright hover:border-gold-bright"
                    >
                      <Images className="h-3 w-3" />
                      Photo
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
