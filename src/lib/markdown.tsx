import React from 'react';

export interface ParsedMarkdown {
  frontmatter: Record<string, string | string[] | boolean>;
  body: string;
}

export function parseFrontmatter(raw: string): ParsedMarkdown {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { frontmatter: {}, body: raw.trim() };
  }
  const fmBlock = match[1];
  const body = match[2].trim();
  const frontmatter: Record<string, string | string[] | boolean> = {};

  for (const line of fmBlock.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const colonIdx = trimmed.indexOf(':');
    if (colonIdx === -1) continue;
    const key = trimmed.slice(0, colonIdx).trim();
    const val = trimmed.slice(colonIdx + 1).trim();

    if (val === 'true') {
      frontmatter[key] = true;
    } else if (val === 'false') {
      frontmatter[key] = false;
    } else if (val.startsWith('[') && val.endsWith(']')) {
      frontmatter[key] = val
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
        .filter(Boolean);
    } else {
      frontmatter[key] = val.replace(/^['"]|['"]$/g, '');
    }
  }

  return { frontmatter, body };
}

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const pattern = /(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith('`') && token.endsWith('`')) {
      nodes.push(
        <code
          key={key++}
          className="rounded border border-white/10 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[12px] text-gold-badge"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('**') && token.endsWith('**')) {
      nodes.push(
        <strong key={key++} className="font-semibold text-ink">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('[')) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        nodes.push(
          <a
            key={key++}
            href={linkMatch[2]}
            target="_blank"
            rel="noreferrer"
            className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-hover"
          >
            {linkMatch[1]}
          </a>
        );
      } else {
        nodes.push(token);
      }
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

export function MarkdownBody({ content }: { content: string }) {
  const blocks = content.split(/\r?\n\r?\n/);

  return (
    <div className="space-y-4 text-[15px] leading-relaxed text-muted">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith('```')) {
          const lines = trimmed.split(/\r?\n/);
          const codeBody = lines.slice(1, lines[lines.length - 1].startsWith('```') ? -1 : undefined).join('\n');
          return (
            <pre
              key={idx}
              className="overflow-x-auto rounded-lg border border-white/10 bg-[#050B16] p-4 font-mono text-xs leading-relaxed text-gold-badge"
            >
              <code>{codeBody}</code>
            </pre>
          );
        }

        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={idx} className="pt-3 font-display text-xl font-semibold text-ink">
              {trimmed.slice(3)}
            </h2>
          );
        }

        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={idx} className="pt-2 font-display text-lg font-semibold text-gold-badge">
              {trimmed.slice(4)}
            </h3>
          );
        }

        if (trimmed.startsWith('> ')) {
          const quoteText = trimmed
            .split(/\r?\n/)
            .map((l) => l.replace(/^>\s?/, ''))
            .join(' ');
          return (
            <blockquote
              key={idx}
              className="rounded-r-lg border-l-2 border-gold bg-white/[0.03] px-4 py-3 font-mono text-xs leading-relaxed text-ink"
            >
              {renderInline(quoteText)}
            </blockquote>
          );
        }

        const lines = trimmed.split(/\r?\n/);
        if (lines.every((l) => l.trim().startsWith('- '))) {
          return (
            <ul key={idx} className="space-y-2 pl-4">
              {lines.map((l, li) => (
                <li key={li} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{renderInline(l.trim().slice(2))}</span>
                </li>
              ))}
            </ul>
          );
        }

        return <p key={idx}>{renderInline(trimmed.replace(/\r?\n/g, ' '))}</p>;
      })}
    </div>
  );
}
