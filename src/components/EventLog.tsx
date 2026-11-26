import { CONFERENCES_LIST } from '../data/eventsLog';

export function EventLog() {
  return (
    <section id="events" className="border-t border-line bg-slatebg py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted">
            Conferences &amp; Summits
          </span>
          <h2 className="mt-0.5 font-display text-lg font-bold text-navy sm:text-xl">
            Summits, Showcases &amp; Briefings Attended
          </h2>
        </div>

        <ul className="mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line bg-white">
          {CONFERENCES_LIST.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                  <span className="font-display text-sm font-semibold text-navy">
                    {item.event}
                  </span>
                  <span className="font-mono text-[11px] text-muted">{item.location}</span>
                </div>
                <p className="mt-0.5 text-xs leading-relaxed text-body">{item.takeaway}</p>
              </div>
              <span className="shrink-0 font-mono text-[11px] text-muted">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
