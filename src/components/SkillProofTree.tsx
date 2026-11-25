import { RotateCcw } from 'lucide-react';
import {
  HARD_SKILLS,
  PORTFOLIO_ENTRIES,
  SOFT_OPS_SKILLS,
  SkillNode,
  SkillNodeId,
} from '../data/portfolioEntries';

interface SkillProofTreeProps {
  selectedSkill: SkillNodeId | null;
  onSelectSkill: (skill: SkillNodeId | null) => void;
}

function SkillButton({
  node,
  active,
  count,
  onClick,
}: {
  node: SkillNode;
  active: boolean;
  count: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`w-full rounded-lg border p-3.5 text-left transition ${
        active
          ? 'border-gold bg-navy-secondary text-white shadow-sm'
          : 'border-line bg-white text-navy hover:border-gold'
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-display text-sm font-semibold">{node.id}</span>
        <span
          className={`shrink-0 rounded px-2 py-0.5 font-mono text-[11px] font-medium ${
            active ? 'bg-gold/20 text-gold' : 'bg-slatebg text-muted'
          }`}
        >
          {count} {count === 1 ? 'proof' : 'proofs'}
        </span>
      </div>
      <p className={`mt-1 text-xs leading-relaxed ${active ? 'text-slate-200' : 'text-muted'}`}>
        {node.blurb}
      </p>
    </button>
  );
}

export function SkillProofTree({ selectedSkill, onSelectSkill }: SkillProofTreeProps) {
  const countFor = (id: SkillNodeId) =>
    PORTFOLIO_ENTRIES.filter((e) => e.skillsProven.includes(id)).length;

  return (
    <section id="skills" className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-line bg-slatebg p-5 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-muted">
                Interactive Skill Proof Tree
              </span>
              <h2 className="mt-0.5 font-display text-xl font-bold text-navy sm:text-2xl">
                Every Claim Mapped to Shipped Evidence
              </h2>
              <p className="mt-1 text-sm text-body">
                Select any hard or operational skill below to filter the archive to verified entries.
              </p>
            </div>

            {selectedSkill && (
              <button
                type="button"
                onClick={() => onSelectSkill(null)}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-navy bg-white px-3 py-1.5 font-mono text-xs font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Clear Filter
              </button>
            )}
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <div className="mb-2.5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-navy">
                <span className="h-2 w-2 rounded-full bg-navy" />
                <span>Column A · Hard Engineering &amp; Security</span>
              </div>
              <div className="space-y-2.5">
                {HARD_SKILLS.map((node) => (
                  <SkillButton
                    key={node.id}
                    node={node}
                    active={selectedSkill === node.id}
                    count={countFor(node.id)}
                    onClick={() => onSelectSkill(selectedSkill === node.id ? null : node.id)}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2.5 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-navy">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span>Column B · Soft &amp; Live Operations</span>
              </div>
              <div className="space-y-2.5">
                {SOFT_OPS_SKILLS.map((node) => (
                  <SkillButton
                    key={node.id}
                    node={node}
                    active={selectedSkill === node.id}
                    count={countFor(node.id)}
                    onClick={() => onSelectSkill(selectedSkill === node.id ? null : node.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
