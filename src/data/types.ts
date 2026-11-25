export interface PhotoItem {
  src: string;
  alt: string;
  caption: string;
  location: string;
  date: string;
}

export interface InstitutionalMilestone {
  id: string;
  badge: string;
  tier: 'international' | 'institutional' | 'national' | 'research';
  title: string;
  organization: string;
  date: string;
  location: string;
  outcomeMetric: string;
  summary: string;
  whyItMatters: string;
  externalLinks: { label: string; url: string }[];
  photos: PhotoItem[];
}

export type HackathonTag =
  | 'Wins & Podiums'
  | 'In-Person & Whiteboard'
  | 'Virtual & Global Teams'
  | 'Blockchain & Web3';

export interface HackathonEntry {
  id: string;
  badge: string;
  title: string;
  project: string;
  mode: 'In-Person' | 'Virtual / Online' | 'Hybrid';
  date: string;
  location: string;
  outcome: string;
  tags: HackathonTag[];
  softSkills: string[];
  teamAndMentors: string;
  story: string;
  hardDecision: string;
  gitProof: {
    repo: string;
    window: string;
    highlights: string[];
    url?: string;
    liveUrl?: string;
    postUrl?: string;
  };
  photos: PhotoItem[];
}

export interface Web3BuildEntry {
  id: string;
  name: string;
  chain: string;
  date: string;
  summary: string;
  securityOrContractNote: string;
  commitWindow: string;
  repoUrl?: string;
  liveUrl?: string;
  writeupUrl?: string;
  photo?: PhotoItem;
}

export type ProofKind =
  | 'REPO'
  | 'WRITEUP'
  | 'TELEMETRY'
  | 'LIVE DEMO'
  | 'EVENT PHOTO'
  | 'CERT'
  | 'LINKEDIN';

export interface ProofArtifact {
  id: string;
  title: string;
  kind: ProofKind;
  detail: string;
  url?: string;
  anchorId?: string;
  photoSrc?: string;
}

export interface SkillNode {
  id: string;
  name: string;
  domainId: string;
  levelNote: string;
  proofIds: string[];
}

export interface SkillDomain {
  id: string;
  name: string;
  tagline: string;
}

export interface ArchitectureStage {
  step: string;
  label: string;
  component: string;
  rationale: string;
}

export interface FlagshipDossier {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  venue: string;
  timeframe: string;
  problem: string;
  decision: string;
  whyItMatters: string;
  metrics: { label: string; value: string }[];
  pipeline: ArchitectureStage[];
  links: { label: string; url: string }[];
  photos: PhotoItem[];
}

export interface FieldStory {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  context: string;
  whatHappened: string;
  takeaway: string;
  softSkills: string[];
  photos: PhotoItem[];
  links: { label: string; url: string }[];
}

export type BuildCategory = 'Security & DFIR' | 'Hardware & Robotics' | 'Full-Stack & Web3';

export interface BuildProject {
  id: string;
  name: string;
  category: BuildCategory;
  venue: string;
  date: string;
  summary: string;
  architectureNote: string;
  stack: string[];
  outcome?: string;
  repoUrl?: string;
  liveUrl?: string;
  postUrl?: string;
  photos?: PhotoItem[];
}

export interface WriteupItem {
  id: string;
  kind: 'Article' | 'Technical Breakdown' | 'CTF Writeup' | 'Field Note';
  platform: 'Medium' | 'Site Dossier' | 'LinkedIn';
  title: string;
  date: string;
  tags: string[];
  summary: string;
  excerpt?: string;
  url?: string;
  fullMarkdownSections?: { heading: string; body: string; code?: string }[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  url?: string;
  note: string;
}

export type CtfChallengeType =
  | 'Forensics & DFIR'
  | 'Hardware & PCB'
  | 'OSINT'
  | 'Crypto'
  | 'Web & Pwn'
  | 'SecOps & Threat Hunting'
  | 'Infra & Challenge Authoring';

export interface CtfRecord {
  id: string;
  name: string;
  date: string;
  teamOrRole: string;
  format: 'On-Site Finals' | 'In-Person' | 'Online' | 'Organizer / Author';
  outcome: string;
  challengeTypes: CtfChallengeType[];
  challengesAndWork: string;
  proofUrl?: string;
  proofLabel?: string;
  anchorId?: string;
}

export type WorkTag =
  | 'Security & DFIR'
  | 'SW Dev'
  | 'AI / RAG'
  | 'Web3'
  | 'Hackathons'
  | 'CTFs'
  | 'Hardware & OT'
  | 'Academia';

export interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  venue: string;
  outcome?: string;
  tags: WorkTag[];
  featured?: boolean;
  summary: string;
  technicalArchitecture: string;
  tradeOff?: string;
  softSkills?: string[];
  stack: string[];
  gitProof?: string;
  repoUrl?: string;
  liveUrl?: string;
  writeupUrl?: string;
  postUrl?: string;
  photo?: PhotoItem;
}
