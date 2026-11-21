import { BuildProject, FlagshipDossier } from './types';

export const TELEMETRY_INSPECTOR_DATA = {
  rawSensorEvent: {
    '@timestamp': '2026-10-29T16:22:53.800Z',
    client: { ip: '194.180.49.41' },
    http: {
      request: {
        method: 'POST',
        headers: {
          host: 'support-desk.ddns.net',
          'user-agent': 'Go-http-client/1.1',
          'content-type': 'application/x-www-form-urlencoded',
          'x-forwarded-for': '194.180.49.41',
        },
        body: {
          content: 'class=system&method=eval&cmd=id',
          hash: {
            sha256: 'd271048e4568512552cb38f66c78cb9f2fb93e56198962e354e3ec795b7622bf',
          },
        },
      },
    },
    url: { path: '/index.php', query: 'cmd=id' },
    sensor: { action: 'lure:php_stream' },
    session: {
      id: 'f4c9f4ef4743d93b14138ae36a',
      action_history: ['route:portal', 'lure:php_stream'],
    },
    threat: { cve: 'CVE-2024-2961', technique: { id: 'T1190' } },
  },
  correlationRules: [
    {
      rule: 'Sanitize & Normalize',
      detail:
        'Collapse repeated 404 probes in session.action_history (["route:not_found","route:not_found","primitive:id"] -> ["route:not_found","primitive:id"]), strip empty GET SHA-256 (e3b0c442...), and compute MD5[:8] over exact header key arrival order.',
    },
    {
      rule: 'Rule 1: Payload Hash Collision (High)',
      detail:
        'Non-empty body SHA-256 matched against SQLite hash_index merges rotating scanner IPs running the same exploit script into one cluster immediately.',
    },
    {
      rule: 'Rule 2 & 3: Sequence + Header FP',
      detail:
        'Length >= 2 matching both action sequence and header fingerprint merges at High confidence; length >= 3 sequence match alone merges at Medium confidence.',
    },
    {
      rule: 'Causal Escalation Gate',
      detail:
        'If a session jumps from route:not_found directly to an execution primitive (primitive:id, primitive:whoami) without hitting any known lure:*, flag causal_escalation: true as an Unmapped Exploit.',
    },
  ],
  emittedProfile: {
    cluster: {
      id: 'C-14ef4fe0a2',
      label: 'Exploit Signature: cmd_injection',
      confidence: 'high',
      event_count: 4,
      session_count: 2,
      max_phase: 'exploitation',
      max_phase_rank: 2,
      action_sequence: ['route:not_found', 'primitive:id'],
    },
    actor: {
      ips: ['102.244.97.185', '216.36.112.159'],
      ip_count: 2,
      asns: ['Orange Cameroun SA', 'GTT Communications Inc.'],
      countries: ['Cameroon', 'United States'],
      header_fingerprint: '77bbfed5',
    },
    heuristics: {
      signatures: ['cmd_injection'],
      entropy_flagged: false,
      causal_escalation: true,
    },
    mitre: {
      technique_ids: ['T1059.004', 'T1190'],
      technique_names: ['Unix Shell', 'Exploit Public-Facing Application'],
    },
    ioc: {
      payload_hashes: ['d271048e4568512552cb38f66c78cb9f2fb93e56198962e354e3ec795b7622bf'],
      dropper_urls: ['https://217.60.102.5/sh'],
    },
    display: { rank_score: 2024 },
  },
};

export const FLAGSHIP_DOSSIERS: FlagshipDossier[] = [
  {
    id: 'honeypot-platform',
    tag: 'FLAGSHIP 01 · OMNIPULSE TECH 2026',
    title: 'Honeypot & Threat-Intel Correlation Platform (V1 ICS -> V2 L7 Engine)',
    subtitle:
      'Started on a Raspberry Pi in a school locker catching 7,856 ICS/SSH hits, evolved into a zero-public-port Elasticsearch/Kibana pipeline tracking actors across rotating IPs.',
    venue: 'Showcased at OmniPulse Tech 2026 (Humber Polytechnic)',
    timeframe: 'Mar 2026 to Present',
    problem:
      'V1 split logging across two blind halves: the AWS VPS saw real attacker IPs without session behavior, while the Pi behind the SSH tunnel saw every shell command from 127.0.0.1. Timestamp matching failed under 8 to 200ms tunnel jitter, and naive IP grouping broke completely when attackers rotated across cloud proxies.',
    decision:
      'In V2, I kept the Raspberry Pi sensor intentionally dumb so it only serves decoy lures, stamps sensor.action, and ships raw JSON over WireGuard and Fluent Bit into a private Elasticsearch/Kibana SIEM. A Python daemon (correlator.py) polls via Point-in-Time cursor every 3 seconds, strips empty GET hashes, hashes exact HTTP header key order, checks Shannon entropy (>4.8 bits/byte), and correlates actors by payload hash and behavioral sequence rather than IP.',
    whyItMatters:
      'Building custom lures for every CVE does not scale, and blocking by IP falls apart as soon as an actor shifts from a host in Cameroon to a US VPS. Separating lure:* routes from universal primitive:* execution indicators lets the engine catch unmapped exploits via causal_escalation: true while preserving attribution across rotating infrastructure.',
    metrics: [
      { label: 'V2 Public Traffic', value: '1,900+ req / 3 days' },
      { label: 'V1 Locker Capture', value: '7,856 hits / 1,481 IPs' },
      { label: 'Top ICS Bait Hit', value: 'operator:scada2024 (268x)' },
      { label: 'Cross-IP Attribution', value: 'Cameroon + US -> C-14ef4fe0a2' },
    ],
    pipeline: [
      {
        step: '01',
        label: 'Public Edge Proxy',
        component: 'Nginx / X-Forwarded-For -> WireGuard',
        rationale: 'Preserves client.ip while keeping every SIEM and Pi sink port closed to the internet.',
      },
      {
        step: '02',
        label: 'Zero-Logic Pi Sensor',
        component: 'Emulated Apache/PHP + S7Comm / Cowrie',
        rationale:
          'Does zero analysis locally; stamps sensor.action (route:*, lure:*, primitive:*) and exact header order.',
      },
      {
        step: '03',
        label: 'Private SIEM Ship',
        component: 'Fluent Bit -> honeypot-events (Elastic)',
        rationale: 'Enriches threat.cve and MITRE technique IDs at ingest via sensor-action-map.',
      },
      {
        step: '04',
        label: 'Causal Correlator',
        component: 'correlator.py + SQLite State -> honeypot-profiles',
        rationale:
          'Collapses 404 noise, clusters by SHA-256 payload + header FP + sequence, and scores kill-chain depth.',
      },
    ],
    links: [
      { label: 'Attack Trigger Panel (hp-attack-panel)', url: 'https://github.com/Gurpratap-Smagh/hp-attack-panel' },
    ],
    photos: [
      {
        src: '/photos/omnipulse/kibana-geoip-demo.jpg',
        alt: 'Live Kibana GeoIP map at OmniPulse Tech 2026',
        caption: 'Live Kibana GeoIP attack telemetry on the Barrett CTI Atrium display.',
        location: 'Humber Polytechnic',
        date: 'Nov 4, 2026',
      },
      {
        src: '/photos/omnipulse/pi-sink-live-rig.jpg',
        alt: 'Raspberry Pi sink and replay laptops on showcase table',
        caption: 'Hardware table rig: Pi sink, replay panel, and Elasticsearch ingest views.',
        location: 'OmniPulse 2026',
        date: 'Nov 4, 2026',
      },
    ],
  },
  {
    id: 'supplychek-secops',
    tag: 'FLAGSHIP 02 · BRAMPTON SECOPS 3RD PLACE',
    title: 'SupplyChek: Zero-Trust Cryptographic Freight Verification',
    subtitle:
      'Threat-modeled cargo hijacking and dispatch fraud for Canadian supply chains, enforcing hardware-bound WebAuthn biometric signatures before drivers act on route changes.',
    venue: 'Brampton SecOps Hackathon (Rogers Cybersecure Catalyst, TMU & City of Brampton)',
    timeframe: 'Sep 2026',
    problem:
      'Multi-modal freight and agri-food logistics lose shipments when attackers spoof dispatch emails or inject unverified changes to delivery addresses, carrier assignments, or payout bank accounts.',
    decision:
      'Instead of relying on login-session trust or SMS alerts, I modeled the dispatch-to-driver trust boundary and designed a zero-trust state transition protocol: every high-risk shipment modification requires a hardware-bound WebAuthn passkey signature from the issuing authority, producing a tamper-evident audit trail verified before the driver receives updated instructions.',
    whyItMatters:
      'Compromised inbox credentials can forge text; they cannot forge a physical biometric passkey assertion tied to a specific shipment hash. Judges and the Deputy Mayor awarded the build 3rd Place overall.',
    metrics: [
      { label: 'Placement', value: '3rd Place ($1,000)' },
      { label: 'Signing Layer', value: 'WebAuthn Biometric Passkeys' },
      { label: 'Protected Vectors', value: 'Address, Carrier, Bank Reroutes' },
      { label: 'Recognition', value: 'Deputy Mayor & MP Certificate' },
    ],
    pipeline: [
      {
        step: '01',
        label: 'Threat Boundary Model',
        component: 'Dispatch Authority <-> Driver Channel',
        rationale: 'Identifies spoofable instruction hops where social engineering or inbox compromise hits drivers.',
      },
      {
        step: '02',
        label: 'Canonical Payload Hash',
        component: 'Destination + Carrier + Payout Hash',
        rationale: 'Binds exact shipment parameters so any mid-flight tampering invalidates verification.',
      },
      {
        step: '03',
        label: 'Hardware Assertion',
        component: 'WebAuthn Passkey Challenge',
        rationale: 'Requires physical user presence and device key signature from the authorized dispatcher.',
      },
      {
        step: '04',
        label: 'Driver Verification Gate',
        component: 'Tamper-Evident Audit Log + UI Lock',
        rationale: 'Drivers only execute route changes backed by a valid cryptographic assertion.',
      },
    ],
    links: [],
    photos: [
      {
        src: '/photos/bramsec/whiteboard-threat-model.jpg',
        alt: 'Whiteboard threat modeling for SupplyChek',
        caption: 'Whiteboard threat-modeling the freight verification trust boundary during the sprint.',
        location: 'Brampton SecOps',
        date: 'Sep 2026',
      },
      {
        src: '/photos/bramsec/supplychek-stage-pitch.jpg',
        alt: 'Presenting SupplyChek on stage',
        caption: 'Defending the cryptographic verification flow before the judging panel.',
        location: 'Rogers Cybersecure Catalyst',
        date: 'Sep 2026',
      },
    ],
  },
  {
    id: 'chronicle-and-themctf-ir',
    tag: 'FLAGSHIP 03 · LIVE INCIDENT RESPONSE & THREAT HUNTING',
    title: 'Production CTF Breach Forensics & Chronicle UDM Enterprise Hunt',
    subtitle:
      'Dual-track operational DFIR: forensic triage of a live production CTFd compromise serving 1,000+ players plus multi-host Active Directory lateral movement reconstruction in Google SecOps.',
    venue: 'THEM?!CTF 2026 Infra Ops & Humber SecOps DFIR Investigation',
    timeframe: 'May 2026 to Nov 2026',
    problem:
      'Three days before THEM?!CTF 2026 went live, attackers hijacked a privileged UID, hid an @app.after_request Python backdoor promoting team accounts to admin, dumped CTFd SQL backups, and staged 45 challenge sources. Separately, in a multi-tier enterprise AD breach trace, attackers masked execution via signed Microsoft binaries (ntkd.exe DLL sideloading) and unmanaged PowerShell.',
    decision:
      'On THEM?!CTF, I analyzed mounted disk snapshots (/mnt/ctfdisk, auth.log, wtmp via last, /tmp/ssh-* agent sockets, bash_history), declared Total Loss, rotated credentials, and authored the incident configuration playbook. In Chronicle UDM, I pivoted from process execution events (4624, 4104, Sysmon 1/17/18/23) to reconstruct the full kill chain: partner connector takeover (ADAPTIQ) -> ntkd.exe/dbgeng.dll sideloading -> LSASS minidump -> DCSync (1131f6ad-9c07-11d1-f79f-00c04fc2dcd2) -> DNS & encrypted tracking-pixel exfil.',
    whyItMatters:
      'Real DFIR requires tracing both technical IOCs (like knowing krbtgt passwords must be reset twice to flush Golden Ticket history, or identifying SSH agent forwarding sockets in /tmp) and operational governance so a compromised environment is rebuilt clean instead of patched over.',
    metrics: [
      { label: 'Live Event Scale', value: '1,000+ Players / 45 Challenges' },
      { label: 'Backdoor Trigger', value: 'Flask @app.after_request' },
      { label: 'AD Replication GUID', value: '1131f6ad-9c07-11d1-f79f...' },
      { label: 'Exfil Vectors Caught', value: 'DNS Subdomains + __utm.gif' },
    ],
    pipeline: [
      {
        step: '01',
        label: 'Initial Foothold',
        component: 'Partner Registry Token / SSH Socket',
        rationale: 'Detected unauthorized SyncAuthToken registry injection and staged /tmp/ssh-* agent sockets.',
      },
      {
        step: '02',
        label: 'Defense Evasion',
        component: 'ntkd.exe + dbgeng.dll / Unmanaged PS',
        rationale: 'Correlated PID 9012 from ScriptBlock 4104 to scs_sync.exe and native file deletion (Event 23/26).',
      },
      {
        step: '03',
        label: 'Domain Takeover',
        component: 'LSASS Dump -> bg_admin_dc1 -> DCSync',
        rationale: 'Caught break-glass account abuse and directory replication GUID on DC1.',
      },
      {
        step: '04',
        label: 'Covert Exfiltration',
        component: 'DNS Chunking + XOR __utm.gif',
        rationale: 'Uncovered staged PII/financial archives (core_fin_q4.zip) and Maritime CAD keys.',
      },
    ],
    links: [
      { label: 'GitHub Dangling Commits Writeup', url: 'https://medium.com/@gsmag404/github-is-scary-the-illusion-of-deletion-9cccfe8c7fa8' },
    ],
    photos: [
      {
        src: '/photos/ongov/ongov-team-awards.jpg',
        alt: 'Competing at Ontario Cyber Security CTF 2026',
        caption: 'Humber team at Ontario\'s Cyber Security CTF Competition (2026 Edition).',
        location: 'Ontario Gov CTF',
        date: 'Nov 2026',
      },
    ],
  },
];

export const BUILD_PROJECTS: BuildProject[] = [
  {
    id: 'illumiauth',
    name: 'IllumiAuth: Light-Acoustic FPGA MFA',
    category: 'Hardware & Robotics',
    venue: 'Humber B.Eng. Bus Project (Technical Project Manager)',
    date: 'Dec 2025',
    summary:
      'Hardware-enforced environmental multi-factor authentication where login stays locked until live analog room-light signatures match via FPGA validation.',
    architectureNote:
      'Voltage divider + LDR sensor feeds FPGA ADC sampling and low-level C digital noise filtering, serialized over UART as validated JSON to a JavaFX/Rust host listener.',
    stack: ['FPGA', 'Low-Level C', 'ADC / UART', 'JavaFX', 'Rust'],
    outcome: 'Physical-layer lock state verified before credential submission',
    repoUrl: 'https://github.com/Gurpratap-Smagh/Illumi-Auth',
    postUrl: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7406138958046236672',
  },
  {
    id: 'humber-asv',
    name: 'Humber ASV SeaForge (Autonomous Roboboat)',
    category: 'Hardware & Robotics',
    venue: 'Humber Polytechnic Marine Robotics Team',
    date: '2026',
    summary:
      'Autonomous surface vessel perception and telemetry stack connecting onboard camera + GPS sensors through an NVIDIA Jetson path-planning pipeline to motor actuation.',
    architectureNote:
      'Decoupled ROS2 sensor and actuation nodes validated in NVIDIA Isaac Sim prior to water trials, paired with secure MQTT remote telemetry and the team\'s React/TypeScript web platform.',
    stack: ['ROS2', 'NVIDIA Jetson', 'Isaac Sim', 'MQTT', 'React / TypeScript'],
    outcome: 'Sim-to-hardware pipeline + SeaForge team web platform',
    repoUrl: 'https://github.com/Gurpratap-Smagh/HumberASV-Website',
  },
  {
    id: 'safescan',
    name: 'SafeScan: RAG Food & Medical Safety Engine',
    category: 'Full-Stack & Web3',
    venue: 'IBM Z x Sheridan Datathon / Hackathon',
    date: 'May 2026',
    summary:
      'Led a 5-person team (mentoring first-time builders) to ship a barcode/name toxicity analyzer cross-referencing Open Food Facts, openFDA recalls, and user medical/allergy profiles.',
    architectureNote:
      'Next.js 14 + PostgreSQL/Prisma + deterministic risk scoring enriched with context-aware RAG follow-ups and httpOnly JWT sessions.',
    stack: ['Next.js 14', 'PostgreSQL', 'Prisma', 'RAG / LLM', 'openFDA'],
    outcome: 'Top 20 of 200 submissions (90% citation benchmark)',
    repoUrl: 'https://github.com/Gurpratap-Smagh/SafeScan',
    liveUrl: 'https://safe-scan-nine.vercel.app',
    postUrl: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7460019024597475328',
  },
  {
    id: 'chocolate-doom',
    name: 'Chocolate Doom Forensics Debugger Fork',
    category: 'Security & DFIR',
    venue: 'UMassCTF 2026 (Rank #45)',
    date: 'Apr 2026',
    summary:
      'Modified the legacy C Chocolate Doom codebase to recover game state from a corrupted .lmp demo recording without replaying from frame zero on every change.',
    architectureNote:
      'Injected TIC-level state pausing and +/-5 second YouTube-style timeline scrubbing directly into the emulator loop.',
    stack: ['C', 'Legacy Engine Mod', 'Binary/Format DFIR'],
    outcome: 'Eliminated full-restart debug cycles; full solve documented on Medium',
    postUrl: 'https://medium.com/@gsmag404/retro-forensics-ce78891370fb',
  },
  {
    id: 'givehub',
    name: 'GiveHub: Omnichain Crowdfunding DApp',
    category: 'Full-Stack & Web3',
    venue: 'ZetaChain x Google Cloud Buildathon',
    date: 'Sep 2025 to Jan 2026',
    summary:
      'Cross-chain crowdfunding platform supporting any ZRC-20 token on ZetaChain with live WebSocket donation feeds and Gemini AI campaign generation.',
    architectureNote:
      'Foundry-verified Solidity contracts integrated with Next.js + MongoDB, hardened post-launch with Slither + CodeQL CI/CD checks and dependency network auditing.',
    stack: ['Solidity', 'Foundry', 'ZetaChain', 'Next.js', 'Slither / CodeQL'],
    outcome: 'Live deployment + automated CI/CD security gating',
    repoUrl: 'https://github.com/Gurpratap-Smagh/Give-hub',
    liveUrl: 'https://give-hub-nngk.vercel.app/',
  },
  {
    id: 'fandrop',
    name: 'FanDrop: Apple & Google Wallet Fan Passport',
    category: 'Full-Stack & Web3',
    venue: 'Catalyst by Speer Hackathon (Track Winners)',
    date: 'Oct 2026',
    summary:
      'Replaced high-friction concert sign-up forms with a one-tap anonymous Apple Wallet & Google Wallet pass acting as a direct artist push-notification and loyalty layer.',
    architectureNote:
      'Signed .pkpass generation (node-forge PKCS#7 + fflate), PassKit device endpoints, RS256 Google Wallet JWTs, Drizzle SQL migrations, one-shot FanCam, and Vitest test coverage.',
    stack: ['TypeScript', 'Apple PassKit', 'Google Wallet API', 'Drizzle SQL', 'Vitest'],
    outcome: 'Track Winners after pitching founders Raine Maida & Mathew Mozaffari',
    photos: [
      {
        src: '/photos/hackathons/fandrop-wallet-ui.jpg',
        alt: 'FanDrop Apple and Google Wallet Passport UI',
        caption: 'Anonymous Fan Passport (FP-MMGH-G95B) with native Apple and Google Wallet actions.',
        location: 'Catalyst by Speer',
        date: 'Oct 18, 2026',
      },
    ],
  },
  {
    id: 'skillstake',
    name: 'SkillStake (Revenium Solana Anchor dApp)',
    category: 'Full-Stack & Web3',
    venue: 'Personal Solana & Rust Systems Build',
    date: 'Oct 2025',
    summary:
      'Solana Devnet dApp built around a Rust Anchor program where users mint SPL tokens, submit Keccak Proof-of-Work tasks, stake balances, and claim time-based rewards.',
    architectureNote:
      'Anchor Rust smart contract + custom IDL bindings + Next.js Phantom/Solflare wallet hooks (app/src/hooks/useSkillStakeProgram.ts).',
    stack: ['Rust', 'Solana Anchor', 'SPL Tokens', 'Next.js', 'TypeScript'],
    outcome: 'Live Solana Devnet deployment tested with Phantom wallet',
    repoUrl: 'https://github.com/Gurpratap-Smagh/revenium',
    liveUrl: 'https://revenium-app.vercel.app',
    photos: [
      {
        src: '/photos/web3/skillstake-phantom-devnet.jpg',
        alt: 'SkillStake connected to Phantom wallet on Solana Devnet',
        caption: 'SkillStake running on Solana Devnet with Phantom wallet connected (Oct 23, 2025).',
        location: 'Solana Devnet',
        date: 'Oct 23, 2025',
      },
    ],
  },
  {
    id: 'eth-hd-wallet',
    name: 'Ethereum BIP-32 HD Wallet Generator',
    category: 'Full-Stack & Web3',
    venue: 'Client-Side Cryptography & Web3 Tooling',
    date: 'Jul to Sep 2025',
    summary:
      'Client-side React wallet deriving unlimited BIP-32 Ethereum addresses from mnemonic seed phrases with Alchemy RPC balance checks and private-to-public key utilities.',
    architectureNote:
      'Zero server persistence: all seed derivation and key conversion execute locally in browser memory (23 commits).',
    stack: ['React', 'JavaScript', 'BIP-32 / Ethers', 'Alchemy RPC'],
    outcome: 'Live Vercel deployment with zero-persistence mnemonic derivation',
    repoUrl: 'https://github.com/Gurpratap-Smagh/etherium_wallet',
    liveUrl: 'https://etherium-wallet-rouge.vercel.app',
    postUrl: 'https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7355032614967099393',
    photos: [
      {
        src: '/photos/web3/eth-hd-wallet-live.jpg',
        alt: 'Bromskiii Ethereum HD Wallet web interface',
        caption: 'Live client-side BIP-32 wallet, RPC balance checker, and key converter.',
        location: 'Vercel Production',
        date: 'Sep 2025',
      },
    ],
  },
  {
    id: 'parasynth',
    name: 'Parasynth: Satellite Topography to SolidWorks CAD',
    category: 'Hardware & Robotics',
    venue: 'BramHacks 2025',
    date: 'Nov 2025',
    summary:
      'Software pipeline taking geographic coordinates, analyzing terrain topography via satellite data, and outputting parameterized SolidWorks designs for custom rover wheels.',
    architectureNote:
      'Co-architected the software extraction-to-CAD parameter bridge powering automated wheel geometry generation.',
    stack: ['Python', 'Topography Analysis', 'SolidWorks Parametric API'],
    outcome: 'Demonstrated live automated wheel generation at BramHacks 2025',
    photos: [
      {
        src: '/photos/bramhacks/bramhacks-team-frame.jpg',
        alt: 'Parasynth team at BramHacks 2025',
        caption: 'Team Parasynth presenting the terrain-adaptive SolidWorks wheel pipeline.',
        location: 'BramHacks 2025',
        date: 'Nov 2025',
      },
    ],
  },
  {
    id: 'safepass',
    name: '@gurpratap/safe-pass (Published Security Toolkit)',
    category: 'Security & DFIR',
    venue: 'Personal AppSec Release',
    date: 'Aug 2025',
    summary:
      'Lightweight policy-free npm package unifying configurable password entropy/weak-pattern checks, allow-list XSS filtering, and safe DOM rendering helpers.',
    architectureNote:
      'Exports setText, escapeHTML, and setSafeAttr primitives so developers enforce strict character allow-lists without opinionated framework lock-in.',
    stack: ['JavaScript', 'AppSec', 'XSS Defense', 'npm'],
    outcome: 'Published as npm install @gurpratap/safe-pass',
    postUrl: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7365836749194805249',
  },
  {
    id: 'agromart',
    name: 'Lovtiti Agro-Mart (Hedera Blockchain)',
    category: 'Full-Stack & Web3',
    venue: 'Hedera Africa Hackathon',
    date: 'Nov 2025',
    summary:
      'Decentralized farm-to-buyer marketplace removing middlemen for rural African producers using Hedera Consensus/Trust layers, Next.js, and Prisma.',
    architectureNote:
      'Built asynchronously across international timezones with Next.js frontend and Prisma/SQL persistence.',
    stack: ['Next.js', 'Hedera', 'Prisma', 'TypeScript'],
    outcome: 'Shipped live cross-timezone DoraHacks build',
    repoUrl: 'https://github.com/Gurpratap-Smagh/agro-mart',
    liveUrl: 'https://agro-mart-beta.vercel.app',
  },
  {
    id: 'spiderbotx',
    name: 'SpiderbotX: 4-Legged Obstacle-Avoiding Walker',
    category: 'Hardware & Robotics',
    venue: 'Humber Engineering Design Showcase (Barrett CTI)',
    date: 'Apr 2025',
    summary:
      'Four-legged walking robot utilizing Klann linkage kinematics, dual 12V motors (up to 10 kg payload), laser-cut chassis parts, and Arduino ultrasonic path avoidance.',
    architectureNote:
      'Designed mechanically in SolidWorks, laser-cut at Humber FAST, and programmed in C++ for real-time ultrasonic obstacle rerouting.',
    stack: ['SolidWorks', 'Klann Kinematics', 'Arduino C++', 'Ultrasonic Sensors'],
    outcome: 'Presented live at Humber Barrett CTI',
    postUrl: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7320986387892035584',
  },
];
