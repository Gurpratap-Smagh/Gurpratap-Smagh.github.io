import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, BookOpen, Shield } from 'lucide-react';
import { PROFILE } from '../data/profile';

const NAV_ITEMS = [
  { label: 'Institutional', href: '#institutional' },
  { label: 'Hackathons', href: '#hackathons' },
  { label: 'Skills -> Proof', href: '#skills-proof' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Field Stories', href: '#stories' },
  { label: 'Builds', href: '#builds' },
  { label: 'Writeups', href: '#writeups' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-obsidian/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-teal-forensic/50 bg-panel font-mono text-xs font-bold text-teal-bright transition group-hover:border-teal-bright">
            &lt;/&gt;
          </span>
          <div className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-tight text-slate-100">
              Gurpratap Smagh
            </span>
            <span className="block font-mono text-[11px] text-slate-400">
              bromskiii · Humber Eng &apos;29
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 font-mono text-xs text-slate-300 transition hover:bg-panel hover:text-teal-bright"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="rounded-md border border-hairline bg-panel p-2 text-slate-300 transition hover:border-teal-forensic hover:text-teal-bright"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-md border border-hairline bg-panel p-2 text-slate-300 transition hover:border-teal-forensic hover:text-teal-bright"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.links.medium}
            target="_blank"
            rel="noreferrer"
            aria-label="Medium Articles"
            className="rounded-md border border-hairline bg-panel p-2 text-slate-300 transition hover:border-teal-forensic hover:text-teal-bright"
          >
            <BookOpen className="h-4 w-4" />
          </a>
          <a
            href={PROFILE.links.ctftimeUser}
            target="_blank"
            rel="noreferrer"
            aria-label="CTFtime Profile"
            className="rounded-md border border-hairline bg-panel p-2 text-slate-300 transition hover:border-gold-humber hover:text-gold-bright"
          >
            <Shield className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="ml-1 inline-flex items-center gap-1.5 rounded-md bg-teal-forensic px-3 py-1.5 font-mono text-xs font-semibold text-obsidian transition hover:bg-teal-bright"
          >
            <Mail className="h-3.5 w-3.5" />
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-hairline bg-panel p-2 text-slate-200 lg:hidden"
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-panel px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-xs text-slate-200 hover:bg-elevated hover:text-teal-bright"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex flex-wrap gap-2 border-t border-hairline pt-3">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-hairline px-3 py-1.5 font-mono text-xs text-slate-300"
              >
                GitHub
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-hairline px-3 py-1.5 font-mono text-xs text-slate-300"
              >
                LinkedIn
              </a>
              <a
                href={PROFILE.links.medium}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-hairline px-3 py-1.5 font-mono text-xs text-slate-300"
              >
                Medium
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded bg-teal-forensic px-3 py-1.5 font-mono text-xs font-semibold text-obsidian"
              >
                {PROFILE.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
