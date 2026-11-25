import { CERTIFICATIONS, PROFILE } from '../data/profile';

export function CredentialsFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-navy py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 font-mono text-xs text-muted sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <span className="font-semibold text-ink">{PROFILE.fullName}</span> · {PROFILE.education.institution} ·{' '}
          {PROFILE.availability}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="hover:text-gold">
            GitHub
          </a>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold">
            LinkedIn
          </a>
          <a href={PROFILE.links.medium} target="_blank" rel="noreferrer" className="hover:text-gold">
            Medium
          </a>
          <a href={CERTIFICATIONS[0]?.url} target="_blank" rel="noreferrer" className="hover:text-gold">
            GIAC GFACT
          </a>
          <a href={`mailto:${PROFILE.email}`} className="text-gold-badge hover:text-gold-hover">
            {PROFILE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
