import { Award, Calendar, ExternalLink, MapPin, Images } from 'lucide-react';
import { INSTITUTIONAL_MILESTONES } from '../data/institutional';
import { PhotoItem } from '../data/types';

interface InstitutionalShowcaseProps {
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
}

export function InstitutionalShowcase({ onOpenLightbox }: InstitutionalShowcaseProps) {
  return (
    <section id="institutional" className="border-b border-hairline bg-obsidian py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-gold-bright">
            01 // Institutional Representation &amp; Global Stage
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Representing Humber Polytechnic Beyond the Classroom
          </h2>
          <p className="mt-3 text-base text-slate-300">
            From ESNA de Bretagne in Rennes, France to Ontario-wide security hackathons and campus research
            showcases, every milestone below is backed by institutional sponsorship, verified event photos, and
            tangible outcomes.
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {INSTITUTIONAL_MILESTONES.map((item, idx) => {
            const isHeroLead = idx === 0;
            return (
              <article
                key={item.id}
                className={`overflow-hidden rounded-2xl border ${
                  isHeroLead ? 'border-gold-humber/45 bg-panel' : 'border-hairline bg-panel'
                }`}
              >
                <div className="grid gap-6 p-6 lg:grid-cols-12 lg:p-8">
                  <div className="flex flex-col justify-between lg:col-span-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold ${
                            isHeroLead
                              ? 'border border-gold-humber/50 bg-gold-humber/15 text-gold-bright'
                              : 'border border-teal-forensic/40 bg-teal-forensic/10 text-teal-bright'
                          }`}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-2xl font-bold text-white">{item.title}</h3>
                      <p className="mt-1 font-mono text-xs text-slate-400">{item.organization}</p>

                      <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-slate-400">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-teal-bright" />
                          {item.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-gold-humber" />
                          {item.location}
                        </span>
                      </div>

                      <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gold-humber/30 bg-elevated px-3 py-2 font-mono text-xs font-medium text-gold-bright">
                        <Award className="h-4 w-4 shrink-0" />
                        <span>{item.outcomeMetric}</span>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-slate-300">{item.summary}</p>
                      <p className="mt-3 rounded-lg border border-hairline bg-obsidian/70 p-3.5 text-xs leading-relaxed text-slate-300">
                        <span className="font-mono font-semibold text-teal-bright">Why it matters: </span>
                        {item.whyItMatters}
                      </p>
                    </div>

                    {item.externalLinks.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.externalLinks.map((lnk) => (
                          <a
                            key={lnk.url}
                            href={lnk.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md border border-hairline bg-elevated px-3 py-1.5 font-mono text-xs text-slate-200 transition hover:border-teal-forensic hover:text-teal-bright"
                          >
                            {lnk.label}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-6">
                    <div className="flex items-center justify-between pb-2 font-mono text-[11px] text-slate-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Images className="h-3.5 w-3.5 text-teal-bright" />
                        Verified Event Gallery ({item.photos.length} photos)
                      </span>
                      <span>Click any frame to inspect</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                      {item.photos.slice(0, 6).map((photo, pIdx) => (
                        <button
                          key={photo.src}
                          type="button"
                          onClick={() => onOpenLightbox(item.photos, pIdx)}
                          className={`group relative overflow-hidden rounded-lg border border-hairline bg-obsidian text-left transition hover:border-teal-forensic ${
                            pIdx === 0 && item.photos.length >= 4 ? 'col-span-2 row-span-2' : ''
                          }`}
                        >
                          <img
                            src={photo.src}
                            alt={photo.alt}
                            loading="lazy"
                            className="h-full w-full aspect-[4/3] object-cover object-top transition duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-2 opacity-90 transition group-hover:opacity-100">
                            <p className="line-clamp-2 text-[11px] leading-tight text-slate-100">
                              {photo.caption}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>

                    {item.photos.length > 6 && (
                      <button
                        type="button"
                        onClick={() => onOpenLightbox(item.photos, 6)}
                        className="mt-2.5 w-full rounded-lg border border-hairline bg-elevated py-2 font-mono text-xs text-teal-bright transition hover:border-teal-forensic"
                      >
                        View all {item.photos.length} photos in gallery -&gt;
                      </button>
                    )}
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
