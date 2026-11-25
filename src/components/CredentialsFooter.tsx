import { CERTIFICATIONS, PROFILE } from '../data/profile';

export function CredentialsFooter() {
  return (
    <footer className="border-t border-line bg-white py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-4 font-mono text-xs text-muted sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <span className="font-semibold text-navy">{PROFILE.fullName}</span> ·{' '}
          {PROFILE.education.institution} B.Eng. (87.9% Dean&apos;s List)
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={CERTIFICATIONS[0]?.url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-navy"
          >
            GIAC GFACT (#8458)
          </a>
          <a href={PROFILE.links.medium} target="_blank" rel="noreferrer" className="hover:text-navy">
            Medium
          </a>
          <a href={`mailto:${PROFILE.email}`} className="font-semibold text-navy hover:text-gold">
            {PROFILE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
