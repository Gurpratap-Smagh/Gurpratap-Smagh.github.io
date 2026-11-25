import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { EVENTS_LOG } from '../data/eventsLog';

export function EventLog() {
  const [expanded, setExpanded] = useState(false);

  const visibleRows = expanded ? EVENTS_LOG : EVENTS_LOG.slice(0, 5);

  return (
    <section id="events" className="border-t border-line bg-slatebg py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted">
              Event &amp; Competition Log
            </span>
            <h2 className="mt-0.5 font-display text-xl font-bold text-navy sm:text-2xl">
              Conferences, Summits &amp; Competition Circuit
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="inline-flex items-center gap-1.5 rounded-md border border-navy bg-white px-3.5 py-1.5 font-mono text-xs font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            {expanded ? (
              <>
                Show top 5 <ChevronUp className="h-3.5 w-3.5" />
              </>
            ) : (
              <>
                Show all {EVENTS_LOG.length} events <ChevronDown className="h-3.5 w-3.5" />
              </>
            )}
          </button>
        </div>

        <div className="mt-5 overflow-hidden rounded-xl border border-line bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-slatebg font-mono text-[11px] font-semibold uppercase tracking-wider text-muted">
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Event</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Role / Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-sm">
                {visibleRows.map((row) => (
                  <tr key={`${row.date}-${row.event}`} className="transition hover:bg-slatebg/70">
                    <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-muted">
                      {row.date}
                    </td>
                    <td className="px-4 py-3 font-semibold text-navy">{row.event}</td>
                    <td className="px-4 py-3 text-body">{row.location}</td>
                    <td className="px-4 py-3 font-mono text-xs text-navy-secondary">
                      {row.roleOrResult}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
