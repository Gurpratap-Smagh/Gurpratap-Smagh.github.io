import { ProofArtifact, SkillDomain, SkillNode } from './types';

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'detection',
    name: 'Detection & Threat Intel',
    tagline: 'Turning noisy sensor events into causal attacker clusters and MITRE ATT&CK profiles.',
  },
  {
    id: 'dfir',
    name: 'DFIR & Malware Analysis',
    tagline: 'Disk carving, emulator patching, enterprise log hunting, and live breach triage.',
  },
  {
    id: 'infra',
    name: 'CTF Ops & Adversary Sim',
    tagline: 'Global top-50 CTF execution, live production triage, and custom forensics authoring.',
  },
  {
    id: 'appsec',
    name: 'Zero-Trust & AppSec',
    tagline: 'Hardware-bound WebAuthn passkeys, CI/CD SAST gating, and policy-free input sanitization.',
  },
  {
    id: 'hardware',
    name: 'Embedded, FPGA & Robotics',
    tagline: 'Low-level C firmware, analog/optical sensors, ROS2 telemetry, and SolidWorks CAD.',
  },
  {
    id: 'systems',
    name: 'Full-Stack & Web3',
    tagline: 'Shipping React, Next.js, FastAPI, PostgreSQL, and Foundry-verified Solidity systems.',
  },
];

export const PROOF_ARTIFACTS: Record<string, ProofArtifact> = {
  'proof-honeypot-v2': {
    id: 'proof-honeypot-v2',
    title: 'L7 Honeypot Correlation Engine (Elasticsearch + Kibana + correlator.py)',
    kind: 'TELEMETRY',
    detail:
      'Public proxy -> WireGuard -> Raspberry Pi sink -> Fluent Bit -> Elasticsearch/Kibana. Deterministic 4-rule correlation across rotating IPs (1,900+ hits in 3 days; Cameroon + US cluster C-14ef4fe0a2).',
    anchorId: 'architecture',
    photoSrc: '/photos/omnipulse/kibana-geoip-demo.jpg',
  },
  'proof-honeypot-repo': {
    id: 'proof-honeypot-repo',
    title: 'hp-attack-panel (FastAPI + WebSocket Attack Harness)',
    kind: 'REPO',
    detail: 'Replayable FastAPI + WS attack panel firing verified exploit/lure sequences at localhost:8080.',
    url: 'https://github.com/Gurpratap-Smagh/hp-attack-panel',
  },
  'proof-ics-v1': {
    id: 'proof-ics-v1',
    title: 'V1 Locker CANDU / Siemens S7-1200 ICS Decoy + Conntrack Fix',
    kind: 'WRITEUP',
    detail:
      '7,856 attempts (1,481 unique IPs, 268x operator:scada2024). Solved SSH-tunnel jitter correlation failure using 5-tuple conntrack session sequencing.',
    anchorId: 'architecture',
  },
  'proof-raw-logs-article': {
    id: 'proof-raw-logs-article',
    title: 'From Raw Logs to TTPs (Causal Escalation & Clustering Breakdown)',
    kind: 'WRITEUP',
    detail:
      'Full technical breakdown covering lure:* vs primitive:* separation, MD5 header-order fingerprinting, entropy >4.8 bits/byte, and causal_escalation flagging.',
    anchorId: 'writeups',
  },
  'proof-hex-recovery': {
    id: 'proof-hex-recovery',
    title: 'AI Hardening Lockout & Manual SD Partition Hex Carving',
    kind: 'LINKEDIN',
    detail:
      'Reconstructed partition offsets and hex-carved logs from a Windows-corrupted Pi SD card without reflashing after an AI agent closed every inbound port.',
    url: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7439187001834127360',
    anchorId: 'stories',
  },
  'proof-chronicle-udm': {
    id: 'proof-chronicle-udm',
    title: 'Chronicle UDM Enterprise Threat Hunt (Humber SecOps Lab)',
    kind: 'TELEMETRY',
    detail:
      'Traced ADAPTIQ partner takeover, ntkd.exe/dbgeng.dll DLL sideloading, LSASS dump, DCSync Right GUID 1131f6ad-9c07-11d1-f79f-00c04fc2dcd2, and DNS/pixel exfil.',
    anchorId: 'architecture',
  },
  'proof-doom-fork': {
    id: 'proof-doom-fork',
    title: 'Chocolate Doom Forensics Fork + Retro Forensics Writeups',
    kind: 'WRITEUP',
    detail:
      'Patched legacy C Chocolate Doom emulator with TIC pausing & +/-5s scrubbing to solve corrupted .lmp forensics at UMassCTF 2026 (Rank 45).',
    url: 'https://medium.com/@gsmag404/retro-forensics-ce78891370fb',
  },
  'proof-tamuctf': {
    id: 'proof-tamuctf',
    title: 'GitHub Dangling Commits Research (TAMUctf Medium Writeup)',
    kind: 'WRITEUP',
    detail:
      'Demonstrated how unreferenced git objects, retained PR refs, and shared fork pools persist past GitHub deletion controls.',
    url: 'https://medium.com/@gsmag404/github-is-scary-the-illusion-of-deletion-9cccfe8c7fa8',
  },
  'proof-themctf-breach': {
    id: 'proof-themctf-breach',
    title: 'THEM?!CTF 2026 Live Incident Forensics & Post-Incident Playbook',
    kind: 'TELEMETRY',
    detail:
      'Analyzed auth.log, wtmp, /tmp/ssh-* agent sockets, and Flask after_request backdoor (_promote_them_team_member); drove Total Loss rebuild for 1,000+ players.',
    anchorId: 'stories',
  },
  'proof-france-finals': {
    id: 'proof-france-finals',
    title: 'Midnight Flag CTF EXECUTION 2026 Finals (Rennes, France)',
    kind: 'EVENT PHOTO',
    detail:
      '8th of 756+ qualifiers, 9th student / 14th overall on-site at ESNA Bretagne with AI tools banned. Probed hardware PCBs and chained OSINT pivots.',
    anchorId: 'institutional',
    photoSrc: '/photos/france/fault-injection-pcb.jpg',
  },
  'proof-holmes-osint': {
    id: 'proof-holmes-osint',
    title: 'Midnight Flag OSINT Solve: Chronicling America 1896 -> GitHub Pivot',
    kind: 'WRITEUP',
    detail:
      'Co-authored writeup tracing an 1896 H.H. Holmes newspaper confession across itch.io, Instagram code screenshot, and GitHub USER_PROFILES.',
    anchorId: 'writeups',
  },
  'proof-themctf-author': {
    id: 'proof-themctf-author',
    title: 'Authored Obfuscated & Blockchain DFIR Challenges (THEM?!CTF 2026)',
    kind: 'LINKEDIN',
    detail:
      'Built custom multi-layer forensics and on-chain + host artifact DFIR challenges for 1,000+ global competitors.',
    url: 'https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7455838189392580608',
  },
  'proof-supplychek': {
    id: 'proof-supplychek',
    title: 'SupplyChek: WebAuthn Biometric Passkeys & Zero-Trust Freight (3rd Place)',
    kind: 'EVENT PHOTO',
    detail:
      'Hardware-bound passkey signatures preventing fraudulent dispatch/bank reroutes at Brampton SecOps Hackathon.',
    anchorId: 'institutional',
    photoSrc: '/photos/bramsec/whiteboard-threat-model.jpg',
  },
  'proof-safepass': {
    id: 'proof-safepass',
    title: '@gurpratap/safe-pass (Published npm Security Package)',
    kind: 'LINKEDIN',
    detail:
      'Policy-free password entropy checker, character allow-list XSS filter, and safe DOM helpers (setText, escapeHTML, setSafeAttr).',
    url: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7365836749194805249',
  },
  'proof-cicd-hardening': {
    id: 'proof-cicd-hardening',
    title: 'GiveHub & Coursify Hardening (Slither, CodeQL, Helmet, Smuggling Fix)',
    kind: 'LINKEDIN',
    detail:
      'Added Slither + CodeQL static gates to GiveHub and synchronized Vercel/GCP packet-length configs against HTTP request smuggling.',
    url: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7412686999859433473',
  },
  'proof-illumiauth': {
    id: 'proof-illumiauth',
    title: 'IllumiAuth: FPGA Optical Environmental MFA',
    kind: 'REPO',
    detail:
      'LDR voltage divider + FPGA ADC sampling & digital noise filtering in low-level C + JSON UART stream + Java host lock.',
    url: 'https://github.com/Gurpratap-Smagh/Illumi-Auth',
  },
  'proof-humber-asv': {
    id: 'proof-humber-asv',
    title: 'Humber ASV SeaForge (ROS2 + NVIDIA Jetson + Isaac Sim)',
    kind: 'REPO',
    detail:
      'Sensor-to-actuation ROS2 architecture validated in Isaac Sim with onboard Jetson obstacle/path pipeline, GPS, and MQTT telemetry.',
    url: 'https://github.com/Gurpratap-Smagh/HumberASV-Website',
  },
  'proof-spiderbot': {
    id: 'proof-spiderbot',
    title: 'SpiderbotX & Parasynth (SolidWorks, Klann Linkage, Arduino)',
    kind: 'EVENT PHOTO',
    detail:
      '10 kg four-legged obstacle-avoiding walker + BramHacks automated SolidWorks terrain-wheel generator.',
    anchorId: 'builds',
    photoSrc: '/photos/bramhacks/bramhacks-team-frame.jpg',
  },
  'proof-safescan': {
    id: 'proof-safescan',
    title: 'SafeScan: RAG Barcode Toxicity Engine (IBM Z Top 20/200)',
    kind: 'LIVE DEMO',
    detail: 'Next.js 14 + PostgreSQL + openFDA recall correlation + JWT httpOnly sessions.',
    url: 'https://safe-scan-nine.vercel.app',
  },
  'proof-givehub': {
    id: 'proof-givehub',
    title: 'GiveHub: Omnichain Crowdfunding DApp (ZetaChain + Foundry + Next.js)',
    kind: 'LIVE DEMO',
    detail: 'Cross-chain ZRC-20 donations verified with Foundry CLI, live WebSockets, and Gemini campaign studio.',
    url: 'https://give-hub-nngk.vercel.app/',
  },
  'proof-agromart': {
    id: 'proof-agromart',
    title: 'Lovtiti Agro-Mart (Hedera Africa Hackathon, Next.js + Prisma)',
    kind: 'LIVE DEMO',
    detail: 'Decentralized agricultural marketplace built across distributed international timezones.',
    url: 'https://agro-mart-beta.vercel.app',
  },
  'proof-fandrop-wallet': {
    id: 'proof-fandrop-wallet',
    title: 'FanDrop Apple & Google Wallet Integration (Catalyst Track Winner)',
    kind: 'REPO',
    detail:
      'Signed .pkpass (node-forge PKCS#7 + fflate), PassKit endpoints, RS256 Google Wallet JWTs, Drizzle migrations, and whiteboard flow pitched to founders Raine Maida & Mathew Mozaffari.',
    anchorId: 'hackathons',
  },
  'proof-skillstake': {
    id: 'proof-skillstake',
    title: 'SkillStake / Revenium (Solana Rust + Anchor Devnet Staking)',
    kind: 'LIVE DEMO',
    detail:
      'Anchor program + Next.js Phantom/Solflare wallet dApp with SPL token faucet, Keccak Proof-of-Work rewards, and Devnet IDL integration.',
    url: 'https://revenium-app.vercel.app',
  },
  'proof-eth-wallet': {
    id: 'proof-eth-wallet',
    title: 'Ethereum BIP-32 HD Wallet Generator & Key Converter',
    kind: 'LIVE DEMO',
    detail:
      'Client-side deterministic HD wallet derivation, Alchemy RPC balance check, and private-to-public key tools (23 commits).',
    url: 'https://etherium-wallet-rouge.vercel.app',
  },
  'proof-hackathon-softskills': {
    id: 'proof-hackathon-softskills',
    title: 'Scope Pruning, Mentor Synthesis & Virtual Team Co-Leadership',
    kind: 'EVENT PHOTO',
    detail:
      'Cut 12 SupplyChek features down to 1 signing hook after Day 2 mentor feedback; mentored first-timers in SafeScan; synced async Canada <-> Africa sprints in Agro-Mart.',
    anchorId: 'hackathons',
    photoSrc: '/photos/hackathons/achievaflow-stage.jpg',
  },
  'proof-gfact': {
    id: 'proof-gfact',
    title: 'GIAC GFACT & ISC2 CC Certifications',
    kind: 'CERT',
    detail: 'GFACT (Oct 2026 to Oct 2030 via CyberStart 4th place) + ISC2 CC (License 2688611) + Google Cybersecurity.',
    url: 'https://www.credly.com/badges/33ff7ea8-5a30-4124-a3ab-2397609e99a3',
    anchorId: 'credentials',
  },
  'proof-cyberstart-top': {
    id: 'proof-cyberstart-top',
    title: 'Rogers CyberStart Canada Top Performer & 16-Event CTF Track Record',
    kind: 'CERT',
    detail:
      'Picked up a CyberStart card at BramHacks (Nov 2025) -> 200+ consecutive TryHackMe days -> 4th in CyberStart CTF -> SANS GFACT (Credly verified) -> THEM?! #46 global.',
    url: 'https://www.credly.com/badges/33ff7ea8-5a30-4124-a3ab-2397609e99a3',
    anchorId: 'ctfs',
  },
};

export const SKILL_NODES: SkillNode[] = [
  // Detection & Threat Intel
  {
    id: 'sk-elastic',
    name: 'Elasticsearch & Kibana SIEM',
    domainId: 'detection',
    levelNote: 'Live L7 ingest, Point-in-Time correlation & GeoIP dashboards',
    proofIds: ['proof-honeypot-v2', 'proof-raw-logs-article'],
  },
  {
    id: 'sk-fluentbit',
    name: 'Fluent Bit & Telemetry Pipelines',
    domainId: 'detection',
    levelNote: 'Sensor log shipping over encrypted WireGuard tunnels',
    proofIds: ['proof-honeypot-v2', 'proof-honeypot-repo'],
  },
  {
    id: 'sk-mitre',
    name: 'MITRE ATT&CK & Causal Correlation',
    domainId: 'detection',
    levelNote: 'lure:* vs primitive:* behavioral clustering & zero-day escalation',
    proofIds: ['proof-raw-logs-article', 'proof-honeypot-v2', 'proof-chronicle-udm'],
  },
  {
    id: 'sk-ics',
    name: 'OT / ICS & Modbus Decoys',
    domainId: 'detection',
    levelNote: 'CANDU Siemens S7-1200 (port 102) & PCOM Unitronics simulation',
    proofIds: ['proof-ics-v1', 'proof-hex-recovery'],
  },
  {
    id: 'sk-wireguard',
    name: 'WireGuard, iptables & Conntrack',
    domainId: 'detection',
    levelNote: 'Private sink isolation & 5-tuple NAT session attribution',
    proofIds: ['proof-honeypot-v2', 'proof-ics-v1'],
  },

  // DFIR & Malware Analysis
  {
    id: 'sk-chronicle',
    name: 'Google SecOps / Chronicle UDM',
    domainId: 'dfir',
    levelNote: 'Multi-host AD lateral movement, DLL sideloading & exfil hunting',
    proofIds: ['proof-chronicle-udm'],
  },
  {
    id: 'sk-carving',
    name: 'Disk & Partition Hex Carving',
    domainId: 'dfir',
    levelNote: 'Reconstructed corrupted Pi SD card offsets without reflashing',
    proofIds: ['proof-hex-recovery', 'proof-ics-v1'],
  },
  {
    id: 'sk-c-reversing',
    name: 'C Codebase Patching & Memory DFIR',
    domainId: 'dfir',
    levelNote: 'Chocolate Doom TIC-level forensics tooling at UMassCTF (Rank 45)',
    proofIds: ['proof-doom-fork'],
  },
  {
    id: 'sk-live-ir',
    name: 'Live Breach IR (auth.log / wtmp)',
    domainId: 'dfir',
    levelNote: 'THEM?!CTF Total Loss triage, socket staging & backdoor discovery',
    proofIds: ['proof-themctf-breach', 'proof-tamuctf'],
  },
  {
    id: 'sk-malware-vm',
    name: 'Hardened Malware Analysis VMs',
    domainId: 'dfir',
    levelNote: 'Anti-sandbox Windows VM + REMnux/tcpdump capture + FLOSS/PEStudio',
    proofIds: ['proof-gfact', 'proof-chronicle-udm'],
  },

  // CTF Ops & Adversary Sim
  {
    id: 'sk-hardware-ctf',
    name: 'Hardware Probing & Fault Injection',
    domainId: 'infra',
    levelNote: 'AI-banned international finals at ESNA de Bretagne, France',
    proofIds: ['proof-france-finals'],
  },
  {
    id: 'sk-osint',
    name: 'Cross-Platform OSINT Pivoting',
    domainId: 'infra',
    levelNote: 'Archive dorking -> itch.io -> Instagram -> GitHub username pivots',
    proofIds: ['proof-holmes-osint', 'proof-france-finals'],
  },
  {
    id: 'sk-ctf-infra',
    name: 'Live Event Infra Ops (1,000+ Users)',
    domainId: 'infra',
    levelNote: 'Real-time VPN/server triage, conflict mediation & playbooks',
    proofIds: ['proof-themctf-breach', 'proof-themctf-author', 'proof-cyberstart-top'],
  },
  {
    id: 'sk-chall-dev',
    name: 'DFIR & Web3 Challenge Authoring',
    domainId: 'infra',
    levelNote: 'Custom on-chain + host forensics problems for THEM?!CTF 2026',
    proofIds: ['proof-themctf-author'],
  },

  // Zero-Trust & AppSec
  {
    id: 'sk-webauthn',
    name: 'WebAuthn Passkeys & Threat Modeling',
    domainId: 'appsec',
    levelNote: 'SupplyChek dispatch signing (3rd Place, Brampton SecOps)',
    proofIds: ['proof-supplychek'],
  },
  {
    id: 'sk-xss-npm',
    name: 'Input Validation & npm Tooling',
    domainId: 'appsec',
    levelNote: 'Authored @gurpratap/safe-pass & fixed GCP/Vercel HTTP smuggling',
    proofIds: ['proof-safepass', 'proof-cicd-hardening'],
  },
  {
    id: 'sk-sast',
    name: 'CI/CD SAST (Slither & CodeQL)',
    domainId: 'appsec',
    levelNote: 'Automated smart-contract & dependency auditing pipelines',
    proofIds: ['proof-cicd-hardening', 'proof-givehub'],
  },

  // Embedded, FPGA & Robotics
  {
    id: 'sk-fpga',
    name: 'FPGA, ADC & Low-Level C / UART',
    domainId: 'hardware',
    levelNote: 'IllumiAuth optical environmental MFA with live JSON serial telemetry',
    proofIds: ['proof-illumiauth'],
  },
  {
    id: 'sk-ros2',
    name: 'ROS2, NVIDIA Jetson & Isaac Sim',
    domainId: 'hardware',
    levelNote: 'Humber ASV SeaForge autonomous boat perception & MQTT control',
    proofIds: ['proof-humber-asv'],
  },
  {
    id: 'sk-cad',
    name: 'SolidWorks, Klann Kinematics & Arduino',
    domainId: 'hardware',
    levelNote: '10 kg SpiderbotX walker & Parasynth satellite-to-CAD pipeline',
    proofIds: ['proof-spiderbot'],
  },

  // Full-Stack & Web3
  {
    id: 'sk-react-next',
    name: 'React, Next.js 14 & TypeScript',
    domainId: 'systems',
    levelNote: 'Production hackathons & live Vercel apps across 7+ builds',
    proofIds: ['proof-safescan', 'proof-givehub', 'proof-agromart', 'proof-fandrop-wallet'],
  },
  {
    id: 'sk-wallet-passes',
    name: 'Apple Wallet (.pkpass) & Google Wallet JWTs',
    domainId: 'systems',
    levelNote: 'PKCS#7 signing, PassKit web service & RS256 Wallet passes (Track Winner)',
    proofIds: ['proof-fandrop-wallet', 'proof-hackathon-softskills'],
  },
  {
    id: 'sk-python-api',
    name: 'Python (FastAPI / Correlation Daemons)',
    domainId: 'systems',
    levelNote: 'SQLite state correlation worker + live WebSocket attack harness',
    proofIds: ['proof-honeypot-v2', 'proof-honeypot-repo'],
  },
  {
    id: 'sk-solidity',
    name: 'Solidity, Solana Anchor, Hedera & BIP-32 Web3',
    domainId: 'systems',
    levelNote: 'ZetaChain ZRC-20, Solana Rust/Anchor, Hedera trust layer & HD wallets',
    proofIds: ['proof-givehub', 'proof-skillstake', 'proof-eth-wallet', 'proof-agromart', 'proof-cicd-hardening'],
  },
  {
    id: 'sk-softskills',
    name: 'Technical Co-Leadership, Scope Cuts & Mentoring',
    domainId: 'systems',
    levelNote: 'Whiteboard alignment, Day-2 pruning, and mentoring first-time hackathon teams',
    proofIds: ['proof-hackathon-softskills', 'proof-fandrop-wallet', 'proof-supplychek', 'proof-cyberstart-top'],
  },
];
