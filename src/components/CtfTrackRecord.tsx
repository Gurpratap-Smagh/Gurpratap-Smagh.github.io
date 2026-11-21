import { useMemo, useState } from 'react';
import { Award, Calendar, ExternalLink, Flag, ShieldCheck, Terminal, Users } from 'lucide-react';
import { CYBERSTART_ARC, CTF_CHALLENGE_SUMMARY, DOCUMENTED_CTFS } from '../data/ctfs';
import { CtfChallengeType } from '../data/types';

const FORMAT_STYLES = {
  'On-Site Finals': 'border-gold-humber/45 bg-gold-humber/15 text-gold-bright',
  'Organizer / Author': 'border-signal-orange/45 bg-signal-orange/15 text-signal-orange',
  'In-Person': 'border-teal-forensic/45 bg-teal-forensic/15 text-teal-bright',
  Online: 'border-hairline bg-elevated text-slate-300',
};

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

  return (
    <section id="ctfs" className="border-b border-hairline bg-obsidian py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-gold-bright">
              03 // Competitive CTFs, Challenge Types &amp; CyberStart Top Performer
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From a CyberStart Booth Card to 16 Documented Competitions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              Documented competitions across forensics, hardware fault injection, OSINT, cryptography,
              enterprise SecOps log hunting, and live CTF infrastructure ops. Filter by challenge discipline
              to inspect exact solves and writeups.
            </p>
          </div>
          <div className="font-mono text-xs text-slate-400">
            {DOCUMENTED_CTFS.length} documented CTFs · {CTF_CHALLENGE_SUMMARY.length} challenge disciplines
          </div>
        </div>

        {/* Rogers CyberStart Canada Top Performer Spotlight */}
        <article className="mt-10 overflow-hidden rounded-2xl border border-gold-humber/45 bg-panel p-6 lg:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-gold-humber/50 bg-gold-humber/15 px-2.5 py-1 font-mono text-[11px] font-semibold text-gold-bright">
                {CYBERSTART_ARC.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-hairline bg-elevated px-2.5 py-1 font-mono text-[11px] text-teal-bright">
                <Calendar className="h-3 w-3" />
                {CYBERSTART_ARC.period}
              </span>
            </div>

            <a
              href={CYBERSTART_ARC.verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-gold-humber/45 bg-elevated px-3 py-1.5 font-mono text-xs font-medium text-gold-bright transition hover:border-gold-bright"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Verify GFACT on Credly
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <h3 className="mt-4 font-display text-2xl font-bold text-white">
            {CYBERSTART_ARC.headline}
          </h3>
          <p className="mt-2.5 max-w-4xl text-sm leading-relaxed text-slate-300">
            {CYBERSTART_ARC.summary}
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CYBERSTART_ARC.milestones.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-hairline bg-obsidian/75 p-3.5"
              >
                <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  {m.label}
                </div>
                <div className="mt-1 font-mono text-xs font-semibold text-teal-bright">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Challenge Type Filters */}
        <div className="mt-10">
          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="CTF Challenge Types">
            <button
              type="button"
              role="tab"
              aria-selected={selectedType === 'All'}
              onClick={() => setSelectedType('All')}
              className={`rounded-md border px-3 py-1.5 font-mono text-xs transition ${
                selectedType === 'All'
                  ? 'border-teal-bright bg-teal-forensic/20 text-teal-bright'
                  : 'border-hairline bg-panel text-slate-300 hover:text-white'
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
                className={`rounded-md border px-3 py-1.5 font-mono text-xs transition ${
                  selectedType === cat.type
                    ? 'border-teal-bright bg-teal-forensic/20 text-teal-bright'
                    : 'border-hairline bg-panel text-slate-300 hover:text-white'
                }`}
              >
                {cat.type} ({typeCounts[cat.type]})
              </button>
            ))}
          </div>

          {activeCategorySummary ? (
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-teal-forensic/35 bg-panel/80 p-4">
              <Terminal className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" />
              <div className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                <span className="font-mono font-semibold text-teal-bright">
                  {activeCategorySummary.type}:{' '}
                </span>
                {activeCategorySummary.focus}
              </div>
            </div>
          ) : (
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {CTF_CHALLENGE_SUMMARY.slice(0, 4).map((item) => (
                <button
                  key={item.type}
                  type="button"
                  onClick={() => setSelectedType(item.type)}
                  className="rounded-xl border border-hairline bg-panel/70 p-3.5 text-left transition hover:border-teal-forensic"
                >
                  <div className="flex items-center justify-between gap-2 font-mono text-xs font-semibold text-teal-bright">
                    <span>{item.type}</span>
                    <span className="text-slate-400">{typeCounts[item.type]}</span>
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-400">
                    {item.focus}
                  </p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Documented CTFs Roster */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {visibleCtfs.map((ctf) => (
            <article
              key={ctf.id}
              className="flex flex-col justify-between rounded-xl border border-hairline bg-panel p-5 transition hover:border-slate-700"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`rounded-md border px-2 py-0.5 font-mono text-[10px] font-semibold ${
                      FORMAT_STYLES[ctf.format]
                    }`}
                  >
                    {ctf.format}
                  </span>
                  <span className="font-mono text-[11px] text-slate-400">{ctf.date}</span>
                </div>

                <h3 className="mt-2.5 flex items-start gap-2 font-display text-lg font-bold text-white">
                  <Flag className="mt-1 h-4 w-4 shrink-0 text-teal-bright" />
                  <span>{ctf.name}</span>
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-[11px]">
                  <span className="inline-flex items-center gap-1 text-slate-400">
                    <Users className="h-3.5 w-3.5" />
                    {ctf.teamOrRole}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded border border-gold-humber/30 bg-obsidian/80 px-2 py-0.5 text-gold-bright">
                    <Award className="h-3 w-3 shrink-0" />
                    {ctf.outcome}
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {ctf.challengeTypes.map((ct) => (
                    <span
                      key={ct}
                      className="rounded border border-teal-forensic/30 bg-teal-forensic/10 px-2 py-0.5 font-mono text-[10px] text-teal-bright"
                    >
                      {ct}
                    </span>
                  ))}
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {ctf.challengesAndWork}
                </p>
              </div>

              {(ctf.proofUrl || ctf.anchorId) && (
                <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-hairline pt-3 font-mono text-xs">
                  {ctf.proofUrl && (
                    <a
                      href={ctf.proofUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-teal-bright hover:underline"
                    >
                      {ctf.proofLabel ?? 'Verified Proof'}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {ctf.anchorId && (
                    <a
                      href={`#${ctf.anchorId}`}
                      className="text-slate-300 hover:text-gold-bright"
                    >
                      Inspect Full Dossier -&gt;
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
