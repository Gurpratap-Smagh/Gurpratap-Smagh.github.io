import { FieldStory } from './types';

export const FIELD_STORIES: FieldStory[] = [
  {
    id: 'story-france-pitch',
    tag: 'INSTITUTIONAL ADVOCACY · INTERNATIONAL FINALS',
    title: 'Convincing Humber Polytechnic to Fund a Student to France',
    subtitle: 'Turning online CTF credibility into institutional travel sponsorship and meeting THEM?! offline.',
    context:
      'After trialing into top-50 global CTF team THEM?! via a solo UofTCTF run and web series, we placed 8th out of 756+ teams in the Midnight Flag qualifiers, earning one of 17 seats at ESNA de Bretagne in Rennes, France. I was the only Canadian student on the roster, and self-funding international travel + logic analyzer logistics ($2,873 budget) on a student schedule was not realistic.',
    whatHappened:
      'Instead of treating it as a hobby trip, I wrote a formal sponsorship brief mapping the competition\'s backing (ESNA / DGSE), Canadian institutional visibility, and technical deliverables (a post-event debrief on side-channel analysis and fault injection). Working with Humber FAST leadership and advisors Melanie Chai and Crystal Bhikha, I secured full institutional sponsorship plus the Employability Experience Fund (EEF) scholarship, navigated Schengen visa logistics, and flew to Rennes. Inside an arena where all AI tools were banned, meeting teammates I had only ever known on Discord changed how we operated: no one logged off when hardware or OSINT problems stalled at hour twelve, finishing 9th in the student division and 14th overall.',
    takeaway:
      'Technical skill opens the door; clear institutional framing, budget discipline, and showing up in person turn a solo effort into something your college backs on the global stage.',
    softSkills: ['Executive Sponsorship Pitching', 'Budget & Visa Logistics', 'In-Person Cross-Border Teamwork', 'AI-Free Persistence'],
    photos: [
      {
        src: '/photos/france/hardware-bench-humber.jpg',
        alt: 'Working in Humber Polytechnic gear at ESNA Bretagne',
        caption: 'At the competition bench in Rennes wearing Humber Polytechnic gear.',
        location: 'ESNA de Bretagne',
        date: 'Jun 13, 2026',
      },
      {
        src: '/photos/france/ctf-table-grind.jpg',
        alt: 'Collaborating face-to-face with THEM?! teammate in France',
        caption: 'First time solving side-by-side at the same table instead of across timezones on Discord.',
        location: 'Rennes, France',
        date: 'Jun 14, 2026',
      },
    ],
    links: [
      { label: 'EEF Scholarship Post', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7481873888939806720' },
      { label: 'France Finals Qualification Post', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7441651676404572160' },
    ],
  },
  {
    id: 'story-conflict-live-infra',
    tag: 'CRISIS LEADERSHIP · LIVE OPS FOR 1,000+ PLAYERS',
    title: 'Mediating a Lead Dispute While Recovering Compromised CTF Infra',
    subtitle: 'Holding zero formal authority while keeping a 1,000+ participant competition alive.',
    context:
      'Running THEM?!CTF 2026 (40+ challenges, $6,000+ prize pool, 1,000+ participants) meant real-time operational pressure. Days before launch, forensic checks on our GCP instance surfaced unauthorized logins (auth.log, wtmp), staged /tmp SSH sockets, a Flask admin-escalation backdoor, and dumped challenge databases. Simultaneously, high-stress infra failures triggered sharp friction between two senior team leads.',
    whatHappened:
      'Without holding a formal management title, I stepped in on both fronts: first de-escalating the conflict between the two leads by refocusing the conversation on concrete recovery steps rather than blame, then executing disk-level forensic checks across /mnt/ctfdisk, documenting the exact compromise timeline, declaring Total Loss so nothing went live contaminated, fixing VPN and server configs mid-event, and authoring the post-incident configuration playbook the team adopted going forward.',
    takeaway:
      'When production breaks with 1,000 users watching, ego destroys uptime faster than bugs do. Calm triage, honest incident boundaries, and written playbooks keep teams intact.',
    softSkills: ['Conflict Mediation Under Pressure', 'Leading Without Authority', 'Live Incident Triage', 'Post-Incident Playbook Authoring'],
    photos: [
      {
        src: '/photos/france/esna-group-finale.jpg',
        alt: 'Midnight Flag CTF finalist teams inside the ESNA Bretagne amphitheatre',
        caption: 'Inside the ESNA Bretagne amphitheatre with the Midnight Flag finalist cohort.',
        location: 'ESNA Bretagne',
        date: 'Jun 14, 2026',
      },
    ],
    links: [
      { label: 'THEM?!CTF Forensics Challenge Launch', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7466259993957421059' },
    ],
  },
  {
    id: 'story-locker-lockout',
    tag: 'OWNING FAILURES · HUMAN DISCERNMENT OVER BLIND AUTOMATION',
    title: 'When My AI Agent Hardened Me Out of a Nuclear Decoy in a School Locker',
    subtitle: 'Reconstructing corrupted SD partitions by hand and admitting what broke in V1.',
    context:
      'My first ICS honeypot was not hosted in a pristine rack: it was a Raspberry Pi disguised as a CANDU Siemens S7-1200 controller sitting inside my school locker on a mobile hotspot, connected via AWS VPS reverse SSH tunnel.',
    whatHappened:
      'First, a Claude hardening agent secured the firewall so aggressively that it closed every inbound port and locked out my own management SSH. When I pulled the SD card to inspect logs, Windows corrupted the partition table during an automatic disk check. Instead of reflashing, I reconstructed partition offsets and hex-carved the raw telemetry back out. Weeks later, a DIY buck converter\'s voltage ripple browned out the SD card mid-write and killed SSH cleanly while the Pi kept pinging. Even more importantly, V1 taught me that timestamp correlation fails over SSH tunnel jitter and naive Copilot/AI log triage produces false positives. Publishing those failures openly caught the attention of security leaders like Mark Sayewich (Guidewire) and Karan Sajnani (R.U.D.R.A) and directly drove the clean V2 WireGuard + conntrack + Elastic correlation engine.',
    takeaway:
      'Automation multiplies whatever discipline or blind spot you already have. Never reflash a broken evidence disk, and never hide architectural flaws in writeups.',
    softSkills: ['Intellectual Honesty', 'Executive-to-Engineer Communication', 'Root-Cause Forensics', 'Iterative Systems Design'],
    photos: [
      {
        src: '/photos/omnipulse/atrium-showcase-pitch.jpg',
        alt: 'Walking visitors through the honeypot architecture',
        caption: 'Explaining V1 failures and V2 correlation mechanics to faculty and visitors.',
        location: 'Humber Polytechnic Atrium',
        date: 'Nov 4, 2026',
      },
    ],
    links: [
      { label: 'AI Hardening Lockout Post', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7439187001834127360' },
    ],
  },
  {
    id: 'story-mentorship-and-business-logic',
    tag: 'CROSS-DISCIPLINARY EXECUTION · MENTORSHIP & AUDITING',
    title: 'Mentoring First-Timers, Pitching C-Suite Mentors & Auditing Claims With Public Data',
    subtitle: 'Translating security edge cases into business logic across hackathons and independent audits.',
    context:
      'Great engineering fails when it cannot survive a 3-minute conversation with non-technical stakeholders or when first-time teammates freeze under deadline pressure.',
    whatHappened:
      'Across multiple events, I leaned into the human side of shipping: co-leading and mentoring first-time hackathon builders at IBM Z x Sheridan (SafeScan, Top 20 of 200); teaming up with a medical student and engineers to clinch 1st Place at Humber\'s AchievaFlow Data Drive Hackathon; refining business-risk threat narratives with C-suite mentors at Brampton SecOps (3rd Place); and independently cross-referencing CRA T3010 charity filings (119264927RR0001) against public hospital foundation press claims to pinpoint pledge-to-cash gaps and donor-counter UX failures.',
    takeaway:
      'Whether debugging a founder\'s business logic, mentoring someone through their first pull request, or auditing public financial filings, clear thinking beats jargon every time.',
    softSkills: ['Mentoring First-Time Builders', 'Threat-to-Business Translation', 'Cross-Disciplinary Collaboration', 'OSINT & Financial Due Diligence'],
    photos: [
      {
        src: '/photos/bramsec/podium-3rd-place-check.jpg',
        alt: '3rd Place podium ceremony at Brampton SecOps',
        caption: 'Standing with the SupplyChek team, City of Brampton, and Rogers Cybersecure Catalyst mentors.',
        location: 'Brampton Innovation District',
        date: 'Sep 2026',
      },
      {
        src: '/photos/bramsec/table-build-session.jpg',
        alt: 'Table build sprint at Brampton SecOps',
        caption: 'Mid-sprint coordination turning threat model diagrams into working WebAuthn code.',
        location: 'Brampton SecOps',
        date: 'Sep 2026',
      },
    ],
    links: [
      { label: 'SafeScan Team & Mentorship Post', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7460019024597475328' },
      { label: 'AchievaFlow 1st Place Post', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7386165642455851009' },
    ],
  },
  {
    id: 'story-relentless-reps',
    tag: 'CONSISTENCY · TRYHACKME DAY 1 TO GIAC GFACT',
    title: '200+ Daily Labs, Last-Hour Crypto Clutches & No-Excuse Fundamentals',
    subtitle: 'Compounding daily reps from zero CTF background to CyberStart Top Performer, GFACT, and #46 globally.',
    context:
      'In mid-2025, my practical security background was Intro to Cybersecurity rooms and basic TryHackMe streaks. No prior CTF circuit history, no formal security co-op.',
    whatHappened:
      'Starting from a CyberStart Canada flyer picked up at a BramHacks booth in November 2025, I chained 200+ consecutive daily TryHackMe sessions (completing the 43h 53m Introductory Pathway), earned ISC2 CC and Google Cybersecurity certs, placed 4th in the CyberStart Canada CTF as a Top Performer to win a SANS GFACT scholarship (earned GIAC GFACT in Oct 2026), and applied every lab directly to harden my own apps (GiveHub, Coursify). That consistency carried into solo UofTCTF solves, earning a spot on THEM?!, clutching a custom polynomial nonce exploit in the final hour for 5th place (top 0.58%), helping hit 7th of 8,747 teams in picoCTF 2026, and placing 20th of 433 in Srdnlen CTF Quals.',
    takeaway:
      'Daily unglamorous reps beat talent bursts. Every streak day builds the pattern recognition you lean on during the last hour of a competition.',
    softSkills: ['Relentless Daily Consistency', 'Self-Directed Learning', 'High-Pressure Clutch Execution'],
    photos: [
      {
        src: '/photos/n3summit/n3-interview-sycodal.jpg',
        alt: 'Ambassador interview at NGen N3 Summit',
        caption: 'Representing Humber and Youth Culture Inc. across advanced manufacturing and cyber booths.',
        location: 'NGen N3 Summit',
        date: 'Apr 2026',
      },
    ],
    links: [
      { label: 'Last-Hour Crypto Clutch Post', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7431816781125758976' },
      { label: 'GiveHub & Coursify Hardening Post', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7412686999859433473' },
    ],
  },
];
