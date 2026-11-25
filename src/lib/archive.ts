import { PhotoItem, WorkItem, WorkTag, WriteupItem } from '../data/types';
import { WORK_ITEMS } from '../data/work';
import { WRITEUPS } from '../data/writeups';
import { parseFrontmatter } from './markdown';

export type ArchiveCategory =
  | 'Projects'
  | 'Hackathons'
  | 'CTF Writeups'
  | 'Hardware / IoT'
  | 'DFIR'
  | 'Academia';

export const ARCHIVE_FILTERS: ('All' | ArchiveCategory)[] = [
  'All',
  'Projects',
  'Hackathons',
  'CTF Writeups',
  'Hardware / IoT',
  'DFIR',
  'Academia',
];

export const PINNED_SLUGS = [
  'l7-honeypot-engine',
  'midnight-flag-france',
  'sophix-proplr',
] as const;

export interface ArchiveEntry {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  venue: string;
  award?: string;
  categories: ArchiveCategory[];
  tags: string[]; // capped at 3-4 on cards
  summary: string;
  markdownBody: string;
  photo?: PhotoItem;
  referencePhoto?: PhotoItem;
  repoUrl?: string;
  liveUrl?: string;
  writeupUrl?: string;
  pdfUrl?: string;
  postUrl?: string;
  gitProof?: string;
  pinned?: boolean;
}

function mapWorkTagsToCategories(tags: WorkTag[], id: string): ArchiveCategory[] {
  const cats = new Set<ArchiveCategory>();
  if (tags.includes('Hackathons')) cats.add('Hackathons');
  if (tags.includes('CTFs')) cats.add('CTF Writeups');
  if (tags.includes('Hardware & OT')) cats.add('Hardware / IoT');
  if (tags.includes('Security & DFIR')) cats.add('DFIR');
  if (tags.includes('Academia')) cats.add('Academia');
  if (
    tags.includes('SW Dev') ||
    tags.includes('Web3') ||
    tags.includes('AI / RAG') ||
    id === 'l7-honeypot-engine'
  ) {
    cats.add('Projects');
  }
  if (cats.size === 0) cats.add('Projects');
  return Array.from(cats);
}

function buildWorkMarkdown(item: WorkItem, extraWriteup?: WriteupItem): string {
  const parts: string[] = [
    `## Problem & Context\n\n${item.summary}`,
    `## Technical Architecture\n\n${item.technicalArchitecture}`,
  ];
  if (item.tradeOff) {
    parts.push(`## Hard Trade-Off / Pivot\n\n${item.tradeOff}`);
  }
  if (extraWriteup?.fullMarkdownSections?.length) {
    parts.push('## Deep-Dive Writeup Notes');
    for (const sec of extraWriteup.fullMarkdownSections) {
      parts.push(`### ${sec.heading}\n\n${sec.body}`);
      if (sec.code) {
        parts.push(`\`\`\`text\n${sec.code}\n\`\`\``);
      }
    }
  }
  if (item.softSkills?.length) {
    parts.push(`## Execution & Leadership\n\n${item.softSkills.map((s) => `- ${s}`).join('\n')}`);
  }
  if (item.gitProof) {
    parts.push(`## Verification Artifact\n\n\`${item.gitProof}\``);
  }
  return parts.join('\n\n');
}

function workItemToEntry(item: WorkItem): ArchiveEntry {
  const extraWriteup =
    item.id === 'l7-honeypot-engine'
      ? WRITEUPS.find((w) => w.id === 'raw-logs-to-ttps')
      : undefined;

  return {
    slug: item.id,
    title: item.title,
    subtitle: item.subtitle,
    date: item.date,
    venue: item.venue,
    award: item.outcome,
    categories: mapWorkTagsToCategories(item.tags, item.id),
    tags: item.stack.slice(0, 4),
    summary: item.summary,
    markdownBody: buildWorkMarkdown(item, extraWriteup),
    photo: item.photo,
    referencePhoto: item.referencePhoto,
    repoUrl: item.repoUrl,
    liveUrl: item.liveUrl,
    writeupUrl: item.writeupUrl,
    postUrl: item.postUrl,
    gitProof: item.gitProof,
    pinned: (PINNED_SLUGS as readonly string[]).includes(item.id),
  };
}

function mapWriteupToCategories(w: WriteupItem): ArchiveCategory[] {
  const cats = new Set<ArchiveCategory>();
  if (w.kind === 'CTF Writeup' || w.tags.some((t) => /ctf|midnight|srdnlen|uoft|0xl4ugh|tryhackme/i.test(t))) {
    cats.add('CTF Writeups');
  }
  if (w.tags.some((t) => /hardware|fault|ch341a|router|ot\/ics|modbus|drm/i.test(t))) {
    cats.add('Hardware / IoT');
  }
  if (w.tags.some((t) => /forensics|dfir|git internals|tamuctf|image analysis|threat intel|osint/i.test(t))) {
    cats.add('DFIR');
  }
  if (w.tags.some((t) => /midnight flag|france/i.test(t))) {
    cats.add('Academia');
  }
  if (cats.size === 0) cats.add('CTF Writeups');
  return Array.from(cats);
}

function writeupToEntry(w: WriteupItem): ArchiveEntry {
  const parts: string[] = [];
  if (w.excerpt) {
    parts.push(`> ${w.excerpt.replace(/^"|"$/g, '')}`);
  }
  parts.push(`## Overview\n\n${w.summary}`);
  if (w.fullMarkdownSections?.length) {
    for (const sec of w.fullMarkdownSections) {
      parts.push(`## ${sec.heading}\n\n${sec.body}`);
      if (sec.code) {
        parts.push(`\`\`\`text\n${sec.code}\n\`\`\``);
      }
    }
  }
  const isPdf = Boolean(w.url?.endsWith('.pdf'));
  return {
    slug: w.id,
    title: w.title,
    subtitle: `${w.kind} · ${w.platform}`,
    date: w.date,
    venue: `${w.platform} (${w.kind})`,
    categories: mapWriteupToCategories(w),
    tags: w.tags.slice(0, 4),
    summary: w.summary,
    markdownBody: parts.join('\n\n'),
    pdfUrl: isPdf ? w.url : undefined,
    writeupUrl: !isPdf ? w.url : undefined,
  };
}

// Automatically ingest drop-in Markdown files placed under src/content/entries/*.md
const mdModules = import.meta.glob('../content/entries/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function loadMarkdownDropIns(): ArchiveEntry[] {
  const entries: ArchiveEntry[] = [];
  for (const [path, raw] of Object.entries(mdModules)) {
    const { frontmatter, body } = parseFrontmatter(raw);
    if (typeof frontmatter.title !== 'string' || !frontmatter.title) continue;
    const slug = path.split('/').pop()?.replace(/\.md$/, '') || frontmatter.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const categoriesRaw = Array.isArray(frontmatter.categories)
      ? frontmatter.categories
      : typeof frontmatter.category === 'string'
        ? [frontmatter.category]
        : ['Projects'];
    const tagsRaw = Array.isArray(frontmatter.tags) ? frontmatter.tags : [];
    const photoSrc = typeof frontmatter.photo === 'string' ? frontmatter.photo : undefined;

    entries.push({
      slug,
      title: frontmatter.title,
      subtitle: typeof frontmatter.subtitle === 'string' ? frontmatter.subtitle : String(frontmatter.venue ?? 'Portfolio Entry'),
      date: typeof frontmatter.date === 'string' ? frontmatter.date : '2026',
      venue: typeof frontmatter.venue === 'string' ? frontmatter.venue : 'Independent',
      award: typeof frontmatter.award === 'string' ? frontmatter.award : undefined,
      categories: categoriesRaw as ArchiveCategory[],
      tags: tagsRaw.slice(0, 4),
      summary: typeof frontmatter.summary === 'string' ? frontmatter.summary : body.split(/\r?\n\r?\n/)[0]?.slice(0, 180) ?? '',
      markdownBody: body,
      photo: photoSrc
        ? {
            src: photoSrc,
            alt: frontmatter.title,
            caption: typeof frontmatter.caption === 'string' ? frontmatter.caption : frontmatter.title,
            location: typeof frontmatter.venue === 'string' ? frontmatter.venue : '',
            date: typeof frontmatter.date === 'string' ? frontmatter.date : '',
          }
        : undefined,
      repoUrl: typeof frontmatter.repo === 'string' ? frontmatter.repo : undefined,
      liveUrl: typeof frontmatter.live === 'string' ? frontmatter.live : undefined,
      writeupUrl: typeof frontmatter.writeup === 'string' ? frontmatter.writeup : undefined,
      pdfUrl: typeof frontmatter.pdf === 'string' ? frontmatter.pdf : undefined,
      postUrl: typeof frontmatter.post === 'string' ? frontmatter.post : undefined,
      pinned: frontmatter.pinned === true,
    });
  }
  return entries;
}

const workEntries = WORK_ITEMS.map(workItemToEntry);
const writeupEntries = WRITEUPS.filter((w) => w.id !== 'raw-logs-to-ttps').map(writeupToEntry);
const dropInEntries = loadMarkdownDropIns();

const seenSlugs = new Set<string>();
export const ALL_ENTRIES: ArchiveEntry[] = [...dropInEntries, ...workEntries, ...writeupEntries].filter(
  (entry) => {
    if (seenSlugs.has(entry.slug)) return false;
    seenSlugs.add(entry.slug);
    return true;
  }
);

export const PINNED_ENTRIES: ArchiveEntry[] = PINNED_SLUGS.map((slug) =>
  ALL_ENTRIES.find((e) => e.slug === slug)
).filter((e): e is ArchiveEntry => Boolean(e));

export const ARCHIVE_ENTRIES: ArchiveEntry[] = ALL_ENTRIES.filter(
  (e) => !(PINNED_SLUGS as readonly string[]).includes(e.slug)
);
