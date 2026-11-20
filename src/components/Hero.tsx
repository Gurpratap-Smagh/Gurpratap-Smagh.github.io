import { useState } from 'react';
import { ArrowRight, Award, ExternalLink, Globe2, Terminal, Expand } from 'lucide-react';
import { PROFILE } from '../data/profile';
import { PhotoItem } from '../data/types';

const HERO_FEATURED_FRAMES: PhotoItem[] = [
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
  {
    src: '/photos/france/esna-group-finale.jpg',
    alt: 'All 17 Midnight Flag CTF finalist teams inside the ESNA Bretagne amphitheatre',
    caption: '17 finalist teams out of 756+ qualifiers inside the ESNA Bretagne amphitheatre.',
    location: 'ESNA Bretagne, France',
    date: 'Jun 14, 2026',
  },
];

interface HeroProps {
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
}

export function Hero({ onOpenLightbox }: HeroProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = HERO_FEATURED_FRAMES[activeIdx];

  return (
    <section id="top" className="hero-grid relative border-b border-hairline">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-gold-humber/40 bg-gold-humber/10 px-3.5 py-1.5 font-mono text-xs text-gold-bright">
              <Globe2 className="h-3.5 w-3.5" />
              <span>Humber Polytechnic Representative · France CTF Finalist · Co-op Summer 2027</span>
            </div>

            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:leading-[1.08]">
              {PROFILE.fullName}
            </h1>

            <p className="mt-3 font-mono text-sm text-teal-bright">
              Security Engineering · Digital Forensics &amp; Incident Response · Hardware &amp; OT Telemetry
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {PROFILE.subheadline}
            </p>

            <blockquote className="mt-6 rounded-lg border-l-2 border-teal-forensic bg-panel/90 px-4 py-3 font-mono text-xs leading-relaxed text-slate-300">
              <span className="mb-1 block text-[11px] uppercase tracking-wider text-teal-bright">
                Engineering Benchmark (From Raw Logs to TTPs)
              </span>
              &ldquo;Our Raspberry Pi does zero analysis on its own. It serves a decoy route, stamps
              sensor.action, and ships raw JSON to the cloud. When a session jumps straight from 404 probes
              to execution primitives like primitive:id without tripping a known lure, the engine flags
              causal_escalation: true.&rdquo;
            </blockquote>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#skills-proof"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-forensic px-5 py-2.5 font-mono text-xs font-semibold text-obsidian transition hover:bg-teal-bright"
              >
                Inspect Skill -&gt; Proof Matrix
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#institutional"
                className="inline-flex items-center gap-2 rounded-lg border border-gold-humber/50 bg-panel px-4 py-2.5 font-mono text-xs font-medium text-gold-bright transition hover:border-gold-bright hover:bg-elevated"
              >
                <Award className="h-4 w-4" />
                Institutional &amp; France Proof
              </a>
              <a
                href={PROFILE.links.medium}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-panel px-4 py-2.5 font-mono text-xs text-slate-300 transition hover:border-teal-forensic hover:text-white"
              >
                <Terminal className="h-3.5 w-3.5 text-teal-bright" />
                Medium Writeups
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-hairline bg-panel shadow-2xl">
              <div className="flex items-center justify-between border-b border-hairline bg-elevated px-4 py-2.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-gold-bright">
                  Verified Field Evidence · {current.location}
                </span>
                <button
                  type="button"
                  onClick={() => onOpenLightbox(HERO_FEATURED_FRAMES, activeIdx)}
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-teal-bright hover:underline"
                >
                  <Expand className="h-3 w-3" />
                  Expand
                </button>
              </div>

              <button
                type="button"
                onClick={() => onOpenLightbox(HERO_FEATURED_FRAMES, activeIdx)}
                className="group relative block aspect-[4/3] w-full overflow-hidden bg-obsidian text-left"
              >
                  <img
                  src={current.src}
                  alt={current.alt}
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-teal-bright">
                    {current.date}
                  </span>
                  <p className="mt-0.5 text-xs leading-snug text-slate-100">{current.caption}</p>
                </div>
              </button>

              <div className="grid grid-cols-4 gap-1.5 border-t border-hairline bg-obsidian p-2">
                {HERO_FEATURED_FRAMES.map((frame, i) => (
                  <button
                    key={frame.src}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className={`overflow-hidden rounded border transition ${
                      i === activeIdx
                        ? 'border-teal-bright ring-1 ring-teal-bright'
                        : 'border-hairline opacity-65 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={frame.src}
                      alt={frame.alt}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROFILE.heroStats.map((stat) => {
            const borderColor =
              stat.accent === 'gold'
                ? 'border-gold-humber/40'
                : stat.accent === 'orange'
                  ? 'border-signal-orange/40'
                  : 'border-teal-forensic/40';
            const valueColor =
              stat.accent === 'gold'
                ? 'text-gold-bright'
                : stat.accent === 'orange'
                  ? 'text-signal-orange'
                  : 'text-teal-bright';
            return (
              <div
                key={stat.label}
                className={`rounded-xl border ${borderColor} bg-panel/90 p-4 backdrop-blur-sm`}
              >
                <div className={`font-display text-2xl font-bold ${valueColor}`}>{stat.value}</div>
                <div className="mt-1 font-mono text-xs font-semibold text-slate-200">{stat.label}</div>
                <div className="mt-1 text-xs leading-relaxed text-slate-400">{stat.detail}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
