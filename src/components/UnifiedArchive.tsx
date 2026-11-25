import { RotateCcw } from 'lucide-react';
import {
  PILLARS,
  PORTFOLIO_ENTRIES,
  Pillar,
  PortfolioEntry,
  SkillNodeId,
} from '../data/portfolioEntries';

interface UnifiedArchiveProps {
  selectedPillar: 'All' | Pillar;
  selectedSkill: SkillNodeId | null;
  onSelectPillar: (pillar: 'All' | Pillar) => void;
  onClearFilters: () => void;
  onSelectEntry: (entry: PortfolioEntry) => void;
}

export function UnifiedArchive({
  selectedPillar,
  selectedSkill,
  onSelectPillar,
  onClearFilters,
  onSelectEntry,
}: UnifiedArchiveProps) {
  const filtered = PORTFOLIO_ENTRIES.filter((entry) => {
    const matchesPillar = selectedPillar === 'All' || entry.pillars.includes(selectedPillar);
    const matchesSkill = !selectedSkill || entry.skillsProven.includes(selectedSkill);
    return matchesPillar && matchesSkill;
  });

  const isFiltered = selectedPillar !== 'All' || selectedSkill !== null;

  return (
    <section id="archive" className="bg-white pb-14 pt-2">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted">
              Unified Archive
            </span>
            <h2 className="mt-0.5 font-display text-2xl font-bold text-navy">
              Builds, Hackathons, CTF Writeups &amp; Field Ops
            </h2>
          </div>

          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Pillar Filter">
            {PILLARS.map((pillar) => {
              const active = selectedPillar === pillar;
              const count = PORTFOLIO_ENTRIES.filter((entry) => {
                const matchSkill = !selectedSkill || entry.skillsProven.includes(selectedSkill);
                const matchPillar = pillar === 'All' || entry.pillars.includes(pillar);
                return matchSkill && matchPillar;
              }).length;

              return (
                <button
                  key={pillar}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onSelectPillar(pillar)}
                  className={`rounded-md border px-3 py-1.5 font-mono text-xs transition ${
                    active
                      ? 'border-gold bg-navy-secondary font-semibold text-white'
                      : 'border-line bg-slatebg text-body hover:border-gold hover:text-navy'
                  }`}
                >
                  {pillar} <span className={active ? 'text-gold' : 'text-muted'}>({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="font-mono text-xs text-muted">
            Showing <span className="font-semibold text-navy">{filtered.length}</span> of{' '}
            {PORTFOLIO_ENTRIES.length} entries
            {selectedSkill && (
              <>
                {' '}
                · Skill filter:{' '}
                <span className="rounded bg-navy-secondary px-2 py-0.5 text-gold">
                  {selectedSkill}
                </span>
              </>
            )}
          </div>

          {isFiltered && (
            <button
              type="button"
              onClick={onClearFilters}
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-navy hover:text-gold-hover"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Clear Filter
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-6 rounded-xl border border-line bg-slatebg p-8 text-center">
            <p className="font-mono text-sm text-navy">
              No entries match both [{selectedPillar}] and [{selectedSkill}].
            </p>
            <button
              type="button"
              onClick={onClearFilters}
              className="mt-3 rounded-md bg-navy px-4 py-2 font-mono text-xs font-semibold text-white hover:bg-navy-secondary"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((entry) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => onSelectEntry(entry)}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-line bg-white text-left transition duration-150 hover:-translate-y-0.5 hover:border-gold"
              >
                <div>
                  {entry.thumbnail ? (
                    <div className="aspect-[16/9] w-full overflow-hidden border-b border-line bg-slatebg">
                      <img
                        src={entry.thumbnail}
                        alt={entry.mediaGallery[0]?.alt ?? entry.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/9] w-full flex-col justify-between border-b border-line bg-navy p-4 text-white">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-gold">
                        {entry.thumbLabel ?? 'SECURITY // ENGINEERING'}
                      </span>
                      <div>
                        <div className="font-mono text-xs text-slate-300">{entry.venue}</div>
                        <div className="mt-1 font-display text-sm font-semibold text-white/90">
                          {entry.stack.slice(0, 3).join(' · ')}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-block rounded border border-gold/50 bg-gold-soft px-2 py-0.5 font-mono text-[11px] font-semibold text-navy">
                        {entry.outcomeBadge}
                      </span>
                      <span className="font-mono text-[11px] text-muted">{entry.date}</span>
                    </div>

                    <h3 className="mt-2.5 font-display text-[17px] font-semibold leading-snug text-navy group-hover:text-navy-secondary">
                      {entry.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-body">
                      {entry.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 border-t border-line bg-slatebg/60 px-5 py-3">
                  <div className="flex flex-wrap gap-1.5">
                    {entry.pillars.slice(0, 2).map((pillar) => (
                      <span
                        key={pillar}
                        className="rounded border border-line bg-white px-2 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {pillar}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-xs font-semibold text-navy group-hover:text-gold-hover">
                    Inspect -&gt;
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
