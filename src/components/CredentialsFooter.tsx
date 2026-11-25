import { BookOpen, Github, Linkedin, Mail, Shield } from 'lucide-react';
import { PROFILE } from '../data/profile';

export function CredentialsFooter() {
  return (
    <footer className="border-t border-rule bg-surface py-10">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div>
          <div className="font-display text-base font-bold text-ink">{PROFILE.fullName}</div>
          <p className="mt-1 font-mono text-xs text-muted">
            {PROFILE.handle} · {PROFILE.location} · {PROFILE.availability}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-rule bg-paper px-3 py-1.5 font-mono text-xs text-ink transition hover:border-forest hover:text-forest"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-rule bg-paper px-3 py-1.5 font-mono text-xs text-ink transition hover:border-forest hover:text-forest"
          >
            <Linkedin className="h-3.5 w-3.5" />
            LinkedIn
          </a>
          <a
            href={PROFILE.links.medium}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-rule bg-paper px-3 py-1.5 font-mono text-xs text-ink transition hover:border-forest hover:text-forest"
          >
            <BookOpen className="h-3.5 w-3.5" />
            Medium
          </a>
          <a
            href={PROFILE.links.ctftimeUser}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-rule bg-paper px-3 py-1.5 font-mono text-xs text-ink transition hover:border-rust hover:text-rust"
          >
            <Shield className="h-3.5 w-3.5" />
            CTFtime
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-1.5 rounded-md bg-rust px-3.5 py-1.5 font-mono text-xs font-semibold text-surface transition hover:bg-rust-bright"
          >
            <Mail className="h-3.5 w-3.5" />
            {PROFILE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
