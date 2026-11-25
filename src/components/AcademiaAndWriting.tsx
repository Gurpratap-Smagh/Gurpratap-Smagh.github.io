import { useEffect, useState } from 'react';
import {
  Award,
  BookOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  FileText,
  GraduationCap,
  X,
} from 'lucide-react';
import { CERTIFICATIONS, PROFILE } from '../data/profile';
import { FIELD_STORIES } from '../data/stories';
import { PhotoItem, WriteupItem } from '../data/types';
import { WRITEUPS } from '../data/writeups';

interface AcademiaAndWritingProps {
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
}

const ACADEMIA_HIGHLIGHTS = [
  {
    title: 'NGen Canada N3 Summit Ambassador',
    org: 'Youth Culture Inc. & Humber Polytechnic',
    date: 'Apr 2026',
    detail:
      'Conducted technical floor interviews across industrial AI, 3D CAD reverse engineering, wearable telemetry, micro-nuclear, quantum, and autonomous marine booths.',
    photo: {
      src: '/photos/n3summit/n3-interview-sycodal.jpg',
      alt: 'Gurpratap being interviewed at NGen N3 Summit',
      caption: 'Ambassador floor interview at NGen N3 Advanced Manufacturing Summit.',
      location: 'NGen N3 Summit',
      date: 'Apr 2026',
    },
  },
  {
    title: 'SupplyChek Whiteboard Threat Modeling',
    org: 'Brampton SecOps (Rogers Cybersecure Catalyst & TMU)',
    date: 'Sep 2026',
    detail:
      'Mapped dispatcher-to-driver trust boundaries before coding, then pruned 12 features down to one WebAuthn instruction-signing gate to win 3rd Place ($1,000).',
    photo: {
      src: '/photos/bramsec/whiteboard-threat-model.jpg',
      alt: 'Whiteboard threat modeling session for SupplyChek',
      caption: 'Day 1 whiteboard threat modeling at Rogers Cybersecure Catalyst.',
      location: 'Brampton SecOps',
      date: 'Sep 25, 2026',
    },
  },
];

const KINDS: ('All' | WriteupItem['kind'])[] = [
  'All',
  'Technical Breakdown',
  'CTF Writeup',
  'Article',
  'Field Note',
];

export function AcademiaAndWriting({ onOpenLightbox }: AcademiaAndWritingProps) {
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({
    [FIELD_STORIES[0].id]: true,
  });
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

  const toggleStory = (id: string) => {
    setExpandedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const visibleWriteups =
    kindFilter === 'All' ? WRITEUPS : WRITEUPS.filter((w) => w.kind === kindFilter);

  return (
    <div className="bg-paper py-12 sm:py-16">
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        {/* Academic Standing & Certifications */}
        <section>
          <div className="border-b border-rule pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-forest">
              Academic Standing, Institutional Advocacy &amp; Credentials
            </span>
            <h1 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {PROFILE.education.institution} · {PROFILE.education.degree}
            </h1>
            <p className="mt-2 text-sm text-muted">
              {PROFILE.education.faculty} · {PROFILE.education.timeline}
            </p>
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-5">
              <div className="rounded-xl border border-forest/35 bg-surface p-5">
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-forest">
                  <GraduationCap className="h-4 w-4" />
                  <span>{PROFILE.education.standing}</span>
                </div>
                <div className="mt-2 font-mono text-sm font-bold text-ink">
                  Cumulative GPA: {PROFILE.education.gpa}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {PROFILE.education.funding}
                </p>
                <div className="mt-3 border-t border-rule pt-2.5 font-mono text-xs font-medium text-rust">
                  {PROFILE.availability}
                </div>
              </div>

              {ACADEMIA_HIGHLIGHTS.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-xl border border-rule bg-surface"
                >
                  <button
                    type="button"
                    onClick={() => onOpenLightbox([item.photo], 0)}
                    className="group block aspect-[16/9] w-full overflow-hidden border-b border-rule bg-sand text-left"
                  >
                    <img
                      src={item.photo.src}
                      alt={item.photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                    />
                  </button>
                  <div className="p-4">
                    <div className="font-mono text-[10px] text-muted">
                      {item.org} · {item.date}
                    </div>
                    <h2 className="mt-1 font-display text-base font-bold text-ink">{item.title}</h2>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-3.5 sm:grid-cols-2">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex flex-col justify-between rounded-xl border border-rule bg-surface p-4"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Award className="mt-0.5 h-4 w-4 shrink-0 text-rust" />
                        <span className="font-mono text-[10px] text-muted">{cert.issued}</span>
                      </div>
                      <h3 className="mt-2 font-display text-sm font-bold text-ink">{cert.name}</h3>
                      <p className="mt-0.5 font-mono text-[11px] font-medium text-forest">
                        {cert.issuer}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-muted">{cert.note}</p>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-rule pt-2.5 font-mono text-[11px]">
                      <span className="text-muted">{cert.credentialId ?? 'Verified Credential'}</span>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-forest hover:underline"
                        >
                          Verify <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Field Stories */}
        <section className="border-t border-rule pt-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-rust">
              Beyond the One-Page Resume
            </span>
            <h2 className="mt-1.5 font-display text-2xl font-bold text-ink sm:text-3xl">
              Field Stories, Conflict Mediation &amp; What Actually Happened
            </h2>
            <p className="mt-2 text-sm text-muted">
              Pitching college sponsorship for France, de-escalating live CTF team friction during a GCP compromise, and carving corrupted SD cards by hand.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {FIELD_STORIES.map((story) => {
              const isOpen = !!expandedMap[story.id];
              return (
                <article key={story.id} className="rounded-xl border border-rule bg-surface p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-forest">
                      {story.tag}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {story.softSkills.map((sk) => (
                        <span
                          key={sk}
                          className="rounded border border-rule bg-paper px-2 py-0.5 font-mono text-[10px] text-ink"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-2 font-display text-xl font-bold text-ink">{story.title}</h3>
                  <p className="mt-0.5 text-xs font-medium text-rust">{story.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{story.context}</p>

                  {isOpen && (
                    <div className="mt-3 space-y-3 border-t border-rule pt-3">
                      <p className="text-sm leading-relaxed text-ink">{story.whatHappened}</p>
                      <div className="rounded-lg border border-forest/25 bg-forest-soft/60 p-3 text-xs leading-relaxed text-ink">
                        <span className="font-mono font-semibold text-forest">Takeaway: </span>
                        {story.takeaway}
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => toggleStory(story.id)}
                      className="inline-flex items-center gap-1 rounded-md border border-rule bg-paper px-3 py-1.5 font-mono text-xs font-medium text-forest hover:border-forest"
                    >
                      {isOpen ? (
                        <>
                          Collapse <ChevronUp className="h-3.5 w-3.5" />
                        </>
                      ) : (
                        <>
                          Read Full Story <ChevronDown className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>

                    {story.links.map((lnk) => (
                      <a
                        key={lnk.url}
                        href={lnk.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-forest"
                      >
                        {lnk.label}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Writeups & Articles */}
        <section className="border-t border-rule pt-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-forest">
                Public Documentation &amp; Writeups
              </span>
              <h2 className="mt-1.5 font-display text-2xl font-bold text-ink sm:text-3xl">
                Medium Articles, Technical Breakdowns &amp; Field Notes
              </h2>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {KINDS.map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setKindFilter(k)}
                  className={`rounded-md border px-3 py-1.5 font-mono text-xs transition ${
                    kindFilter === k
                      ? 'border-forest bg-forest text-surface'
                      : 'border-rule bg-surface text-muted hover:text-ink'
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {visibleWriteups.map((item) => {
              const isFeatured = Boolean(item.fullMarkdownSections);
              return (
                <article
                  key={item.id}
                  className={`flex flex-col justify-between rounded-xl border p-5 ${
                    isFeatured ? 'border-forest/45 bg-surface' : 'border-rule bg-surface'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 font-mono text-[11px]">
                      <span className="rounded border border-cobalt/30 bg-cobalt-soft px-2 py-0.5 font-semibold text-cobalt">
                        {item.kind} · {item.platform}
                      </span>
                      <span className="text-muted">{item.date}</span>
                    </div>

                    <h3 className="mt-2.5 font-display text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
                      {item.summary}
                    </p>

                    {item.excerpt && (
                      <blockquote className="mt-3 rounded border-l-2 border-rust bg-paper px-3 py-2 font-mono text-[11px] leading-relaxed text-ink">
                        {item.excerpt}
                      </blockquote>
                    )}

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-rule bg-sand/70 px-2 py-0.5 font-mono text-[10px] text-ink"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-rule pt-3">
                    {item.fullMarkdownSections && (
                      <button
                        type="button"
                        onClick={() => setActiveWriteup(item)}
                        className="inline-flex items-center gap-1.5 rounded bg-forest px-3 py-1.5 font-mono text-xs font-semibold text-surface hover:bg-forest-bright"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        Read Full Breakdown
                      </button>
                    )}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-forest hover:underline"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Open on {item.platform}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>

      {activeWriteup?.fullMarkdownSections && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveWriteup(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-rule bg-surface p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-rule pb-4">
              <div>
                <span className="font-mono text-xs text-forest">
                  {activeWriteup.kind} · {activeWriteup.date}
                </span>
                <h3 className="mt-1 font-display text-2xl font-bold text-ink">
                  {activeWriteup.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveWriteup(null)}
                className="rounded border border-rule bg-paper p-1.5 text-ink hover:border-rust hover:text-rust"
                aria-label="Close writeup reader"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 space-y-5">
              {activeWriteup.fullMarkdownSections.map((sec) => (
                <div key={sec.heading}>
                  <h4 className="font-display text-base font-bold text-rust">{sec.heading}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{sec.body}</p>
                  {sec.code && (
                    <pre className="mt-2.5 overflow-x-auto rounded-lg border border-rule bg-paper p-3 font-mono text-xs text-forest">
                      {sec.code}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
