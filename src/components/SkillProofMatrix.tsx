import { useMemo, useState } from 'react';
import { CheckCircle2, ExternalLink, ArrowDownRight, Image as ImageIcon } from 'lucide-react';
import { PROOF_ARTIFACTS, SKILL_DOMAINS, SKILL_NODES } from '../data/skillsProof';
import { PhotoItem, ProofArtifact } from '../data/types';
import { AppRoute } from './Navbar';

interface SkillProofMatrixProps {
  onOpenLightbox: (photos: PhotoItem[], index: number) => void;
  onNavigate?: (route: AppRoute) => void;
}

const KIND_STYLES: Record<ProofArtifact['kind'], string> = {
  TELEMETRY: 'border-rust/35 bg-rust-soft text-rust',
  REPO: 'border-forest/35 bg-forest-soft text-forest',
  WRITEUP: 'border-cobalt/35 bg-cobalt-soft text-cobalt',
  'LIVE DEMO': 'border-forest/35 bg-forest-soft text-forest',
  'EVENT PHOTO': 'border-ochre/35 bg-ochre-soft text-ochre',
  CERT: 'border-ochre/35 bg-ochre-soft text-ochre',
  LINKEDIN: 'border-cobalt/35 bg-cobalt-soft text-cobalt',
};

function mapAnchorToRoute(anchorId?: string): AppRoute {
  if (!anchorId) return 'work';
  if (anchorId === 'ctfs') return 'ctfs';
  if (anchorId === 'credentials' || anchorId === 'stories' || anchorId === 'writeups' || anchorId === 'institutional') {
    return 'academia';
  }
  return 'work';
}

export function SkillProofMatrix({ onOpenLightbox, onNavigate }: SkillProofMatrixProps) {
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
    <section id="skills-proof" className="border-b border-rule bg-sand/45 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-forest">
              Zero Unverified Buzzwords
            </span>
            <h2 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Skills Linked Directly to Proof
            </h2>
            <p className="mt-2 text-sm text-muted">
              Click any discipline and skill chip to inspect the exact repo, writeup, live demo, or event photo proving it.
            </p>
          </div>
          <div className="font-mono text-xs text-muted">
            {SKILL_NODES.length} verified skills · {Object.keys(PROOF_ARTIFACTS).length} proof artifacts
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Skill Domains">
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
                  const first = SKILL_NODES.find((s) => s.domainId === domain.id);
                  if (first) setSelectedSkillId(first.id);
                }}
                className={`rounded-md border px-3 py-1.5 font-mono text-xs font-medium transition ${
                  active
                    ? 'border-forest bg-forest text-surface'
                    : 'border-rule bg-surface text-muted hover:border-ink/40 hover:text-ink'
                }`}
              >
                {domain.name}
              </button>
            );
          })}
        </div>

        <div className="mt-5 grid gap-6 lg:grid-cols-12">
          <div className="rounded-xl border border-rule bg-surface p-5 lg:col-span-5">
            <div className="border-b border-rule pb-3">
              <div className="font-mono text-xs font-semibold text-forest">{activeDomainObj?.name}</div>
              <p className="mt-1 text-xs text-muted">{activeDomainObj?.tagline}</p>
            </div>

            <div className="mt-4 space-y-2">
              {visibleSkills.map((skill) => {
                const isSelected = activeSkill?.id === skill.id;
                return (
                  <button
                    key={skill.id}
                    type="button"
                    onClick={() => setSelectedSkillId(skill.id)}
                    className={`w-full rounded-lg border px-3.5 py-2.5 text-left transition ${
                      isSelected
                        ? 'border-forest bg-forest-soft/70'
                        : 'border-rule bg-paper/50 hover:border-ink/35'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-sm font-semibold text-ink">{skill.name}</span>
                      <span className="font-mono text-[11px] text-rust">
                        {skill.proofIds.length} proof{skill.proofIds.length > 1 ? 's' : ''}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted">{skill.levelNote}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-rule bg-surface p-5 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule pb-3">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  Verified Proof For
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{activeSkill?.name}</h3>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-forest-soft px-3 py-1 font-mono text-[11px] font-medium text-forest">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Evidence-Backed
              </span>
            </div>

            <div className="mt-4 space-y-3">
              {activeProofs.map((proof) => {
                const targetRoute = mapAnchorToRoute(proof.anchorId);
                return (
                  <div
                    key={proof.id}
                    className="rounded-lg border border-rule bg-paper/60 p-4 transition hover:border-forest/50"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`rounded border px-2 py-0.5 font-mono text-[10px] font-semibold ${
                          KIND_STYLES[proof.kind]
                        }`}
                      >
                        {proof.kind}
                      </span>
                      <div className="flex items-center gap-3">
                        {proof.photoSrc && (
                          <button
                            type="button"
                            onClick={() =>
                              onOpenLightbox(
                                [
                                  {
                                    src: proof.photoSrc!,
                                    alt: proof.title,
                                    caption: `${proof.title}: ${proof.detail}`,
                                    location: 'Verified Evidence',
                                    date: '2026',
                                  },
                                ],
                                0,
                              )
                            }
                            className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-ochre hover:underline"
                          >
                            <ImageIcon className="h-3.5 w-3.5" />
                            View Photo
                          </button>
                        )}
                        {proof.url && (
                          <a
                            href={proof.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-[11px] font-medium text-forest hover:underline"
                          >
                            Open Artifact
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                        {proof.anchorId && (
                          <a
                            href={`#/${targetRoute === 'home' ? '' : targetRoute}`}
                            onClick={(e) => {
                              if (onNavigate) {
                                e.preventDefault();
                                window.location.hash = targetRoute === 'home' ? '/' : `/${targetRoute}`;
                                onNavigate(targetRoute);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }
                            }}
                            className="inline-flex items-center gap-0.5 font-mono text-[11px] text-muted hover:text-ink"
                          >
                            Open Section
                            <ArrowDownRight className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h4 className="mt-2 font-display text-sm font-bold text-ink">{proof.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{proof.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
