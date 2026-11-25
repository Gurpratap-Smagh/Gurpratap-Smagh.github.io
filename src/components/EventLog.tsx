import { CONFERENCES_LIST } from '../data/eventsLog';

export function EventLog() {
  return (
    <section id="events" className="border-t border-line bg-slatebg py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted">
            Conferences, Summits &amp; Showcases
          </span>
          <h2 className="mt-0.5 font-display text-xl font-bold text-navy sm:text-2xl">
            Technical Summits &amp; Institutional Representation
          </h2>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {CONFERENCES_LIST.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-xl border border-line bg-white transition hover:border-gold"
            >
              {item.photo && (
                <div className="aspect-[16/9] w-full overflow-hidden border-b border-line bg-slatebg">
                  <img
                    src={item.photo}
                    alt={item.photoAlt ?? item.event}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-muted">
                    <span>{item.location}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mt-1.5 font-display text-lg font-bold text-navy">{item.event}</h3>
                  <div className="mt-1.5 inline-block rounded border border-gold/50 bg-gold-soft px-2 py-0.5 font-mono text-[11px] font-semibold text-navy">
                    {item.roleOrFocus}
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-body">{item.takeaway}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
