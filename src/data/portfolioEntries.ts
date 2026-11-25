export type Pillar = 'Security' | 'Engineering' | 'AI' | 'Ops & Strategy';

export const PILLARS: ('All' | Pillar)[] = [
  'All',
  'Security',
  'Engineering',
  'AI',
  'Ops & Strategy',
];

export type SkillNodeId =
  | 'DFIR & Forensics'
  | 'Hardware & IoT'
  | 'Threat Infra & Honeypots'
  | 'Full-Stack / AI / Blockchain'
  | 'Crisis Regulation'
  | 'Live Incident Triage'
  | 'Unscripted Pitching'
  | 'Team Alignment & Ops';

export interface SkillNode {
  id: SkillNodeId;
  group: 'hard' | 'soft';
  blurb: string;
}

export const HARD_SKILLS: SkillNode[] = [
  {
    id: 'DFIR & Forensics',
    group: 'hard',
    blurb: 'Memory/disk carving, Windows Registry & Chronicle YARA-L, nested binary triage.',
  },
  {
    id: 'Hardware & IoT',
    group: 'hard',
    blurb: 'CH341A EEPROM readout, fault injection, FPGA UART MFA, Raspberry Pi sensors, ROS2.',
  },
  {
    id: 'Threat Infra & Honeypots',
    group: 'hard',
    blurb: 'Zero-trust edge telemetry (WireGuard + Fluent Bit + Elastic), CTFd/VPN hardening.',
  },
  {
    id: 'Full-Stack / AI / Blockchain',
    group: 'hard',
    blurb: 'Google Cloud ADK + SPIFFE, WebAuthn + PassKit, Foundry/Slither, deterministic RAG.',
  },
];

export const SOFT_OPS_SKILLS: SkillNode[] = [
  {
    id: 'Crisis Regulation',
    group: 'soft',
    blurb: 'De-escalating disputes under live load, owning V1 failures publicly, 48h patch runs.',
  },
  {
    id: 'Live Incident Triage',
    group: 'soft',
    blurb: 'Containing compromised GCP hosts, causal alert routing, deterministic kill-chain calls.',
  },
  {
    id: 'Unscripted Pitching',
    group: 'soft',
    blurb: 'Solo City Hall pitches (200+ crowd), C-suite Q&A, FAST institutional funding briefs.',
  },
  {
    id: 'Team Alignment & Ops',
    group: 'soft',
    blurb: 'Co-leading 5 builders, mentoring first-timers, async Canada-Africa merges, playbooks.',
  },
];

export interface MediaItem {
  src: string;
  alt: string;
  caption: string;
}

export interface PortfolioEntry {
  id: string;
  title: string;
  date: string;
  venue: string;
  outcomeBadge: string;
  pillars: Pillar[];
  skillsProven: SkillNodeId[];
  thumbnail?: string;
  thumbLabel?: string;
  summary: string;
  mediaGallery: MediaItem[];
  technicalBreakdown: string;
  stack: string[];
  fieldNotes: string;
  links: {
    repo?: string;
    writeup?: string;
    demo?: string;
    pdf?: string;
    post?: string;
  };
  featuredInReel?: boolean;
}

export const PORTFOLIO_ENTRIES: PortfolioEntry[] = [
  {
    id: 'supplychek-secops',
    title: 'SupplyChek: Zero-Trust Freight Instruction Signing',
    date: 'Sep 25 to 27, 2026',
    venue: 'Brampton SecOps Hackathon (Catalyst & TMU)',
    outcomeBadge: '3rd Place · $1,000',
    pillars: ['Security', 'Ops & Strategy'],
    skillsProven: [
      'Full-Stack / AI / Blockchain',
      'Unscripted Pitching',
      'Team Alignment & Ops',
    ],
    thumbnail: '/photos/bramsec/podium-3rd-place-check.jpg',
    summary:
      'Built hardware-bound WebAuthn passkey and Ed25519 cryptographic signing over SHA-256 dispatch mutations so spoofed delivery-change emails never reach drivers.',
    mediaGallery: [
      {
        src: '/photos/bramsec/podium-3rd-place-check.jpg',
        alt: 'SupplyChek 3rd Place $1,000 cheque ceremony at Brampton SecOps',
        caption: '3rd Place ($1,000) podium ceremony with City of Brampton and Rogers Cybersecure Catalyst.',
      },
      {
        src: '/photos/bramsec/supplychek-stage-pitch.jpg',
        alt: 'Presenting SupplyChek live on stage at Brampton SecOps',
        caption: 'Defending SupplyChek instruction-signing flow on stage.',
      },
      {
        src: '/photos/bramsec/whiteboard-threat-model.jpg',
        alt: 'Day 1 whiteboard threat modeling session for SupplyChek',
        caption: 'Day 1 whiteboard trust-boundary mapping before writing application code.',
      },
    ],
    technicalBreakdown:
      'Canonicalizes destination, carrier, and payout fields into a deterministic SHA-256 request digest.\n\nDispatch authorities sign the instruction hash itself using WebAuthn hardware-bound biometric passkeys and receive Ed25519 audit receipts before any change unlocks in the driver workflow (74 commits across 32 hours).',
    stack: ['TypeScript', 'Next.js', 'WebAuthn Passkeys', 'SHA-256', 'Ed25519'],
    fieldNotes:
      'By Day 2 evening we had a dozen features: paperwork OCR, compliance scoring, shadow-broker detection, Signal chat, and live tracking. Mentors Harman Grewal and Tracy Chong pushed us on scope bloat. After a 3-hour review, we killed 12 features and rebuilt the pitch around one sharp cryptographic choke point: authenticating the mutation, not just the user.',
    links: {},
    featuredInReel: true,
  },
  {
    id: 'midnight-flag-france',
    title: 'Midnight Flag CTF EXECUTION 2026 Finals (France)',
    date: 'Jun 12 to 16, 2026',
    venue: 'ESNA de Bretagne, Rennes/Bruz, France (THEM?!)',
    outcomeBadge: '9th Student / 14th Overall',
    pillars: ['Security', 'Ops & Strategy'],
    skillsProven: [
      'Hardware & IoT',
      'DFIR & Forensics',
      'Unscripted Pitching',
      'Team Alignment & Ops',
    ],
    thumbnail: '/photos/france/esna-group-finale.jpg',
    summary:
      'Represented Humber Polytechnic as the sole Canadian competitor on global team THEM?! in an AI-free arena across hardware fault injection, firmware extraction, and DFIR.',
    mediaGallery: [
      {
        src: '/photos/france/esna-group-finale.jpg',
        alt: 'Midnight Flag CTF finalist teams inside the ESNA Bretagne amphitheatre',
        caption: 'Finalist cohort inside the ESNA Bretagne amphitheatre.',
      },
      {
        src: '/photos/france/hardware-bench-humber.jpg',
        alt: 'Working in Humber Polytechnic shirt at the ESNA Bretagne bench',
        caption: 'On-site hardware and DFIR bench inside ESNA de Bretagne, Rennes.',
      },
      {
        src: '/photos/france/fault-injection-pcb.jpg',
        alt: 'Close-up of PCB probing and logic analyzer wiring in France',
        caption: 'EEPROM pinout probing and fault-injection target board.',
      },
    ],
    technicalBreakdown:
      'Qualified 8th out of 756+ teams into one of 17 seats in France, where all AI tools were banned inside the competition hall.\n\nExtracted EEPROM firmware via CH341A/UART pins, triggered manual voltage fault injection on target microcontrollers, recovered AES-CBC ransomware keys from Windows registry hives to decrypt Gestion.pdf.kiki, and chained cross-platform OSINT solves.',
    stack: ['EEPROM / CH341A', 'Voltage Fault Injection', 'Logic Analyzer', 'Windows Registry DFIR', 'OSINT'],
    fieldNotes:
      'A $2,873 international trip plus logic analyzer logistics was unrealistic out of pocket. I wrote a formal institutional brief connecting the ESNA/DGSE event to Humber visibility and side-channel research deliverables, securing FAST travel sponsorship plus the EEF scholarship with help from Melanie Chai and Crystal Bhikha. Meeting my THEM?! Discord teammates offline at hour twelve made nobody quit when challenges stalled.',
    links: {
      writeup: 'https://ctftime.org/team/387399',
      pdf: '/writeups/midnight-flag-voltage-fault-injection.pdf',
      post: 'https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7481873888939806720',
    },
    featuredInReel: true,
  },
  {
    id: 'l7-honeypot-engine',
    title: 'L7 Honeypot at Expo',
    date: 'Mar 2026 to Present',
    venue: 'OmniPulse Tech 2026 (Humber Barrett CTI)',
    outcomeBadge: '1,900+ Req / 3 Days (V2)',
    pillars: ['Security', 'Engineering'],
    skillsProven: [
      'Threat Infra & Honeypots',
      'DFIR & Forensics',
      'Hardware & IoT',
      'Live Incident Triage',
    ],
    thumbnail: '/photos/omnipulse/kibana-geoip-demo.jpg',
    summary:
      'I built a stateless Raspberry Pi sensor network that keeps zero SIEM ports exposed while flagging unmapped exploits via causal escalation scoring.',
    mediaGallery: [
      {
        src: '/photos/omnipulse/kibana-geoip-demo.jpg',
        alt: 'Presenting live Kibana GeoIP threat telemetry at OmniPulse Tech 2026',
        caption: 'Live Kibana GeoIP map running V2 correlation telemetry at Humber Barrett CTI.',
      },
    ],
    technicalBreakdown:
      'Edge Raspberry Pi decoys (Apache/PHP, S7Comm, Cowrie) perform zero local analysis. They stamp sensor.action and ship raw JSON over WireGuard and Fluent Bit into Elasticsearch.\n\nPython correlator.py polls via Point-in-Time cursor every 3s, strips empty GET SHA-256 (e3b0c442...), fingerprints exact HTTP header arrival order via MD5[:8], checks Shannon entropy (>4.8 bits/byte), and separates lure:* probes from primitive:* commands (primitive:id, primitive:whoami) to flag causal_escalation: true.',
    stack: ['Python', 'Elasticsearch', 'Kibana', 'WireGuard', 'Fluent Bit', 'SQLite', 'FastAPI'],
    fieldNotes:
      'V1 ran on a Raspberry Pi disguised as a CANDU Siemens S7-1200 PLC inside my school locker over a hotspot and reverse SSH tunnel (7,856 hits / 1,481 IPs). An overly aggressive firewall script locked me out, Windows mangled the SD partition table on inspection, and a DIY buck converter brownout killed SSH mid-write. Instead of reflashing, I hex-carved the raw evidence partitions back out and published every V1 flaw openly. That transparency caught industry feedback from Guidewire and R.U.D.R.A and directly shaped V2.',
    links: {
      repo: 'https://github.com/Gurpratap-Smagh/hp-attack-panel',
      writeup: 'https://medium.com/@gsmag404',
      post: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7439187001834127360',
    },
    featuredInReel: true,
  },
  {
    id: 'sophix-proplr',
    title: 'Sophix: Read-Only AI Incident Triage Agent',
    date: 'Nov 2026 (R&D: Dec 2026 to Aug 2027)',
    venue: 'Brampton AI Innovator Hackathon (Brampton City Hall)',
    outcomeBadge: 'Track Winner · Proplr R&D',
    pillars: ['AI', 'Security'],
    skillsProven: [
      'Full-Stack / AI / Blockchain',
      'Live Incident Triage',
      'Unscripted Pitching',
    ],
    thumbnail: '/photos/hackathons/sophix-brampton-stage.jpg',
    summary:
      'I architected a read-only incident triage agent on Google Cloud ADK and SPIFFE Agent Identity that traverses CMDB dependency graphs and runbooks to route alerts accurately.',
    mediaGallery: [
      {
        src: '/photos/hackathons/sophix-brampton-stage.jpg',
        alt: 'Gurpratap pitching Sophix on stage in front of Brampton Venture Zone banner',
        caption: 'Solo pitch for Sophix on stage during Brampton AI Innovator.',
      },
      {
        src: '/photos/hackathons/sophix-city-hall-audience.jpg',
        alt: '200+ attendees at Brampton City Hall listening to finals pitches',
        caption: 'Audience of 200+ attendees at Brampton City Hall (36 teams across 14 enterprise hosts).',
      },
    ],
    technicalBreakdown:
      'Built on Google Cloud ADK with cryptographic SPIFFE Agent Identity to traverse service dependency graphs inside a CMDB alongside historical incident runbooks.\n\nBy keeping the triage agent strictly read-only with SPIFFE-scoped credentials rather than autonomous write remediation, Sophix isolates probable root causes and routes clean context to the right on-call team with zero production blast-radius risk.',
    stack: ['Google Cloud ADK', 'SPIFFE', 'CMDB Graphs', 'Runbook RAG', 'Google Cloud'],
    fieldNotes:
      'I pitched Sophix solo to 200+ attendees at Brampton City Hall in a field of 36 teams across 14 enterprise hosts, winning the Proplr Cloud Services challenge track. That win turned into an 8-month R&D engagement with Proplr (Dec 2026 to Aug 2027) to engineer and validate the production triage pipeline on Google Cloud ahead of Brampton Venture Expo 2027.',
    links: {},
    featuredInReel: true,
  },
  {
    id: 'themctf-2026-infra-ir',
    title: 'THEM?!CTF 2026: Live Infra Ops & GCP Breach IR',
    date: 'May 29 to 31, 2026',
    venue: 'THEM?! International CTF (CTFtime Event 3209)',
    outcomeBadge: 'Live IR · 1,500+ Players',
    pillars: ['Security', 'Ops & Strategy'],
    skillsProven: [
      'Live Incident Triage',
      'Crisis Regulation',
      'Threat Infra & Honeypots',
      'Team Alignment & Ops',
    ],
    thumbnail: '/photos/themctf-2026-logo.jpg',
    summary:
      'I contained a pre-launch GCP compromise across disk images and Flask code, mediated team conflict under fire, and kept CTFd/VPN infrastructure live for 1,500+ global players.',
    mediaGallery: [
      {
        src: '/photos/themctf-2026-logo.jpg',
        alt: 'THEM?!CTF 2026 official competition flag logo',
        caption: 'THEM?!CTF 2026 (CTFtime Event 3209 · 1,500+ players · Max 25.00 weight).',
      },
      {
        src: '/photos/france/esna-group-finale.jpg',
        alt: 'THEM?! teammates together at ESNA Bretagne after co-hosting THEM?!CTF',
        caption: 'With the THEM?! international roster shortly after co-running THEM?!CTF 2026.',
      },
    ],
    technicalBreakdown:
      'Days before launch, forensic triage across /mnt/ctfdisk auth.log, wtmp (last), and /tmp/ssh-* agent-forwarding sockets uncovered unauthorized access and an injected Flask @app.after_request admin escalation backdoor (_promote_them_team_member).\n\nDeclared Total Loss to force a clean rebuild, patched VPN/server routing mid-event across 40+ challenges ($6,000+ prize pool, max 25.00 weight), authored DFIRxBlockchain challenges, and wrote the team configuration playbook.',
    stack: ['Linux Disk Forensics', 'GCP', 'Flask / Python', 'CTFd / WireGuard VPN', 'Incident Playbooks'],
    fieldNotes:
      'Infra failures triggered sharp friction between two senior leads while over 1,000 participants waited on the scoreboard. With zero formal authority, I calmed the channel down, shifted the argument to concrete disk checks and containment owners, ran the 48-hour live triage loop cleanly, and turned what broke into the SOP the team uses today.',
    links: {
      writeup: 'https://ctftime.org/event/3209/weight',
      post: 'https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7466259993957421059',
    },
    featuredInReel: true,
  },
  {
    id: 'voltage-spike-writeup',
    title: 'I Shocked a Chip and It Gave Me the Flag.',
    date: 'Jun 13, 2026',
    venue: 'Midnight Flag CTF Finals · Hardware Track',
    outcomeBadge: 'Hardware Writeup · PDF',
    pillars: ['Security', 'Engineering'],
    skillsProven: ['Hardware & IoT', 'DFIR & Forensics'],
    thumbnail: '/photos/france/fault-injection-pcb.jpg',
    summary:
      'Five hours mapping CH341A pinouts with no AI or docs in France before landing a manual power-rail voltage spike that bypassed the firmware check in seconds.',
    mediaGallery: [
      {
        src: '/photos/france/fault-injection-pcb.jpg',
        alt: 'Custom perfboard target and CH341A wiring for voltage fault injection',
        caption: 'Perfboard fault injection target A3/A4 and 24Cxxx EEPROM layout.',
      },
    ],
    technicalBreakdown:
      'Interfaced a custom undocumented microcontroller and 24Cxxx EEPROM with a CH341A programmer in an AI-banned competition hall.\n\nAfter cross-referencing loosely related datasheets for five hours to establish clean serial comms, we skipped nanosecond pulse generators and introduced a controlled manual voltage surge on the power rail to glitch the instruction check.',
    stack: ['CH341A Programmer', '24Cxxx EEPROM', 'Voltage Fault Injection', 'Datasheet Pinout Mapping'],
    fieldNotes:
      'Writing without Copilot or forum threads revealed the exact line between my knowledge and my tools. Setup looked like low-value busywork until I spent five hours stuck before reading byte one; the exploit itself finished in seconds.',
    links: {
      pdf: '/writeups/midnight-flag-voltage-fault-injection.pdf',
    },
    featuredInReel: true,
  },
  {
    id: 'achievaflow-bramhacks',
    title: 'AchievaFlow (1st Place) & BramHacks Parasynth',
    date: 'Oct to Nov 2025',
    venue: 'Humber Longo Centre & BramHacks 2025',
    outcomeBadge: '1st Place · AchievaFlow',
    pillars: ['AI', 'Ops & Strategy'],
    skillsProven: ['Unscripted Pitching', 'Team Alignment & Ops', 'Hardware & IoT'],
    thumbnail: '/photos/hackathons/achievaflow-stage.jpg',
    summary:
      'Combined medical, business, and engineering teammates to clinch 1st Place at AchievaFlow, then co-built Parasynth terrain-to-SolidWorks CAD generation at BramHacks.',
    mediaGallery: [
      {
        src: '/photos/hackathons/achievaflow-stage.jpg',
        alt: 'AchievaFlow 1st Place stage lineup at Humber Longo Centre',
        caption: '1st Place stage lineup at Humber Longo Centre Data Drive Hackathon (Oct 20, 2025).',
      },
      {
        src: '/photos/bramhacks/bramhacks-team-frame.jpg',
        alt: 'Team Parasynth hardware and software demo at BramHacks',
        caption: 'BramHacks hardware-CAD sprint where I also picked up the CyberStart booth card.',
      },
    ],
    technicalBreakdown:
      'Built an executive-ready healthcare/operations data narrative for 1st Place at AchievaFlow, followed a month later at BramHacks by extracting satellite terrain features into parameterized SolidWorks rover wheel assemblies.',
    stack: ['Python', 'SolidWorks CAD', 'Data Analytics', 'CAD-Software Pipeline'],
    fieldNotes:
      'Two milestones collided here: aligning non-engineers on AchievaFlow under a tight pitch clock, and grabbing a random CyberStart Canada flyer off a table at BramHacks that triggered a 200+ day security streak.',
    links: {
      post: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7386165642455851009',
    },
    featuredInReel: true,
  },
  {
    id: 'chronicle-udm-hunt',
    title: 'Google Mandiant Investigation: AD Kill-Chain Hunt',
    date: 'Nov 2026',
    venue: "Google Mandiant · Humber SecOps & Ontario's Cyber Summit",
    outcomeBadge: 'Mandiant · AD Kill-Chain',
    pillars: ['Security'],
    skillsProven: ['DFIR & Forensics', 'Live Incident Triage'],
    thumbnail: '/photos/ongov/ontario-cyber-summit-stage.jpg',
    summary:
      'Reconstructed an end-to-end Google Mandiant enterprise AD intrusion investigation spanning SyncAuthToken theft, DLL sideloading, LSASS dumping, DCSync, and covert exfiltration.',
    mediaGallery: [
      {
        src: '/photos/ongov/ontario-cyber-summit-stage.jpg',
        alt: 'Gurpratap on stage during Ontario 2026 Cyber Security Summit',
        caption: 'On stage at Ontario 2026 Cyber Security Summit while competing on the Humber team.',
      },
    ],
    technicalBreakdown:
      'Authored multi-stage YARA-L UDM queries in Google SecOps Chronicle for the Mandiant investigation across Sysmon events (1, 3, 17, 18, 23, 26), PowerShell 4104 script blocks, and Windows Security 4624 logs.\n\nCorrelated PID 9012 to unmanaged PowerShell host scs_sync.exe, ntkd.exe/dbgeng.dll sideloading, DCSync replication GUID 1131f6ad-9c07-11d1-f79f-00c04fc2dcd2, \\dnsresolver_pipe, and staging domain chemscalere.com.',
    stack: ['Google Mandiant IR', 'Google SecOps Chronicle', 'YARA-L / UDM', 'Sysmon', 'Windows Event Logs'],
    fieldNotes:
      'Tracing lateral movement through UDM fields rather than isolated alerts kept false leads out when reconstructing both host execution and DNS exfiltration infrastructure.',
    links: {},
    featuredInReel: true,
  },
  {
    id: 'humber-robotics-asv',
    title: 'Humber ASV SeaForge & SpiderbotX Walker',
    date: 'Apr 2025 to 2026',
    venue: 'Humber Polytechnic & Barrett CTI',
    outcomeBadge: 'ROS2 + Barrett CTI',
    pillars: ['Engineering'],
    skillsProven: ['Hardware & IoT', 'Full-Stack / AI / Blockchain'],
    thumbnail: '/photos/bramhacks/bramhacks-team-frame.jpg',
    summary:
      'Decoupled ROS2 Jetson autonomy loops simulated in NVIDIA Isaac Sim for Humber ASV alongside the 10 kg Klann-linkage SpiderbotX walking robot.',
    mediaGallery: [
      {
        src: '/photos/bramhacks/bramhacks-team-frame.jpg',
        alt: 'Hardware and software robotics sprint team showcase',
        caption: 'Hands-on hardware-software systems integration in Brampton/Etobicoke.',
      },
    ],
    technicalBreakdown:
      'Built ROS2 sensor/actuation pipelines with GPS/MQTT telemetry verified in NVIDIA Isaac Sim and paired with a TypeScript/React SeaForge control interface.\n\nEarlier in Year 1, co-designed SolidWorks Klann-linkage leg assemblies and Arduino C++ ultrasonic rerouting for the 10 kg SpiderbotX walker demoed at Barrett CTI.',
    stack: ['ROS2', 'NVIDIA Jetson', 'Isaac Sim', 'MQTT', 'SolidWorks', 'Arduino C++', 'React'],
    fieldNotes:
      'Hardware-in-the-loop delays exposed why decoupled ROS2 telemetry queues matter before putting any autonomous vessel on open water.',
    links: {
      repo: 'https://github.com/Gurpratap-Smagh/HumberASV-Website',
    },
    featuredInReel: true,
  },
  {
    id: 'cyberstart-ngen-arc',
    title: 'Rogers Cybersecure Catalyst · CyberStart Canada Top Performer 2026',
    date: 'Nov 2025 to Oct 2026',
    venue: 'Rogers Cybersecure Catalyst (TMU) · SANS GIAC GFACT',
    outcomeBadge: 'Top Performer 2026 · 91% GFACT',
    pillars: ['Ops & Strategy', 'Security'],
    skillsProven: ['Unscripted Pitching', 'Crisis Regulation', 'DFIR & Forensics'],
    thumbnail: '/photos/n3summit/n3-interview-sycodal.jpg',
    summary:
      'I showed daily consistency from a November 2025 booth card through 200+ consecutive TryHackMe days, finishing 4th in CyberStart CTF and scoring 91% on GIAC GFACT (#8458).',
    mediaGallery: [
      {
        src: '/photos/n3summit/n3-interview-sycodal.jpg',
        alt: 'Gurpratap representing Humber at NGen N3 Summit',
        caption: 'Technical floor advocacy after building daily security fundamentals.',
      },
    ],
    technicalBreakdown:
      'Completed the 43h 53m CyberStart Canada 25/26 Pathway (THM-NJUMPMQAFZ) and sustained 200+ consecutive daily TryHackMe lab sessions across web, DFIR, OSINT, and SOC triage.\n\nEarned Rogers Cybersecure Catalyst Top Performer recognition (4th in CyberStart Canada CTF), won the SANS scholarship, and passed GIAC GFACT with 91% (Analyst #8458, Oct 2026).',
    stack: ['GIAC GFACT (91%)', 'ISC2 CC', 'TryHackMe', 'SOC / DFIR Fundamentals'],
    fieldNotes:
      'I picked up the CyberStart application card off a booth table expecting nothing, showed up every single day for 200+ days, and earned the GIAC GFACT scholarship that carried me onto a global top-50 CTF team.',
    links: {
      writeup: 'https://www.credly.com/badges/33ff7ea8-5a30-4124-a3ab-2397609e99a3',
    },
    featuredInReel: true,
  },
  {
    id: 'holmes-osint-writeup',
    title: 'We Hunted a Killer Online (Midnight Flag OSINT)',
    date: 'Jun 14, 2026',
    venue: 'Midnight Flag CTF Finals · OSINT',
    outcomeBadge: 'OSINT Writeup · PDF',
    pillars: ['Security', 'Ops & Strategy'],
    skillsProven: ['DFIR & Forensics', 'Team Alignment & Ops'],
    thumbLabel: 'OSINT // PDF DOSSIER',
    summary:
      'Traced a suspect persona from an 1896 Philadelphia Inquirer clipping through Chronicling America, itch.io, Instagram Python screenshots, and GitHub commit 9c79ae0.',
    mediaGallery: [],
    technicalBreakdown:
      'Matched an undated newspaper scan to H.H. Holmes in Library of Congress archives (April 12, 1896), exact-quoted a witness line to uncover itch.io user holmes-obsessed, pivoted through Instagram account elizabethbathory_lover to find zodiac_enjoyer inside a USER_PROFILES dictionary screenshot, and unlocked secret repo HEZJ via cipher WHITECHAPELBOSS.',
    stack: ['OSINT Pivoting', 'Chronicling America', 'Google Dorking', 'GitHub Commit Forensics'],
    fieldNotes:
      'Neither tegeda_ nor I had formal OSINT training before sitting down at 2 AM in Rennes. Whenever I hit a dead end on a TikTok decoy or cipher, he cracked the next thread so momentum never stalled.',
    links: {
      pdf: '/writeups/midnight-flag-we-hunted-a-killer-online.pdf',
    },
  },
  {
    id: 'fandrop-wallet',
    title: 'FanDrop: Zero-PII Apple & Google Wallet Fan Pass',
    date: 'Oct 17 to 18, 2026',
    venue: 'Catalyst by Speer Hackathon (Toronto)',
    outcomeBadge: 'Track Winner · Catalyst',
    pillars: ['Engineering', 'Ops & Strategy'],
    skillsProven: ['Full-Stack / AI / Blockchain', 'Unscripted Pitching'],
    thumbLabel: 'PASSKIT // WALLET',
    summary:
      'Replaced high-drop-off concert signup forms with a single QR tap installing a signed Apple .pkpass and RS256 Google Wallet pass for direct artist push updates.',
    mediaGallery: [],
    technicalBreakdown:
      'Built PKCS#7 detached bundle signing (node-forge + fflate) to serve valid .pkpass files, PassKit device registration callbacks, RS256 Google Wallet JWT issuance, Drizzle SQL schemas, a one-shot FanCam, and Vitest test coverage.\n\nIncluded a resilient instant preview fallback when serverless runtimes hit Apple HTTP/2 APNs cert constraints.',
    stack: ['TypeScript', 'React', 'Apple PassKit', 'Google Wallet API', 'Drizzle SQL', 'Vitest'],
    fieldNotes:
      'On the whiteboard we rejected login walls, wristbands, and extra hardware tags. Pitching an empty-friction Wallet notification pass straight to founders Raine Maida and Mathew Mozaffari locked down the track win.',
    links: {},
  },
  {
    id: 'safescan-rag',
    title: 'SafeScan: Deterministic Barcode & RAG Engine',
    date: 'May 9 to 10, 2026',
    venue: 'IBM Z x Sheridan Hackathon',
    outcomeBadge: 'Top 20 / 200 · IBM Z',
    pillars: ['AI', 'Engineering'],
    skillsProven: ['Full-Stack / AI / Blockchain', 'Team Alignment & Ops'],
    thumbLabel: 'NEXT.JS // OPENFDA RAG',
    summary:
      'Co-led 5 builders (mentoring first-timers) to correlate scanned barcodes against Open Food Facts, openFDA recalls, and personal allergies with grounded RAG Q&A.',
    mediaGallery: [],
    technicalBreakdown:
      'Cross-references barcode UPCs against PostgreSQL/Prisma profiles, UserMemory deduplication, Open Food Facts ingredient trees, and openFDA recall feeds with httpOnly JWT auth and 15 unit tests on chat routes.\n\nKept risk scoring 100% deterministic rather than trusting LLM intuition; constrained RAG strictly to explaining verified report rows.',
    stack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma', 'openFDA API', 'Grounded RAG'],
    fieldNotes:
      'Split commits cleanly so first-time hackathon teammates shipped real endpoints without blocking integration. 33+ commits across the sprint (17 mine) carried us into the top 10% of 200 submissions.',
    links: {
      repo: 'https://github.com/Gurpratap-Smagh/SafeScan',
      demo: 'https://safe-scan-nine.vercel.app',
      post: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7460019024597475328',
    },
  },
  {
    id: 'givehub-omnichain',
    title: 'GiveHub: ZetaChain ZRC-20 Crowdfunding & CI Audit',
    date: 'Aug 2025 to Jan 2026',
    venue: 'ZetaChain x Google Cloud Buildathon',
    outcomeBadge: 'Web3 + Slither Audit',
    pillars: ['Engineering', 'Security'],
    skillsProven: ['Full-Stack / AI / Blockchain', 'Threat Infra & Honeypots'],
    thumbLabel: 'SOLIDITY // FOUNDRY',
    summary:
      'Solo-built cross-chain ZRC-20 crowdfunding with live WebSocket updates, then returned months later to harden contracts with Foundry, Slither, and CodeQL CI gates.',
    mediaGallery: [],
    technicalBreakdown:
      'Wrote 21.5 KB CrossChainCrowdfund.sol enforcing non-custodial swap-and-forward settlement on ZetaChain, verified with Foundry unit/fuzz tests, locked down GCP container IAM permissions, and integrated Slither + CodeQL static security scans.',
    stack: ['Solidity', 'Foundry', 'ZetaChain ZRC-20', 'Next.js', 'Slither', 'CodeQL'],
    fieldNotes:
      'Most hackathon repos rot the Sunday evening they are submitted. Going back in December to strip dependency issues and enforce Slither/CodeQL gates turned prototype code into clean engineering proof.',
    links: {
      repo: 'https://github.com/Gurpratap-Smagh/Give-hub',
      demo: 'https://give-hub-nngk.vercel.app/',
      post: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7376019080115535872',
    },
  },
  {
    id: 'illumiauth-fpga',
    title: 'IllumiAuth: Optical Environmental FPGA MFA',
    date: 'Dec 2025',
    venue: 'Humber Polytechnic B.Eng. Design',
    outcomeBadge: 'FPGA Physical MFA',
    pillars: ['Engineering', 'Security'],
    skillsProven: ['Hardware & IoT'],
    thumbLabel: 'FPGA // UART // RUST',
    summary:
      'Built a hardware second factor that blocks host authentication unless ambient optical readings sampled by an FPGA match calibrated physical bounds.',
    mediaGallery: [],
    technicalBreakdown:
      'LDR analog voltage divider feeds FPGA ADC sampling and deterministic C noise filtering, streaming framed JSON packets over UART to a JavaFX/Rust host lock daemon.',
    stack: ['FPGA', 'Low-Level C', 'ADC / UART', 'Rust', 'JavaFX'],
    fieldNotes:
      'Calibrating optical hysteresis in C prevented fluorescent light flicker from locking users out while still rejecting flashlight spoofing attempts.',
    links: {
      repo: 'https://github.com/Gurpratap-Smagh/Illumi-Auth',
      post: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7406138958046236672',
    },
  },
  {
    id: 'medium-github-scary',
    title: 'GitHub is Scary: The Illusion of Deletion',
    date: 'Mar 27, 2026',
    venue: 'TAMUctf 2026 · Medium Writeup',
    outcomeBadge: 'Medium · Git Internals',
    pillars: ['Security'],
    skillsProven: ['DFIR & Forensics'],
    thumbLabel: 'GIT OBJECTS // DFIR',
    summary:
      'Walkthrough of how deleted commits and leaked secrets remain recoverable through dangling git objects, retained PR refs, and shared fork object pools.',
    mediaGallery: [],
    technicalBreakdown:
      'Demonstrated how force-pushes and branch deletions leave commit hashes reachable across GitHub fork networks and pull-request refs unless garbage-collected upstream and secrets are rotated immediately.',
    stack: ['Git Internals', 'GitHub Forensics', 'TAMUctf', 'OSINT'],
    fieldNotes:
      'Published directly after TAMUctf so developers understand why git push --force never equals credential revocation.',
    links: {
      writeup: 'https://medium.com/@gsmag404/github-is-scary-the-illusion-of-deletion-9cccfe8c7fa8',
    },
  },
  {
    id: 'medium-retro-forensics',
    title: 'Retro Forensics: Srdnlen CTF & Chocolate Doom C Mod',
    date: 'Mar to Apr 2026',
    venue: 'Srdnlen CTF (20th/433) & UMassCTF (45th)',
    outcomeBadge: '20th / 433 · Medium',
    pillars: ['Security', 'Engineering'],
    skillsProven: ['DFIR & Forensics'],
    thumbLabel: 'C ENGINE // WIN98 DMP',
    summary:
      'Unpacked a Win98 memory dump into FAT32, ISO9660, and 1991 MS-DOS TOWN.ZZT board tiles, and patched Chocolate Doom C source to debug desynced .lmp demos.',
    mediaGallery: [],
    technicalBreakdown:
      'Carved CHALL.DMP -> SEG_FAT.BIN -> virtual CD-ROM -> MS-DOS TOWN.ZZT game world at Srdnlen CTF Quals.\n\nAt UMassCTF, modified the C Chocolate Doom game loop directly to inject TIC breakpoints and +/-5s timeline scrubbing instead of replaying from frame zero per edit.',
    stack: ['C', 'Memory Forensics', 'FAT32 / ISO9660', 'Srdnlen CTF', 'UMassCTF'],
    fieldNotes:
      'Instead of guessing offsets externally in Python, hacking the emulator engine itself cut iteration time from minutes to milliseconds.',
    links: {
      writeup: 'https://medium.com/@gsmag404/retro-forensics-ce78891370fb',
    },
  },
  {
    id: 'medium-0xl4ugh',
    title: '0xL4ugh Awesome Router: Embedded Web x Pwn',
    date: 'Jan 27, 2026',
    venue: '0xL4ugh CTF 2026 (9th Overall)',
    outcomeBadge: '9th Overall · Medium',
    pillars: ['Security'],
    skillsProven: ['Hardware & IoT', 'DFIR & Forensics'],
    thumbLabel: 'IOT // WEB X PWN',
    summary:
      'Documented the router exploitation chain pairing reflected XSS and binary primitives during my first month competing on the THEM?! roster.',
    mediaGallery: [],
    technicalBreakdown:
      'Traced embedded router CGI handlers, chained reflected XSS to reach authenticated admin endpoints, and bypassed native binary checks.',
    stack: ['IoT Router Security', 'Reflected XSS', 'Pwn / Reversing', '0xL4ugh CTF'],
    fieldNotes:
      'Landing a solid router solve during my first 30 days on THEM?! proved I could pull weight outside solo forensics rooms.',
    links: {
      writeup: 'https://medium.com/@gsmag404/0x4ugh-awesome-router-3cd99ab43702',
    },
  },
  {
    id: 'medium-pokemon-fake',
    title: 'Is Your Pokemon-Card Fake? (UofTCTF Forensics)',
    date: 'Jan 12, 2026',
    venue: 'UofTCTF 2026 (Solo -> THEM?! Invite)',
    outcomeBadge: 'UofTCTF · Medium',
    pillars: ['Security'],
    skillsProven: ['DFIR & Forensics'],
    thumbLabel: 'IMAGE DFIR // METADATA',
    summary:
      'Solo UofTCTF digital image and file-structure forensics solve that helped earn my trial invitation onto global team THEM?!.',
    mediaGallery: [],
    technicalBreakdown:
      'Inspected container chunks, pixel-layer anomalies, and hidden byte streams inside counterfeit card image artifacts to recover the competition flag cleanly.',
    stack: ['Digital Forensics', 'Image / Hex Inspection', 'UofTCTF'],
    fieldNotes:
      'Competing solo at UofTCTF without a team safety net produced the exact solve portfolio that opened the door to THEM?!.',
    links: {
      writeup: 'https://medium.com/@gsmag404/is-your-pokemon-card-fake-099b3e95868b',
    },
  },
  {
    id: 'agromart-hedera',
    title: 'Lovtiti Agro-Mart: Hedera Supply-Chain Storefront',
    date: 'Oct 31 to Nov 1, 2025',
    venue: 'Hedera Africa Hackathon (DoraHacks)',
    outcomeBadge: 'Hedera Build',
    pillars: ['Engineering', 'Ops & Strategy'],
    skillsProven: ['Full-Stack / AI / Blockchain', 'Team Alignment & Ops'],
    thumbLabel: 'HEDERA // PRISMA',
    summary:
      'Shipped a Next.js + Prisma marketplace anchored with Hedera settlement across distributed Canada and Africa teammates to reduce agricultural middleman spoilage.',
    mediaGallery: [],
    technicalBreakdown:
      'Separated Prisma SQL product/order schemas cleanly from Hedera payment confirmation hooks so engineers across multiple timezones could ship without merge conflicts.',
    stack: ['Next.js', 'TypeScript', 'Hedera', 'Prisma'],
    fieldNotes:
      'Async timezone handoffs only work when interface contracts are locked down before everyone goes to sleep.',
    links: {
      repo: 'https://github.com/Gurpratap-Smagh/agro-mart',
      demo: 'https://agro-mart-beta.vercel.app',
      post: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7390472669269368832',
    },
  },
  {
    id: 'safepass-web3-suite',
    title: '@gurpratap/safe-pass & Solana/ETH Crypto Builds',
    date: 'Jul to Oct 2025',
    venue: 'npm Registry & Solana/Ethereum Devnet',
    outcomeBadge: 'npm + Solana / ETH',
    pillars: ['Engineering', 'Security'],
    skillsProven: ['Full-Stack / AI / Blockchain'],
    thumbLabel: 'NPM // RUST // BIP-32',
    summary:
      'Published @gurpratap/safe-pass XSS allow-list package on npm alongside SkillStake (Rust/Anchor Solana PoW staking) and a zero-persistence BIP-32 HD Ethereum wallet.',
    mediaGallery: [],
    technicalBreakdown:
      '@gurpratap/safe-pass exports setText, escapeHTML, setSafeAttr, and entropy checkers without fragile regex sanitizers. SkillStake pairs a Rust/Anchor PDA staking contract with Keccak difficulty verification; Ethereum BIP-32 wallet derives deterministic keys 100% in browser RAM.',
    stack: ['npm / TypeScript', 'Rust / Solana Anchor', 'BIP-32 / Ethers.js', 'AppSec'],
    fieldNotes:
      'Shipping real packages and client-side key derivation forced strict attention to threat models long before hackathon deadlines.',
    links: {
      repo: 'https://github.com/Gurpratap-Smagh/revenium',
      demo: 'https://etherium-wallet-rouge.vercel.app',
      post: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7365836749194805249',
    },
  },
];
