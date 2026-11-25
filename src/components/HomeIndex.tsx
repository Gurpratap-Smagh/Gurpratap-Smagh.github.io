import { useState } from 'react';
import {
  ArrowRight,
  Award,
  Expand,
  ExternalLink,
  Flag,
  GraduationCap,
  Layers,
  Terminal,
  Trophy,
} from 'lucide-react';
import { PROFILE } from '../data/profile';
import { PhotoItem, WorkTag } from '../data/types';
import { WORK_ITEMS, WORK_TAGS } from '../data/work';
import { AppRoute } from './Navbar';
import { SkillProofMatrix } from './SkillProofMatrix';

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

const HEADLINE_ACCOMPLISHMENTS = [
  {
    eyebrow: 'FRANCE · INTERNATIONAL FINALS',
    title: 'Midnight Flag CTF Finals',
    metric: '8th / 756+ Quals -> 9th Student / 14th Overall',
    detail:
      'Sole Canadian student competing AI-free at ESNA Bretagne in Rennes, France. Humber FAST + EEF scholarship sponsored.',
    route: 'ctfs' as AppRoute,
    accent: 'text-rust border-rust/30 bg-rust-soft',
    icon: Flag,
  },
  {
    eyebrow: 'FOUNDED / CO-LED CTF OPS',
    title: 'THEM?!CTF 2026 & Humber CTFs',
    metric: '1,500+ Players · Max 25.00 Weight · GCP IR',
    detail:
      'Co-ran live CTFd/VPN ops, triaged a pre-launch GCP compromise, ran Humber Chronicle UDM CTF, and hit #46 global @ THEM?!.',
    route: 'ctfs' as AppRoute,
    accent: 'text-forest border-forest/30 bg-forest-soft',
    icon: Terminal,
  },
  {
    eyebrow: 'HACKATHON PODIUMS',
    title: 'Track Win · 1st · 3rd · Top 20',
    metric: 'FanDrop · AchievaFlow · SupplyChek ($1,000) · SafeScan',
    detail:
      'Track Winners at Catalyst by Speer, 1st Place at Humber Longo Centre, 3rd at Brampton SecOps, Top 20/200 at IBM Z.',
    route: 'work' as AppRoute,
    accent: 'text-ochre border-ochre/30 bg-ochre-soft',
    icon: Trophy,
  },
  {
    eyebrow: 'ACADEMIA & CREDENTIALS',
    title: 'Humber B.Eng. · GFACT · CC',
    metric: '87.9% GPA · Dean\'s List Semesters 1 to 4',
    detail:
      'GIAC GFACT (#8458 via CyberStart 4th Top Performer), ISC2 CC, EEF Scholarship, NGen N3 Ambassador, OmniPulse Showcase.',
    route: 'academia' as AppRoute,
    accent: 'text-cobalt border-cobalt/30 bg-cobalt-soft',
    icon: GraduationCap,
  },
];

interface HomeIndexProps {
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
  onNavigate: (route: AppRoute, tag?: WorkTag) => void;
}

export function HomeIndex({ onOpenLightbox, onNavigate }: HomeIndexProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = HERO_FRAMES[activeIdx];
  const featuredWork = WORK_ITEMS.filter((w) => w.featured);

  return (
    <>
      <section className="hero-grid border-b border-rule">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-forest/30 bg-surface px-3.5 py-1 font-mono text-[11px] font-medium text-forest">
                <span>Humber Polytechnic B.Eng. &apos;29 · 87.9% Dean&apos;s List · Summer 2027 Co-op</span>
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
                  Browse All Work ({WORK_ITEMS.length} Tagged Builds)
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

      {/* Headline Accomplishments Drop */}
      <section className="border-b border-rule bg-surface py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-rust">
                Headline Track Record
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink">
                France, CTF Ops, Hackathon Podiums &amp; Academia
              </h2>
            </div>
            <span className="font-mono text-xs text-muted">
              Click any card to open the full dossier
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HEADLINE_ACCOMPLISHMENTS.map((card) => {
              const Icon = card.icon;
              return (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => onNavigate(card.route)}
                  className="group flex flex-col justify-between rounded-xl border border-rule bg-paper/65 p-5 text-left transition hover:border-forest hover:bg-surface"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className={`rounded border px-2 py-0.5 font-mono text-[10px] font-semibold ${card.accent}`}>
                        {card.eyebrow}
                      </span>
                      <Icon className="h-4 w-4 text-muted transition group-hover:text-forest" />
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold text-ink">{card.title}</h3>
                    <div className="mt-1 font-mono text-[11px] font-semibold text-forest">
                      {card.metric}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{card.detail}</p>
                  </div>

                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] font-medium text-rust group-hover:underline">
                    Open section
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Work Index -> Jumps to Tagged Explorer */}
      <section className="border-b border-rule bg-paper py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-forest">
                Selected Work Index · Intersecting Tags
              </span>
              <h2 className="mt-1 font-display text-2xl font-bold text-ink sm:text-3xl">
                Flagship Builds Across Disciplines
              </h2>
              <p className="mt-1.5 text-sm text-muted">
                Every project lives once in the tagged index. Click any discipline tag below to jump straight into filtered builds.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('work')}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-forest bg-surface px-4 py-2 font-mono text-xs font-semibold text-forest transition hover:bg-forest hover:text-surface"
            >
              <Layers className="h-3.5 w-3.5" />
              All {WORK_ITEMS.length} Projects -&gt;
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {WORK_TAGS.map((tag) => {
              const count = WORK_ITEMS.filter((w) => w.tags.includes(tag)).length;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => onNavigate('work', tag)}
                  className="rounded-md border border-rule bg-surface px-3 py-1 font-mono text-xs text-ink transition hover:border-forest hover:bg-forest-soft hover:text-forest"
                >
                  {tag} <span className="text-muted">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {featuredWork.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between overflow-hidden rounded-xl border border-rule bg-surface transition hover:border-forest/60"
              >
                {item.photo && (
                  <button
                    type="button"
                    onClick={() => onOpenLightbox([item.photo!], 0)}
                    className="group relative block aspect-[16/9] w-full overflow-hidden border-b border-rule bg-sand text-left"
                  >
                    <img
                      src={item.photo.src}
                      alt={item.photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                    />
                  </button>
                )}

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-muted">
                      <span>{item.venue}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-ink">{item.title}</h3>
                    {item.outcome && (
                      <div className="mt-1.5 font-mono text-xs font-semibold text-rust">
                        {item.outcome}
                      </div>
                    )}
                    <p className="mt-2.5 text-xs leading-relaxed text-muted sm:text-sm">
                      {item.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => onNavigate('work', t)}
                          className="rounded border border-forest/25 bg-forest-soft px-2 py-0.5 font-mono text-[10px] font-medium text-forest hover:bg-forest hover:text-surface"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-rule pt-3 font-mono text-[11px]">
                    <span className="text-muted">{item.stack.slice(0, 4).join(' · ')}</span>
                    <div className="flex items-center gap-3">
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
                      <button
                        type="button"
                        onClick={() => onNavigate('work', item.tags[0])}
                        className="text-rust hover:underline"
                      >
                        Full Specs -&gt;
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SkillProofMatrix onOpenLightbox={onOpenLightbox} onNavigate={onNavigate} />
    </>
  );
}
