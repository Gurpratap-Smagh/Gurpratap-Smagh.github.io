import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  Expand,
  ExternalLink,
  Flag,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { PROFILE } from '../data/profile';
import { PhotoItem, WorkItem, WorkTag } from '../data/types';
import { WORK_ITEMS, WORK_TAGS } from '../data/work';
import { AppRoute } from './Navbar';
import { SkillProofMatrix } from './SkillProofMatrix';
import { WorkDetailModal } from './WorkDetailModal';

const HERO_FRAMES: PhotoItem[] = [
  {
    src: '/photos/france/hardware-bench-humber.jpg',
    alt: 'Gurpratap in Humber Polytechnic shirt at the Midnight Flag CTF Finals in France',
    caption: 'Representing Humber Polytechnic on-site at ESNA de Bretagne, France (Midnight Flag Finals).',
    location: 'Rennes / Bruz, France',
    date: 'Jun 13, 2026',
  },
  {
    src: '/photos/omnipulse/kibana-geoip-demo.jpg',
    alt: 'Presenting live Kibana threat-intel GeoIP map at OmniPulse Tech 2026',
    caption: 'Demonstrating the live L7 Honeypot Correlation Engine at Humber Polytechnic OmniPulse 2026.',
    location: 'Humber Barrett CTI',
    date: 'Nov 4, 2026',
  },
  {
    src: '/photos/bramsec/supplychek-stage-pitch.jpg',
    alt: 'Presenting SupplyChek on stage at Brampton SecOps Hackathon',
    caption: 'Defending SupplyChek\'s WebAuthn zero-trust freight architecture (3rd Place Overall).',
    location: 'Rogers Cybersecure Catalyst',
    date: 'Sep 2026',
  },
];

const JOURNEY_STEPS = [
  {
    period: 'Fall 2024 -> Apr 2025',
    title: 'Humber B.Eng. & Hardware Foundation',
    bullets: [
      'Entered Humber Information Systems Eng (87.9% GPA, Dean\'s List Semesters 1 to 4).',
      'Built & presented 10 kg SpiderbotX walker at Barrett CTI (Apr 2025).',
    ],
  },
  {
    period: 'Jul -> Dec 2025',
    title: 'First Wins, Booth Card & Shipped Code',
    bullets: [
      'Published @gurpratap/safe-pass (Aug), GiveHub Web3 (Aug), Agro-Mart (Nov), IllumiAuth FPGA (Dec).',
      '1st Place AchievaFlow (Oct 2025) & picked up CyberStart card at BramHacks booth (Nov 2025).',
    ],
  },
  {
    period: 'Jan -> Jun 2026',
    title: 'CyberStart 4th -> THEM?! -> France Finals',
    bullets: [
      '200+ day TryHackMe streak, 4th CyberStart CTF, Top 20/200 IBM Z SafeScan (May).',
      'Co-ran 1,500+ player THEM?!CTF 2026 (max 25 weight, GCP IR) & flew to France (9th Student / 14th Overall).',
    ],
  },
  {
    period: 'Aug -> Nov 2026',
    title: 'Podiums, GIAC GFACT & OmniPulse Showcase',
    bullets: [
      'Brampton SecOps 3rd Place ($1,000 SupplyChek) & Catalyst FanDrop Track Winners (Oct).',
      'Passed GIAC GFACT (Oct 27, #8458), showcased L7 Honeypot at OmniPulse & Ontario Cyber Summit (Nov).',
    ],
  },
];

const HOME_TAG_ORDER: ('All' | WorkTag)[] = ['Academia', 'All', ...WORK_TAGS.filter((t) => t !== 'Academia')];

interface HomeIndexProps {
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
  onNavigate: (route: AppRoute, tag?: WorkTag) => void;
}

export function HomeIndex({ onOpenLightbox, onNavigate }: HomeIndexProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedTag, setSelectedTag] = useState<'All' | WorkTag>('Academia');
  const [activeDossier, setActiveDossier] = useState<WorkItem | null>(null);

  const current = HERO_FRAMES[activeIdx];

  const visibleItems = useMemo(() => {
    if (selectedTag === 'All') return WORK_ITEMS;
    return WORK_ITEMS.filter((item) => item.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <>
      <section className="hero-grid border-b border-rule">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-forest/30 bg-surface px-3.5 py-1 font-mono text-[11px] font-medium text-forest">
                <span>Humber Polytechnic B.Eng. &apos;29 · 87.9% Dean&apos;s List · GIAC GFACT · Summer 2027 Co-op</span>
              </div>

              <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl lg:leading-[1.06]">
                {PROFILE.fullName}
              </h1>

              <p className="mt-3 font-mono text-xs font-medium text-rust sm:text-sm">
                Security Engineering · DFIR · Software Development · Hardware &amp; OT Systems
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                {PROFILE.subheadline}
              </p>

              <blockquote className="mt-5 rounded-lg border-l-2 border-forest bg-surface px-4 py-3 font-mono text-xs leading-relaxed text-ink shadow-sm">
                <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-forest">
                  Benchmark · From Raw Logs to TTPs
                </span>
                &ldquo;Our Raspberry Pi does zero analysis on its own. It serves a decoy route, stamps
                sensor.action, and ships raw JSON to the cloud. When a session jumps straight from 404 probes
                to execution primitives like primitive:id without hitting a known lure, the engine flags
                causal_escalation: true.&rdquo;
              </blockquote>

              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => onNavigate('work')}
                  className="inline-flex items-center gap-2 rounded-lg bg-forest px-4 py-2.5 font-mono text-xs font-semibold text-surface transition hover:bg-forest-bright"
                >
                  Multi-Tag Work Explorer ({WORK_ITEMS.length})
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('ctfs')}
                  className="inline-flex items-center gap-2 rounded-lg border border-rule bg-surface px-4 py-2.5 font-mono text-xs font-medium text-ink transition hover:border-rust hover:text-rust"
                >
                  <Flag className="h-3.5 w-3.5 text-rust" />
                  16 CTFs &amp; CyberStart
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('academia')}
                  className="inline-flex items-center gap-2 rounded-lg border border-rule bg-surface px-4 py-2.5 font-mono text-xs font-medium text-ink transition hover:border-forest hover:text-forest"
                >
                  <Award className="h-3.5 w-3.5 text-forest" />
                  Academia &amp; Writeups
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-xl border border-rule bg-surface shadow-sm">
                <div className="flex items-center justify-between border-b border-rule bg-sand/60 px-4 py-2">
                  <span className="font-mono text-[11px] font-medium text-ink">
                    {current.location} · {current.date}
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenLightbox(HERO_FRAMES, activeIdx)}
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-forest hover:underline"
                  >
                    <Expand className="h-3 w-3" />
                    Expand
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenLightbox(HERO_FRAMES, activeIdx)}
                  className="group relative block aspect-[4/3] w-full overflow-hidden bg-sand text-left"
                >
                  <img
                    src={current.src}
                    alt={current.alt}
                    className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-3.5">
                    <p className="text-xs leading-snug text-white">{current.caption}</p>
                  </div>
                </button>

                <div className="grid grid-cols-3 gap-1.5 border-t border-rule bg-paper p-2">
                  {HERO_FRAMES.map((frame, i) => (
                    <button
                      key={frame.src}
                      type="button"
                      onClick={() => setActiveIdx(i)}
                      className={`overflow-hidden rounded border transition ${
                        i === activeIdx
                          ? 'border-forest ring-1 ring-forest'
                          : 'border-rule opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={frame.src}
                        alt={frame.alt}
                        className="aspect-[16/10] w-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Clickable Chronological Journey Timeline */}
      <section className="border-b border-rule bg-surface py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-rust">
                Timeline · 2024 to 2026
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink">
                The Journey: Booth Card -&gt; GFACT -&gt; France -&gt; OmniPulse
              </h2>
            </div>
            <a
              href="https://www.credly.com/badges/33ff7ea8-5a30-4124-a3ab-2397609e99a3"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-rule bg-paper px-3 py-1.5 font-mono text-xs font-medium text-forest hover:border-forest"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Verify GFACT on Credly
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY_STEPS.map((step, i) => (
              <div
                key={step.period}
                className="rounded-xl border border-rule bg-paper/75 p-4"
              >
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="font-semibold text-rust">{step.period}</span>
                  <span className="text-muted">0{i + 1}</span>
                </div>
                <h3 className="mt-1.5 font-display text-sm font-bold text-ink">{step.title}</h3>
                <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-muted">
                  {step.bullets.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagged Index Right at Home (Default = Academia Wins First) */}
      <section className="border-b border-rule bg-paper py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-forest">
                Accomplishments &amp; Work Index · Wins Ranked First
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                Filter by Discipline (Click Any Card to Inspect Full Dossier)
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('work', selectedTag === 'All' ? undefined : selectedTag)}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-forest bg-surface px-3.5 py-2 font-mono text-xs font-semibold text-forest transition hover:bg-forest hover:text-surface"
            >
              <Layers className="h-3.5 w-3.5" />
              Open Multi-Tag Intersection -&gt;
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5" role="tablist" aria-label="Home Discipline Filter">
            {HOME_TAG_ORDER.map((tag) => {
              const active = selectedTag === tag;
              const count =
                tag === 'All'
                  ? WORK_ITEMS.length
                  : WORK_ITEMS.filter((w) => w.tags.includes(tag)).length;
              return (
                <button
                  key={tag}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedTag(tag)}
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

          <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-rule bg-surface transition hover:border-forest hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setActiveDossier(item)}
                  className="flex flex-1 flex-col text-left focus:outline-none"
                >
                  {item.photo && (
                    <div className="aspect-[16/9] w-full overflow-hidden border-b border-rule bg-sand">
                      <img
                        src={item.photo.src}
                        alt={item.photo.alt}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}

                  <div className="flex-1 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] text-muted">
                      <span>{item.venue}</span>
                      <span>{item.date}</span>
                    </div>

                    <h3 className="mt-1.5 font-display text-base font-bold text-ink group-hover:text-forest">
                      {item.title}
                    </h3>

                    {item.outcome && (
                      <div className="mt-1.5 inline-block rounded border border-ochre/35 bg-ochre-soft px-2 py-0.5 font-mono text-[10px] font-semibold text-ochre">
                        {item.outcome}
                      </div>
                    )}

                    <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted">
                      {item.summary}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-forest/20 bg-forest-soft px-1.5 py-0.5 font-mono text-[10px] font-medium text-forest"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>

                <div className="flex items-center justify-between gap-2 border-t border-rule bg-paper/55 px-5 py-2.5 font-mono text-[11px]">
                  <button
                    type="button"
                    onClick={() => setActiveDossier(item)}
                    className="font-semibold text-rust hover:underline"
                  >
                    Inspect Dossier -&gt;
                  </button>
                  <div className="flex items-center gap-2.5">
                    {item.repoUrl && (
                      <a
                        href={item.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-forest hover:underline"
                      >
                        Repo <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-cobalt hover:underline"
                      >
                        Live <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillProofMatrix onOpenLightbox={onOpenLightbox} onNavigate={onNavigate} />

      {activeDossier && (
        <WorkDetailModal
          item={activeDossier}
          onClose={() => setActiveDossier(null)}
          onOpenLightbox={onOpenLightbox}
        />
      )}
    </>
  );
}
