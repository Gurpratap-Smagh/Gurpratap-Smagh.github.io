import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PORTFOLIO_ENTRIES, PortfolioEntry } from '../data/portfolioEntries';

interface ProofReelProps {
  onSelectEntry: (entry: PortfolioEntry) => void;
}

export function ProofReel({ onSelectEntry }: ProofReelProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const reelItems = PORTFOLIO_ENTRIES.filter((entry) => entry.featuredInReel && entry.thumbnail);

  const scrollByAmount = (delta: number) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section id="proof" className="border-b border-line bg-slatebg py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted">
              Visual Proof Reel
            </span>
            <h2 className="mt-0.5 font-display text-xl font-bold text-navy sm:text-2xl">
              Competitions, Pitches &amp; Hardware Benches
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="hidden font-mono text-xs text-muted sm:inline">
              Scroll to explore -&gt;
            </span>
            <button
              type="button"
              onClick={() => scrollByAmount(-320)}
              aria-label="Scroll proof reel left"
              className="rounded-md border border-line bg-white p-2 text-navy transition hover:border-gold"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount(320)}
              aria-label="Scroll proof reel right"
              className="rounded-md border border-line bg-white p-2 text-navy transition hover:border-gold"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="hide-scrollbar mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
        >
          {reelItems.map((entry) => (
            <button
              key={entry.id}
              type="button"
              onClick={() => onSelectEntry(entry)}
              className="group w-[265px] shrink-0 snap-start overflow-hidden rounded-xl border border-line bg-white text-left transition hover:border-gold sm:w-[290px]"
            >
              <div
                className={`aspect-[16/10] w-full overflow-hidden border-b border-line ${
                  entry.thumbnail?.includes('logo') ? 'bg-white p-2.5' : 'bg-slatebg'
                }`}
              >
                <img
                  src={entry.thumbnail}
                  alt={entry.mediaGallery[0]?.alt ?? entry.title}
                  loading="lazy"
                  className={`h-full w-full transition duration-300 group-hover:scale-[1.03] ${
                    entry.thumbnail?.includes('logo')
                      ? 'object-contain'
                      : 'object-cover object-top'
                  }`}
                />
              </div>
              <div className="p-3.5">
                <span className="inline-block rounded border border-gold/50 bg-gold-soft px-2 py-0.5 font-mono text-[10px] font-semibold text-navy">
                  {entry.outcomeBadge}
                </span>
                <div className="mt-1.5 line-clamp-1 font-display text-sm font-semibold text-navy group-hover:text-gold-hover">
                  {entry.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
