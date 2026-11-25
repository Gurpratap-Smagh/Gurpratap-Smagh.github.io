const HERO_METRICS = [
  { value: '4', label: 'Hackathon Wins' },
  { value: '2', label: 'International Onsite CTF Finals' },
  { value: '3rd Yr', label: 'B.Eng. Info Systems' },
  { value: 'HumberCTF', label: 'THEM?!' },
];

export function SplitHero() {
  return (
    <section id="top" className="border-b border-line bg-white py-8 sm:py-10">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-4">
          <div className="mx-auto max-w-[300px] lg:max-w-none">
            <img
              src="/photos/portrait-gurpratap.jpg"
              alt="Portrait of Gurpratap Smagh"
              className="aspect-[4/3] w-full rounded-[12px] border border-navy bg-slatebg object-cover object-top shadow-[6px_6px_0_0_#C8A028]"
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-slatebg px-3 py-1 font-mono text-[11px] font-medium text-navy">
            <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
            <span>Available Summer 2027 Co-op (4 to 16 Months) · Humber B.Eng.</span>
          </div>

          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-5xl">
            Gurpratap Smagh
          </h1>

          <p className="mt-2 font-mono text-sm font-medium text-navy-secondary sm:text-base">
            DFIR · IoT &amp; Hardware Security · Live Incident Ops
          </p>

          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-body">
            I build zero-trust L7 honeypot telemetry pipelines and read-only cloud incident triage
            agents, extract firmware under AI-free CTF hardware rules, and run live incident ops
            for global competitions.
          </p>

          <div className="mt-5 grid grid-cols-2 divide-y divide-white/10 overflow-hidden rounded-lg bg-navy text-white sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {HERO_METRICS.map((m) => (
              <div key={m.label} className="px-4 py-3">
                <div className="font-mono text-lg font-bold text-gold sm:text-xl">{m.value}</div>
                <div className="mt-0.5 text-xs font-medium text-slate-200">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
