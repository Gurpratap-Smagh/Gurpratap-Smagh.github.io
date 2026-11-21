import { Award, BookOpen, ExternalLink, Github, GraduationCap, Linkedin, Mail, Shield } from 'lucide-react';
import { CERTIFICATIONS, PROFILE } from '../data/profile';

export function CredentialsFooter() {
  return (
    <>
      <section id="credentials" className="border-b border-hairline bg-obsidian py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-bright">
                09 // Academic Standing &amp; Credentials
              </span>
              <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                {PROFILE.education.institution}
              </h2>
              <p className="mt-1 font-mono text-xs text-teal-bright">{PROFILE.education.degree}</p>
              <p className="mt-1 text-xs text-slate-400">{PROFILE.education.faculty}</p>

              <div className="mt-5 space-y-2.5 rounded-xl border border-gold-humber/35 bg-panel p-5">
                <div className="flex items-center gap-2 font-mono text-xs text-gold-bright">
                  <GraduationCap className="h-4 w-4" />
                  <span>{PROFILE.education.standing}</span>
                </div>
                <div className="font-mono text-xs text-slate-200">
                  Cumulative GPA: <span className="font-bold text-white">{PROFILE.education.gpa}</span> ·{' '}
                  {PROFILE.education.timeline}
                </div>
                <div className="text-xs text-slate-400">{PROFILE.education.funding}</div>
                <div className="border-t border-hairline pt-2.5 font-mono text-xs text-teal-bright">
                  {PROFILE.availability}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-3.5 sm:grid-cols-2">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex flex-col justify-between rounded-xl border border-hairline bg-panel p-4"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Award className="mt-0.5 h-4 w-4 shrink-0 text-gold-humber" />
                        <span className="font-mono text-[10px] text-slate-400">{cert.issued}</span>
                      </div>
                      <h3 className="mt-2 font-display text-sm font-bold text-white">{cert.name}</h3>
                      <p className="mt-0.5 font-mono text-[11px] text-teal-bright">{cert.issuer}</p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400">{cert.note}</p>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-hairline pt-2.5 font-mono text-[11px]">
                      <span className="text-slate-400">{cert.credentialId ?? 'Verified Credential'}</span>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-teal-bright hover:underline"
                        >
                          Verify
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-obsidian py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <div className="font-display text-base font-bold text-white">{PROFILE.fullName}</div>
            <div className="mt-1 font-mono text-xs text-slate-400">
              {PROFILE.location} · Built with React, TypeScript &amp; Tailwind · Proof-verified portfolio
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-teal-forensic px-3.5 py-2 font-mono text-xs font-semibold text-obsidian hover:bg-teal-bright"
            >
              <Mail className="h-3.5 w-3.5" />
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-panel px-3 py-2 font-mono text-xs text-slate-200 hover:border-teal-forensic"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-panel px-3 py-2 font-mono text-xs text-slate-200 hover:border-teal-forensic"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href={PROFILE.links.medium}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-panel px-3 py-2 font-mono text-xs text-slate-200 hover:border-teal-forensic"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Medium
            </a>
            <a
              href={PROFILE.links.ctftimeUser}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-hairline bg-panel px-3 py-2 font-mono text-xs text-slate-200 hover:border-gold-humber"
            >
              <Shield className="h-3.5 w-3.5 text-gold-bright" />
              CTFtime
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
