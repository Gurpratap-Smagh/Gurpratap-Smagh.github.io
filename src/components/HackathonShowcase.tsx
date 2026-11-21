import { useState } from 'react';
import {
  Blocks,
  Calendar,
  ExternalLink,
  GitCommit,
  Github,
  Globe,
  Images,
  MapPin,
  Trophy,
  Users,
} from 'lucide-react';
import { HACKATHONS, WEB3_BUILDS } from '../data/hackathons';
import { HackathonTag, PhotoItem } from '../data/types';

interface HackathonShowcaseProps {
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
}

const FILTER_OPTIONS: ('All' | HackathonTag)[] = [
  'All',
  'Wins & Podiums',
  'In-Person & Whiteboard',
  'Virtual & Global Teams',
  'Blockchain & Web3',
];

export function HackathonShowcase({ onOpenLightbox }: HackathonShowcaseProps) {
  const [filter, setFilter] = useState<'All' | HackathonTag>('All');

  const visibleHackathons =
    filter === 'All' ? HACKATHONS : HACKATHONS.filter((h) => h.tags.includes(filter));

  return (
    <section id="hackathons" className="border-b border-hairline bg-panel/35 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-bright">
              02 // Hackathons, Scope Cuts &amp; Soft Skills
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Whiteboards, 3-Hour Pivots, Remote Timezones &amp; Shipping Under Pressure
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Every hackathon here combines the human story (cutting 12 features down to 1, mentoring
              first-time teammates, syncing across continents, or pitching founders directly) with
              verified GitHub commit windows and timestamp-matched photos.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Hackathon Filters">
            {FILTER_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                role="tab"
                aria-selected={filter === opt}
                onClick={() => setFilter(opt)}
                className={`rounded-md border px-3 py-1.5 font-mono text-xs transition ${
                  filter === opt
                    ? 'border-teal-bright bg-teal-forensic/20 text-teal-bright'
                    : 'border-hairline bg-panel text-slate-300 hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-7">
          {visibleHackathons.map((hack) => {
            const hasPhotos = hack.photos.length > 0;
            return (
              <article
                key={hack.id}
                className="overflow-hidden rounded-2xl border border-hairline bg-panel transition hover:border-slate-700"
              >
                <div className="grid gap-6 p-6 lg:grid-cols-12 lg:p-7">
                  <div className="flex flex-col justify-between lg:col-span-7">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md border border-gold-humber/45 bg-gold-humber/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-gold-bright">
                          {hack.badge}
                        </span>
                        <span className="rounded-md border border-hairline bg-elevated px-2.5 py-1 font-mono text-[11px] text-teal-bright">
                          {hack.mode}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-2xl font-bold text-white">{hack.title}</h3>

                      <div className="mt-2 flex flex-wrap gap-4 font-mono text-xs text-slate-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-teal-bright" />
                          {hack.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-gold-humber" />
                          {hack.location}
                        </span>
                      </div>

                      <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-gold-humber/30 bg-elevated px-3 py-1.5 font-mono text-xs text-gold-bright">
                        <Trophy className="h-3.5 w-3.5 shrink-0" />
                        <span>{hack.outcome}</span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {hack.softSkills.map((sk) => (
                          <span
                            key={sk}
                            className="rounded-md border border-teal-forensic/35 bg-teal-forensic/10 px-2.5 py-0.5 font-mono text-[11px] text-teal-bright"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>

                      <div className="mt-3 flex items-start gap-2 text-xs text-slate-400">
                        <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                        <span>{hack.teamAndMentors}</span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-slate-200">{hack.story}</p>

                      <p className="mt-3 rounded-lg border border-hairline bg-obsidian/70 p-3 text-xs leading-relaxed text-slate-300">
                        <span className="font-mono font-semibold text-gold-bright">Hard Trade-off: </span>
                        {hack.hardDecision}
                      </p>
                    </div>

                    {hasPhotos && (
                      <div className="mt-5 rounded-xl border border-hairline bg-obsidian/80 p-3.5">
                        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
                          <span className="inline-flex items-center gap-1.5 font-semibold text-teal-bright">
                            <GitCommit className="h-3.5 w-3.5" />
                            {hack.gitProof.repo}
                          </span>
                          <span className="text-slate-400">{hack.gitProof.window}</span>
                        </div>
                        <ul className="mt-2 space-y-1 font-mono text-[11px] text-slate-300">
                          {hack.gitProof.highlights.map((line) => (
                            <li key={line}>· {line}</li>
                          ))}
                        </ul>

                        {(hack.gitProof.url || hack.gitProof.liveUrl || hack.gitProof.postUrl) && (
                          <div className="mt-3 flex flex-wrap gap-2 border-t border-hairline pt-2.5">
                            {hack.gitProof.url && (
                              <a
                                href={hack.gitProof.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 rounded border border-hairline bg-elevated px-2.5 py-1 font-mono text-[11px] text-slate-200 hover:border-teal-forensic hover:text-teal-bright"
                              >
                                <Github className="h-3 w-3" />
                                GitHub Repo
                              </a>
                            )}
                            {hack.gitProof.liveUrl && (
                              <a
                                href={hack.gitProof.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 rounded bg-teal-forensic/20 px-2.5 py-1 font-mono text-[11px] font-medium text-teal-bright hover:bg-teal-forensic hover:text-obsidian"
                              >
                                <Globe className="h-3 w-3" />
                                Live App
                              </a>
                            )}
                            {hack.gitProof.postUrl && (
                              <a
                                href={hack.gitProof.postUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 rounded border border-hairline bg-elevated px-2.5 py-1 font-mono text-[11px] text-slate-300 hover:border-teal-forensic hover:text-white"
                              >
                                LinkedIn Story
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {hasPhotos ? (
                    <div className="lg:col-span-5">
                      <div className="flex items-center justify-between pb-2 font-mono text-[11px] text-slate-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Images className="h-3.5 w-3.5 text-teal-bright" />
                          Verified Event Gallery ({hack.photos.length}{' '}
                          {hack.photos.length === 1 ? 'photo' : 'photos'})
                        </span>
                        <span>Click to inspect</span>
                      </div>

                      <div
                        className={`grid gap-2.5 ${
                          hack.photos.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
                        }`}
                      >
                        {hack.photos.map((photo, idx) => (
                          <button
                            key={photo.src}
                            type="button"
                            onClick={() => onOpenLightbox(hack.photos, idx)}
                            className={`group relative overflow-hidden rounded-xl border border-hairline bg-obsidian text-left transition hover:border-teal-forensic ${
                              idx === 0 && hack.photos.length >= 3 ? 'col-span-2' : ''
                            }`}
                          >
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              loading="lazy"
                              className={`w-full object-cover object-top transition duration-300 group-hover:scale-[1.03] ${
                                idx === 0 && hack.photos.length >= 3 ? 'aspect-[16/10]' : 'aspect-[4/3]'
                              }`}
                            />
                            <div className="bg-obsidian/95 px-3 py-2">
                              <span className="block font-mono text-[10px] text-gold-bright">
                                {photo.location} · {photo.date}
                              </span>
                              <span className="mt-0.5 block line-clamp-2 text-xs text-slate-300">
                                {photo.caption}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center lg:col-span-5">
                      <div className="rounded-xl border border-hairline bg-obsidian/80 p-5">
                        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                          <span className="inline-flex items-center gap-1.5 font-semibold text-teal-bright">
                            <GitCommit className="h-4 w-4" />
                            {hack.gitProof.repo}
                          </span>
                          <span className="text-[11px] text-slate-400">{hack.gitProof.window}</span>
                        </div>
                        <ul className="mt-3 space-y-2 font-mono text-xs text-slate-300">
                          {hack.gitProof.highlights.map((line) => (
                            <li key={line}>· {line}</li>
                          ))}
                        </ul>

                        {(hack.gitProof.url || hack.gitProof.liveUrl || hack.gitProof.postUrl) && (
                          <div className="mt-4 flex flex-wrap gap-2 border-t border-hairline pt-3">
                            {hack.gitProof.url && (
                              <a
                                href={hack.gitProof.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 rounded border border-hairline bg-elevated px-3 py-1.5 font-mono text-xs text-slate-200 hover:border-teal-forensic hover:text-teal-bright"
                              >
                                <Github className="h-3.5 w-3.5" />
                                GitHub Repo
                              </a>
                            )}
                            {hack.gitProof.liveUrl && (
                              <a
                                href={hack.gitProof.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 rounded bg-teal-forensic/20 px-3 py-1.5 font-mono text-xs font-medium text-teal-bright hover:bg-teal-forensic hover:text-obsidian"
                              >
                                <Globe className="h-3.5 w-3.5" />
                                Live App
                              </a>
                            )}
                            {hack.gitProof.postUrl && (
                              <a
                                href={hack.gitProof.postUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 rounded border border-hairline bg-elevated px-3 py-1.5 font-mono text-xs text-slate-300 hover:border-teal-forensic hover:text-white"
                              >
                                LinkedIn Story
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-teal-forensic/35 bg-obsidian p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-4">
            <div className="flex items-center gap-2.5">
              <Blocks className="h-5 w-5 text-teal-bright" />
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  Blockchain &amp; Web3 Engineering Suite
                </h3>
                <p className="text-xs text-slate-400">
                  Smart contracts, deterministic wallets, and Web3 threat intelligence built and audited across EVM, Solana, and Hedera.
                </p>
              </div>
            </div>
            <span className="font-mono text-xs text-teal-bright">
              5 verified Web3 builds &amp; audits
            </span>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {WEB3_BUILDS.map((wb) => (
              <div
                key={wb.id}
                className="flex flex-col justify-between rounded-xl border border-hairline bg-panel p-4"
              >
                <div>
                  {wb.photo && (
                    <button
                      type="button"
                      onClick={() => onOpenLightbox([wb.photo!], 0)}
                      className="group mb-3 block w-full overflow-hidden rounded-lg border border-hairline bg-obsidian"
                    >
                      <img
                        src={wb.photo.src}
                        alt={wb.photo.alt}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </button>
                  )}
                  <span className="inline-block rounded bg-elevated px-2 py-0.5 font-mono text-[10px] text-teal-bright">
                    {wb.chain}
                  </span>
                  <h4 className="mt-2 font-display text-sm font-bold text-white">{wb.name}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">{wb.summary}</p>
                  <p className="mt-2 font-mono text-[10px] leading-relaxed text-gold-bright">
                    {wb.securityOrContractNote}
                  </p>
                </div>

                <div className="mt-3 border-t border-hairline pt-2.5">
                  <div className="font-mono text-[10px] text-slate-400">{wb.commitWindow}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {wb.repoUrl && (
                      <a
                        href={wb.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded border border-hairline bg-elevated px-2 py-1 font-mono text-[10px] text-slate-200 hover:border-teal-forensic"
                      >
                        <Github className="h-3 w-3" />
                        Repo
                      </a>
                    )}
                    {wb.liveUrl && (
                      <a
                        href={wb.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded bg-teal-forensic/20 px-2 py-1 font-mono text-[10px] text-teal-bright hover:bg-teal-forensic hover:text-obsidian"
                      >
                        <Globe className="h-3 w-3" />
                        Live
                      </a>
                    )}
                    {wb.writeupUrl && (
                      <a
                        href={wb.writeupUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 rounded border border-hairline bg-elevated px-2 py-1 font-mono text-[10px] text-teal-bright hover:border-teal-forensic"
                      >
                        Read
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
