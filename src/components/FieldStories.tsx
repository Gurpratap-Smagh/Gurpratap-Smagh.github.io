import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, MessageSquareQuote } from 'lucide-react';
import { FIELD_STORIES } from '../data/stories';
import { PhotoItem } from '../data/types';

interface FieldStoriesProps {
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
}

export function FieldStories({ onOpenLightbox }: FieldStoriesProps) {
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({
    [FIELD_STORIES[0].id]: true,
  });

  const toggle = (id: string) => {
    setExpandedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="stories" className="border-b border-hairline bg-panel/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-gold-bright">
            04 // Beyond the One-Page Resume
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Field Stories, Conflict Mediation &amp; What Actually Happened
          </h2>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            Resumes squeeze out the real lessons: pitching college funding for international finals, calming
            live team disputes at 2 AM, owning hardware lockouts, and mentoring first-time builders.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {FIELD_STORIES.map((story) => {
            const isOpen = !!expandedMap[story.id];
            return (
              <article
                key={story.id}
                className="overflow-hidden rounded-2xl border border-hairline bg-panel transition hover:border-slate-700"
              >
                <div className="grid gap-6 p-6 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-teal-bright">
                      {story.tag}
                    </span>
                    <h3 className="mt-1.5 font-display text-xl font-bold text-white sm:text-2xl">
                      {story.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-gold-bright">{story.subtitle}</p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {story.softSkills.map((sk) => (
                        <span
                          key={sk}
                          className="rounded-md border border-hairline bg-elevated px-2.5 py-1 font-mono text-[11px] text-slate-200"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-300">{story.context}</p>

                    {isOpen && (
                      <div className="mt-4 space-y-3 border-t border-hairline pt-4">
                        <p className="text-sm leading-relaxed text-slate-200">{story.whatHappened}</p>
                        <div className="flex items-start gap-2.5 rounded-lg border border-teal-forensic/30 bg-obsidian/70 p-3.5">
                          <MessageSquareQuote className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
                          <p className="text-xs leading-relaxed text-slate-300">
                            <span className="font-mono font-semibold text-teal-bright">Takeaway: </span>
                            {story.takeaway}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => toggle(story.id)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-elevated px-3.5 py-1.5 font-mono text-xs text-teal-bright transition hover:border-teal-forensic"
                      >
                        {isOpen ? (
                          <>
                            Collapse Full Story
                            <ChevronUp className="h-3.5 w-3.5" />
                          </>
                        ) : (
                          <>
                            Read What Actually Happened
                            <ChevronDown className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>

                      {story.links.map((lnk) => (
                        <a
                          key={lnk.url}
                          href={lnk.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-mono text-xs text-slate-300 hover:text-teal-bright"
                        >
                          {lnk.label}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div
                      className={`grid gap-2.5 ${
                        story.photos.length === 1 ? 'grid-cols-1' : 'grid-cols-2'
                      }`}
                    >
                      {story.photos.map((photo, pIdx) => (
                        <button
                          key={photo.src}
                          type="button"
                          onClick={() => onOpenLightbox(story.photos, pIdx)}
                          className={`group relative overflow-hidden rounded-xl border border-hairline bg-obsidian text-left transition hover:border-teal-forensic ${
                            story.photos.length === 3 && pIdx === 0 ? 'col-span-2' : ''
                          }`}
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            loading="lazy"
                            className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:scale-105"
                          />
                          <div className="bg-obsidian/90 px-3 py-2">
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
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
