import { useMemo, useState } from 'react';
import { Award, Calendar, ExternalLink, Flag, ShieldCheck, Terminal, Users } from 'lucide-react';
import { CYBERSTART_ARC, CTF_CHALLENGE_SUMMARY, DOCUMENTED_CTFS } from '../data/ctfs';
import { CtfChallengeType } from '../data/types';

const FORMAT_STYLES = {
  'On-Site Finals': 'border-rust/35 bg-rust-soft text-rust',
  'Organizer / Author': 'border-ochre/35 bg-ochre-soft text-ochre',
  'In-Person': 'border-forest/35 bg-forest-soft text-forest',
  Online: 'border-rule bg-sand text-ink',
};

const TOP_FEATURED_COUNT = 6;

export function CtfTrackRecord() {
  const [selectedType, setSelectedType] = useState<'All' | CtfChallengeType>('All');

  const typeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const item of CTF_CHALLENGE_SUMMARY) {
      counts[item.type] = DOCUMENTED_CTFS.filter((c) => c.challengeTypes.includes(item.type)).length;
    }
    return counts;
  }, []);

  const visibleCtfs = useMemo(
    () =>
      selectedType === 'All'
        ? DOCUMENTED_CTFS
        : DOCUMENTED_CTFS.filter((c) => c.challengeTypes.includes(selectedType)),
    [selectedType],
  );

  const activeCategorySummary = useMemo(
    () => CTF_CHALLENGE_SUMMARY.find((c) => c.type === selectedType),
    [selectedType],
  );

  const cardCtfs = selectedType === 'All' ? visibleCtfs.slice(0, TOP_FEATURED_COUNT) : visibleCtfs;
  const tableCtfs = selectedType === 'All' ? visibleCtfs.slice(TOP_FEATURED_COUNT) : [];

  return (
    <section id="ctfs" className="bg-paper py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-rule pb-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-rust">
              Competitive CTFs, Challenge Types &amp; CyberStart Top Performer
            </span>
            <h1 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              From a CyberStart Booth Card to 16 Documented Competitions
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Competitions spanning hardware fault injection, Win98/DOOM forensics, OSINT, cryptography,
              Chronicle UDM threat hunting, and live CTFd infrastructure operations.
            </p>
          </div>
          <div className="font-mono text-xs text-muted">
            {DOCUMENTED_CTFS.length} documented CTFs · {CTF_CHALLENGE_SUMMARY.length} disciplines
          </div>
        </div>

        {/* Rogers CyberStart Canada Top Performer Spotlight */}
        <article className="mt-8 rounded-xl border border-ochre/40 bg-surface p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded border border-ochre/40 bg-ochre-soft px-2.5 py-1 font-mono text-[11px] font-semibold text-ochre">
                {CYBERSTART_ARC.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded border border-rule bg-paper px-2.5 py-1 font-mono text-[11px] text-forest">
                <Calendar className="h-3 w-3" />
                {CYBERSTART_ARC.period}
              </span>
            </div>

            <a
              href={CYBERSTART_ARC.verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-forest bg-forest px-3 py-1.5 font-mono text-xs font-medium text-surface transition hover:bg-forest-bright"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Verify GFACT on Credly
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <h2 className="mt-4 font-display text-2xl font-bold text-ink">
            {CYBERSTART_ARC.headline}
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-muted">
            {CYBERSTART_ARC.summary}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CYBERSTART_ARC.milestones.map((m) => (
              <div key={m.label} className="rounded-lg border border-rule bg-paper/80 p-3.5">
                <div className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {m.label}
                </div>
                <div className="mt-1 font-mono text-xs font-semibold text-forest">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Challenge Type Filters */}
        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="CTF Challenge Types">
            <button
              type="button"
              role="tab"
              aria-selected={selectedType === 'All'}
              onClick={() => setSelectedType('All')}
              className={`rounded-md border px-3 py-1.5 font-mono text-xs font-medium transition ${
                selectedType === 'All'
                  ? 'border-forest bg-forest text-surface'
                  : 'border-rule bg-surface text-muted hover:text-ink'
              }`}
            >
              All ({DOCUMENTED_CTFS.length})
            </button>
            {CTF_CHALLENGE_SUMMARY.map((cat) => (
              <button
                key={cat.type}
                type="button"
                role="tab"
                aria-selected={selectedType === cat.type}
                onClick={() => setSelectedType(cat.type)}
                className={`rounded-md border px-3 py-1.5 font-mono text-xs font-medium transition ${
                  selectedType === cat.type
                    ? 'border-forest bg-forest text-surface'
                    : 'border-rule bg-surface text-muted hover:text-ink'
                }`}
              >
                {cat.type} ({typeCounts[cat.type]})
              </button>
            ))}
          </div>

          {activeCategorySummary && (
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-forest/30 bg-forest-soft/60 p-4">
              <Terminal className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
              <div className="text-xs leading-relaxed text-ink sm:text-sm">
                <span className="font-mono font-semibold text-forest">
                  {activeCategorySummary.type}:{' '}
                </span>
                {activeCategorySummary.focus}
              </div>
            </div>
          )}
        </div>

        {/* Flagship CTF Cards */}
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {cardCtfs.map((ctf) => (
            <article
              key={ctf.id}
              className="flex flex-col justify-between rounded-xl border border-rule bg-surface p-5 transition hover:border-forest/55"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`rounded border px-2 py-0.5 font-mono text-[10px] font-semibold ${
                      FORMAT_STYLES[ctf.format]
                    }`}
                  >
                    {ctf.format}
                  </span>
                  <span className="font-mono text-[11px] text-muted">{ctf.date}</span>
                </div>

                <h3 className="mt-2.5 flex items-start gap-2 font-display text-lg font-bold text-ink">
                  <Flag className="mt-1 h-4 w-4 shrink-0 text-rust" />
                  <span>{ctf.name}</span>
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-[11px]">
                  <span className="inline-flex items-center gap-1 text-muted">
                    <Users className="h-3.5 w-3.5" />
                    {ctf.teamOrRole}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded border border-ochre/35 bg-ochre-soft px-2 py-0.5 font-semibold text-ochre">
                    <Award className="h-3 w-3 shrink-0" />
                    {ctf.outcome}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {ctf.challengeTypes.map((ct) => (
                    <span
                      key={ct}
                      className="rounded border border-forest/25 bg-forest-soft px-2 py-0.5 font-mono text-[10px] font-medium text-forest"
                    >
                      {ct}
                    </span>
                  ))}
                </div>

                <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                  {ctf.challengesAndWork}
                </p>
              </div>

              {ctf.proofUrl && (
                <div className="mt-4 border-t border-rule pt-3 font-mono text-xs">
                  <a
                    href={ctf.proofUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-forest hover:underline"
                  >
                    {ctf.proofLabel ?? 'Verified Proof'}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Compact Roster Table for Additional 10 CTFs */}
        {tableCtfs.length > 0 && (
          <div className="mt-8 overflow-hidden rounded-xl border border-rule bg-surface">
            <div className="border-b border-rule bg-sand/70 px-5 py-3">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                Additional Documented Competitions ({tableCtfs.length})
              </h3>
            </div>
            <div className="divide-y divide-rule">
              {tableCtfs.map((ctf) => (
                <div
                  key={ctf.id}
                  className="grid gap-3 px-5 py-4 md:grid-cols-12 md:items-center"
                >
                  <div className="md:col-span-4">
                    <div className="font-display text-sm font-bold text-ink">{ctf.name}</div>
                    <div className="mt-0.5 font-mono text-[11px] text-muted">
                      {ctf.date} · {ctf.teamOrRole}
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <span className="inline-block rounded border border-ochre/35 bg-ochre-soft px-2 py-0.5 font-mono text-[11px] font-semibold text-ochre">
                      {ctf.outcome}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-xs leading-relaxed text-muted">{ctf.challengesAndWork}</p>
                  </div>
                  <div className="md:col-span-1 md:text-right">
                    {ctf.proofUrl && (
                      <a
                        href={ctf.proofUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-forest hover:underline"
                      >
                        Proof
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
