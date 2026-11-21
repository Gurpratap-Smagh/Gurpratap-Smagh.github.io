import { useMemo, useState } from 'react';
import { CheckCircle2, ExternalLink, ArrowDownRight, Image as ImageIcon } from 'lucide-react';
import { PROOF_ARTIFACTS, SKILL_DOMAINS, SKILL_NODES } from '../data/skillsProof';
import { PhotoItem, ProofArtifact } from '../data/types';

interface SkillProofMatrixProps {
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
}

const KIND_STYLES: Record<ProofArtifact['kind'], string> = {
  TELEMETRY: 'border-signal-orange/40 bg-signal-orange/15 text-signal-orange',
  REPO: 'border-teal-forensic/50 bg-teal-forensic/15 text-teal-bright',
  WRITEUP: 'border-sky-400/40 bg-sky-400/15 text-sky-300',
  'LIVE DEMO': 'border-emerald-400/40 bg-emerald-400/15 text-emerald-300',
  'EVENT PHOTO': 'border-gold-humber/50 bg-gold-humber/15 text-gold-bright',
  CERT: 'border-gold-humber/50 bg-gold-humber/15 text-gold-bright',
  LINKEDIN: 'border-indigo-400/40 bg-indigo-400/15 text-indigo-300',
};

export function SkillProofMatrix({ onOpenLightbox }: SkillProofMatrixProps) {
  const [selectedDomain, setSelectedDomain] = useState<string>(SKILL_DOMAINS[0].id);
  const [selectedSkillId, setSelectedSkillId] = useState<string>(SKILL_NODES[0].id);

  const visibleSkills = useMemo(
    () => SKILL_NODES.filter((s) => s.domainId === selectedDomain),
    [selectedDomain],
  );

  const activeSkill = useMemo(() => {
    const found = SKILL_NODES.find((s) => s.id === selectedSkillId && s.domainId === selectedDomain);
    return found ?? visibleSkills[0];
  }, [selectedSkillId, selectedDomain, visibleSkills]);

  const activeProofs = useMemo(
    () => (activeSkill ? activeSkill.proofIds.map((id) => PROOF_ARTIFACTS[id]).filter(Boolean) : []),
    [activeSkill],
  );

  const activeDomainObj = SKILL_DOMAINS.find((d) => d.id === selectedDomain);

  return (
    <section id="skills-proof" className="border-b border-hairline bg-panel/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-teal-bright">
              04 // Zero Unverified Buzzwords
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Skills Linked Directly to Proof
            </h2>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              No standalone resume skill clouds. Pick any discipline and click a skill chip to inspect the
              exact repo, writeup, live demo, telemetry rule, or event photo proving it.
            </p>
          </div>
          <div className="font-mono text-xs text-slate-400">
            {SKILL_NODES.length} verified skills · {Object.keys(PROOF_ARTIFACTS).length} proof artifacts
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Skill Domains">
          {SKILL_DOMAINS.map((domain) => {
            const active = domain.id === selectedDomain;
            return (
              <button
                key={domain.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setSelectedDomain(domain.id);
                  const firstSkill = SKILL_NODES.find((s) => s.domainId === domain.id);
                  if (firstSkill) setSelectedSkillId(firstSkill.id);
                }}
                className={`rounded-lg border px-3.5 py-2 font-mono text-xs font-medium transition ${
                  active
                    ? 'border-teal-bright bg-teal-forensic/20 text-teal-bright'
                    : 'border-hairline bg-panel text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
              >
                {domain.name}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="rounded-xl border border-hairline bg-panel p-5 lg:col-span-5">
            {activeDomainObj && (
              <p className="mb-4 border-b border-hairline pb-3 text-xs leading-relaxed text-slate-400">
                {activeDomainObj.tagline}
              </p>
            )}

            <div className="space-y-2.5">
              {visibleSkills.map((skill) => {
                const isSelected = activeSkill?.id === skill.id;
                return (
                  <button
                    key={skill.id}
                    type="button"
                    onClick={() => setSelectedSkillId(skill.id)}
                    className={`w-full rounded-lg border p-3.5 text-left transition ${
                      isSelected
                        ? 'border-teal-bright bg-elevated shadow-md'
                        : 'border-hairline bg-obsidian/60 hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-sm font-semibold text-white">{skill.name}</span>
                      <span className="shrink-0 rounded bg-panel px-2 py-0.5 font-mono text-[11px] text-teal-bright">
                        {skill.proofIds.length} proof{skill.proofIds.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{skill.levelNote}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-hairline bg-panel p-5 lg:col-span-7">
            {activeSkill && (
              <>
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-hairline pb-4">
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-teal-bright">
                      Direct Verification Evidence
                    </span>
                    <h3 className="mt-0.5 font-display text-xl font-bold text-white">{activeSkill.name}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-forensic/40 bg-teal-forensic/10 px-3 py-1 font-mono text-xs text-teal-bright">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Verified Proof Chain
                  </span>
                </div>

                <div className="mt-4 space-y-3.5">
                  {activeProofs.map((proof) => (
                    <div
                      key={proof.id}
                      className="rounded-lg border border-hairline bg-obsidian/80 p-4 transition hover:border-slate-600"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={`rounded border px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider ${KIND_STYLES[proof.kind]}`}
                        >
                          {proof.kind}
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          {proof.photoSrc && (
                            <button
                              type="button"
                              onClick={() =>
                                onOpenLightbox(
                                  [
                                    {
                                      src: proof.photoSrc!,
                                      alt: proof.title,
                                      caption: proof.detail,
                                      location: 'Verified Event Photo',
                                      date: '2026',
                                    },
                                  ],
                                  0,
                                )
                              }
                              className="inline-flex items-center gap-1 rounded border border-gold-humber/40 bg-elevated px-2.5 py-1 font-mono text-[11px] text-gold-bright hover:border-gold-bright"
                            >
                              <ImageIcon className="h-3 w-3" />
                              Inspect Photo
                            </button>
                          )}
                          {proof.anchorId && (
                            <a
                              href={`#${proof.anchorId}`}
                              className="inline-flex items-center gap-1 rounded border border-hairline bg-elevated px-2.5 py-1 font-mono text-[11px] text-slate-200 hover:border-teal-forensic hover:text-teal-bright"
                            >
                              Jump to Section
                              <ArrowDownRight className="h-3 w-3" />
                            </a>
                          )}
                          {proof.url && (
                            <a
                              href={proof.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 rounded bg-teal-forensic/20 px-2.5 py-1 font-mono text-[11px] font-medium text-teal-bright hover:bg-teal-forensic hover:text-obsidian"
                            >
                              Open Source
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                      </div>

                      <h4 className="mt-2 font-display text-base font-semibold text-white">{proof.title}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-300">{proof.detail}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
