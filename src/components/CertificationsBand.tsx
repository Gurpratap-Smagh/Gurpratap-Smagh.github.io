import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/profile';

const ACCOLADES = [
  {
    title: 'Employability Experience Fund (EEF) Scholarship',
    org: 'Humber Polytechnic',
    detail: 'Institutional funding awarded to represent Humber at Midnight Flag Finals in France.',
  },
  {
    title: 'Academic Scholarship & Dean\'s Honour List',
    org: 'Humber Polytechnic · B.Eng.',
    detail: '87.9% cumulative GPA across Semesters 1 to 4 with FAST travel sponsorship.',
  },
  {
    title: 'Rogers CyberStart Canada Top Performer 2026',
    org: 'Rogers Cybersecure Catalyst (TMU)',
    detail: '4th in CyberStart Canada CTF · 200+ consecutive TryHackMe days · SANS scholarship.',
  },
];

export function CertificationsBand() {
  return (
    <section id="certs" className="border-b border-line bg-white py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted">
              Verified Credentials &amp; Recognition
            </span>
            <h2 className="mt-0.5 font-display text-xl font-bold text-navy sm:text-2xl">
              Certifications &amp; Accolades
            </h2>
          </div>
          <span className="font-mono text-xs text-muted">Click any cert to verify</span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.slice(0, 4).map((cert, i) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className={`group flex flex-col justify-between rounded-xl border p-4 transition hover:border-gold ${
                i === 0 ? 'border-navy/30 bg-slatebg' : 'border-line bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 rounded border border-gold/50 bg-gold-soft px-2 py-0.5 font-mono text-[10px] font-semibold text-navy">
                    <ShieldCheck className="h-3 w-3 text-gold" />
                    {i === 0 ? '91% · Analyst #8458' : cert.issued}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted transition group-hover:text-gold" />
                </div>

                <h3 className="mt-2.5 font-display text-sm font-bold leading-snug text-navy">
                  {cert.name}
                </h3>
                <div className="mt-1 font-mono text-[11px] text-muted">{cert.issuer}</div>
              </div>

              <p className="mt-2.5 text-xs leading-relaxed text-body">{cert.note}</p>
            </a>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {ACCOLADES.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-line bg-slatebg px-4 py-3.5"
            >
              <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-navy">
                <Award className="h-3.5 w-3.5 shrink-0 text-gold" />
                <span>{item.org}</span>
              </div>
              <div className="mt-1 font-display text-sm font-bold text-navy">{item.title}</div>
              <p className="mt-1 text-xs leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
