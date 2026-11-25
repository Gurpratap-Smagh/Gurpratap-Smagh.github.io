import { ArrowDownRight, ExternalLink } from 'lucide-react';

interface SplitHeroProps {
  onOpenHackathons: () => void;
  onOpenCtfs: () => void;
}

const HUMBER_PROFILE_URL =
  'https://humber.ca/applied-technology/articles/from-humber-to-the-global-cybersecurity-stage';
const THEMCTF_URL = 'https://themctf.com/';

export function SplitHero({ onOpenHackathons, onOpenCtfs }: SplitHeroProps) {
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
            Third-year engineering student focused on DFIR, IoT security, and incident response.
            Whether it is a hackathon build, a blockchain prototype, or a CTF challenge, I ask the
            right questions early, align the team around a concrete plan, and deliver work that
            holds up in code and on stage.
          </p>

          <div className="mt-5 grid grid-cols-2 divide-y divide-white/10 overflow-hidden rounded-lg bg-navy text-white sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            <button
              type="button"
              onClick={onOpenHackathons}
              className="group px-4 py-3 text-left transition hover:bg-navy-secondary"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-lg font-bold text-gold sm:text-xl">4</span>
                <ArrowDownRight className="h-3 w-3 opacity-70 transition group-hover:text-gold" />
              </div>
              <div className="mt-0.5 text-xs font-medium text-slate-200">Hackathon Wins</div>
            </button>

            <button
              type="button"
              onClick={onOpenCtfs}
              className="group px-4 py-3 text-left transition hover:bg-navy-secondary"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-lg font-bold text-gold sm:text-xl">2</span>
                <ArrowDownRight className="h-3 w-3 opacity-70 transition group-hover:text-gold" />
              </div>
              <div className="mt-0.5 text-xs font-medium text-slate-200">
                International Onsite CTF Finals
              </div>
            </button>

            <a
              href={HUMBER_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="group block px-4 py-3 text-left transition hover:bg-navy-secondary"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-lg font-bold text-gold sm:text-xl">3rd Yr</span>
                <ExternalLink className="h-3 w-3 opacity-70 transition group-hover:text-gold" />
              </div>
              <div className="mt-0.5 text-xs font-medium text-slate-200">B.Eng. Info Systems</div>
            </a>

            <a
              href={THEMCTF_URL}
              target="_blank"
              rel="noreferrer"
              className="group block px-4 py-3 text-left transition hover:bg-navy-secondary"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="font-mono text-lg font-bold text-gold sm:text-xl">HumberCTF</span>
                <ExternalLink className="h-3 w-3 opacity-70 transition group-hover:text-gold" />
              </div>
              <div className="mt-0.5 text-xs font-medium text-slate-200">THEM?!</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
