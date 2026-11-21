import { useState } from 'react';
import { Activity, Cpu, ExternalLink, Layers, ShieldAlert } from 'lucide-react';
import { FLAGSHIP_DOSSIERS, TELEMETRY_INSPECTOR_DATA } from '../data/projects';
import { PhotoItem } from '../data/types';

interface ArchitectureDossierProps {
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
}

type TelemetryStage = 'raw' | 'rules' | 'profile';

export function ArchitectureDossier({ onOpenLightbox }: ArchitectureDossierProps) {
  const [selectedId, setSelectedId] = useState<string>(FLAGSHIP_DOSSIERS[0].id);
  const [telemetryTab, setTelemetryTab] = useState<TelemetryStage>('raw');

  const dossier = FLAGSHIP_DOSSIERS.find((d) => d.id === selectedId) ?? FLAGSHIP_DOSSIERS[0];

  return (
    <section id="architecture" className="border-b border-hairline bg-obsidian py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-signal-orange">
            04 // Systems &amp; Security Architecture
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How the Systems Actually Work (and What Broke Along the Way)
          </h2>
          <p className="mt-2 text-sm text-slate-300 sm:text-base">
            Architecture matters most when it explains why naive defaults fail. Inspect each flagship
            system&apos;s failure mode, engineering trade-off, and verified pipeline below.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5" role="tablist" aria-label="Flagship Systems">
          {FLAGSHIP_DOSSIERS.map((d) => {
            const active = d.id === dossier.id;
            return (
              <button
                key={d.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedId(d.id)}
                className={`rounded-lg border px-4 py-2.5 text-left transition ${
                  active
                    ? 'border-teal-bright bg-panel text-white shadow-md'
                    : 'border-hairline bg-panel/40 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                }`}
              >
                <span className="block font-mono text-[10px] uppercase tracking-wider text-teal-bright">
                  {d.tag}
                </span>
                <span className="mt-0.5 block font-display text-sm font-semibold">{d.title.split(':')[0]}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-2xl border border-hairline bg-panel p-6 lg:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-hairline pb-6">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-teal-bright">{dossier.venue} · {dossier.timeframe}</span>
              <h3 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">{dossier.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{dossier.subtitle}</p>
            </div>
            {dossier.links.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {dossier.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-teal-forensic px-3.5 py-2 font-mono text-xs font-semibold text-obsidian transition hover:bg-teal-bright"
                  >
                    {l.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {dossier.metrics.map((m) => (
              <div key={m.label} className="rounded-lg border border-hairline bg-obsidian/70 p-3.5">
                <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400">{m.label}</div>
                <div className="mt-1 font-display text-base font-bold text-gold-bright">{m.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            <div className="rounded-xl border border-hairline bg-obsidian/60 p-4">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-signal-orange">
                01. What Broke / The Problem
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">{dossier.problem}</p>
            </div>
            <div className="rounded-xl border border-hairline bg-obsidian/60 p-4">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-teal-bright">
                02. Architectural Decision
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">{dossier.decision}</p>
            </div>
            <div className="rounded-xl border border-hairline bg-obsidian/60 p-4">
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-gold-bright">
                03. Why It Matters
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">{dossier.whyItMatters}</p>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-300">
              <Layers className="h-4 w-4 text-teal-bright" />
              Execution Pipeline
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              {dossier.pipeline.map((stage) => (
                <div key={stage.step} className="rounded-xl border border-hairline bg-elevated/80 p-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-teal-bright">STAGE {stage.step}</span>
                    <Cpu className="h-3.5 w-3.5 text-slate-400" />
                  </div>
                  <div className="mt-1.5 font-display text-sm font-bold text-white">{stage.label}</div>
                  <div className="mt-0.5 font-mono text-[11px] text-gold-bright">{stage.component}</div>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{stage.rationale}</p>
                </div>
              ))}
            </div>
          </div>

          {dossier.id === 'honeypot-platform' && (
            <div className="mt-8 overflow-hidden rounded-xl border border-teal-forensic/40 bg-obsidian">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-hairline bg-elevated px-4 py-3">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-signal-orange" />
                  <span className="font-mono text-xs font-semibold text-white">
                    Live Schema Walkthrough: Raw Sensor Event -&gt; Correlation Rules -&gt; Emitted Profile
                  </span>
                </div>
                <div className="flex gap-1.5">
                  {(
                    [
                      ['raw', '1. Raw Event (honeypot-events)'],
                      ['rules', '2. Correlator Rules'],
                      ['profile', '3. Actor Profile (C-14ef4fe0a2)'],
                    ] as [TelemetryStage, string][]
                  ).map(([tabKey, label]) => (
                    <button
                      key={tabKey}
                      type="button"
                      onClick={() => setTelemetryTab(tabKey)}
                      className={`rounded px-2.5 py-1 font-mono text-[11px] transition ${
                        telemetryTab === tabKey
                          ? 'bg-teal-forensic font-semibold text-obsidian'
                          : 'bg-panel text-slate-300 hover:text-white'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4">
                {telemetryTab === 'raw' && (
                  <div>
                    <p className="mb-2 text-xs text-slate-400">
                      Captured directly by the stateless Raspberry Pi daemon and shipped via Fluent Bit. Note the
                      lure action <code className="text-teal-bright">lure:php_stream</code> and exact header arrival
                      order preserved for downstream fingerprinting.
                    </p>
                    <pre className="max-h-72 overflow-auto rounded-lg border border-hairline bg-[#06080C] p-3.5 font-mono text-xs leading-relaxed text-teal-bright">
                      {JSON.stringify(TELEMETRY_INSPECTOR_DATA.rawSensorEvent, null, 2)}
                    </pre>
                  </div>
                )}

                {telemetryTab === 'rules' && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {TELEMETRY_INSPECTOR_DATA.correlationRules.map((r) => (
                      <div key={r.rule} className="rounded-lg border border-hairline bg-panel p-3.5">
                        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-gold-bright">
                          <ShieldAlert className="h-3.5 w-3.5 text-signal-orange" />
                          {r.rule}
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{r.detail}</p>
                      </div>
                    ))}
                  </div>
                )}

                {telemetryTab === 'profile' && (
                  <div>
                    <p className="mb-2 text-xs text-slate-400">
                      Emitted into <code className="text-teal-bright">honeypot-profiles</code>: notice how distinct IPs
                      in <span className="text-gold-bright">Cameroon</span> and the{' '}
                      <span className="text-gold-bright">United States</span> merge into one actor cluster with{' '}
                      <code className="text-signal-orange">causal_escalation: true</code>.
                    </p>
                    <pre className="max-h-72 overflow-auto rounded-lg border border-hairline bg-[#06080C] p-3.5 font-mono text-xs leading-relaxed text-amber-300">
                      {JSON.stringify(TELEMETRY_INSPECTOR_DATA.emittedProfile, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}

          {dossier.photos.length > 0 && (
            <div className="mt-8 border-t border-hairline pt-6">
              <div className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-400">
                Verified Hardware &amp; Event Evidence
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {dossier.photos.map((photo, idx) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => onOpenLightbox(dossier.photos, idx)}
                    className="group flex items-center gap-3.5 rounded-xl border border-hairline bg-obsidian/70 p-2.5 text-left transition hover:border-teal-forensic"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-20 w-28 shrink-0 rounded-lg object-cover"
                    />
                    <div>
                      <span className="font-mono text-[10px] uppercase text-teal-bright">
                        {photo.location} · {photo.date}
                      </span>
                      <p className="mt-1 text-xs leading-snug text-slate-200 group-hover:text-white">
                        {photo.caption}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
