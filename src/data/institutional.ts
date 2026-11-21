import { InstitutionalMilestone } from './types';

export const INSTITUTIONAL_MILESTONES: InstitutionalMilestone[] = [
  {
    id: 'midnight-flag-france',
    badge: 'INTERNATIONAL FINALS · HUMBER FAST SPONSORED',
    tier: 'international',
    title: 'Midnight Flag CTF EXECUTION 2026 Finals',
    organization: 'Representing Humber Polytechnic with THEM?! at ESNA de Bretagne',
    date: 'June 12 to 16, 2026',
    location: 'Rennes / Bruz, France',
    outcomeMetric: '8th of 756+ Qualifiers · 17 Finalist Teams On-Site · 9th Student / 14th Overall',
    summary:
      'Selected for the on-site finals in France hosted at ESNA de Bretagne (Ecole Superieure du Numerique de l\'Armee, backed by French Intelligence / DGSE). As the sole Canadian engineering student competing with globally ranked team THEM?!, I pitched Humber Polytechnic\'s Faculty of Applied Sciences & Technology and secured full travel backing plus the Employability Experience Fund (EEF) scholarship.',
    whyItMatters:
      'AI tools were completely banned in the arena. Everything came down to raw hardware probing, side-channel/PCB debugging, live OSINT pivoting, and multi-hour in-person persistence alongside teammates I had only ever known through Discord.',
    externalLinks: [
      { label: 'Team THEM?! on CTFtime', url: 'https://ctftime.org/team/387399' },
      { label: 'EEF Scholarship Post', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7481873888939806720' },
      { label: 'Qualification Announcement', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7441651676404572160' },
    ],
    photos: [
      {
        src: '/photos/france/esna-group-finale.jpg',
        alt: 'Midnight Flag CTF 2026 finalists inside the ESNA Bretagne amphitheatre',
        caption: 'All 17 finalist teams inside the ESNA de Bretagne amphitheatre after the Midnight Flag EXECUTION finals.',
        location: 'ESNA de Bretagne, Bruz, France',
        date: 'Jun 14, 2026',
      },
      {
        src: '/photos/france/hardware-bench-humber.jpg',
        alt: 'Gurpratap in Humber Polytechnic shirt at the hardware CTF bench in France',
        caption: 'Working the hardware workbench in Humber Polytechnic gear during the on-site finals.',
        location: 'ESNA Bretagne Arena',
        date: 'Jun 13, 2026',
      },
      {
        src: '/photos/france/fault-injection-pcb.jpg',
        alt: 'Close-up of PCB probing and jumper wiring during Midnight Flag hardware challenges',
        caption: 'Hands-on PCB probing and logic analyzer wiring during AI-free hardware fault-injection challenges.',
        location: 'Rennes Finals Bench',
        date: 'Jun 13, 2026',
      },
      {
        src: '/photos/france/ctf-table-grind.jpg',
        alt: 'Midnight Flag CTF teammates collaborating at competition table',
        caption: 'In-person coordination at the THEM?! table: meeting distributed international teammates face to face for the first time.',
        location: 'ESNA Bretagne Floor',
        date: 'Jun 13, 2026',
      },
    ],
  },
  {
    id: 'omnipulse-2026',
    badge: 'INSTITUTIONAL SHOWCASE · HUMBER BARRETT CTI',
    tier: 'research',
    title: 'OmniPulse Tech 2026: Live L7 Honeypot & Threat-Intel Platform',
    organization: 'Humber Polytechnic Barrett Centre for Technology Innovation',
    date: 'November 2026',
    location: 'Humber Polytechnic Atrium, Etobicoke, ON',
    outcomeMetric: '1,900+ Live Requests in 3 Days · Multi-Country Actor Attribution',
    summary:
      'Showcased a complete operational threat-intelligence pipeline running live at Humber\'s Barrett CTI Atrium: public reverse proxy into a WireGuard tunnel, Raspberry Pi sensor sink, Fluent Bit shipper, and private Elasticsearch/Kibana SIEM powered by a custom Python correlation engine.',
    whyItMatters:
      'Visitors and faculty watched live public internet traffic hitting the sensor, turning raw HTTP requests and .env/Androxgh0st scans into clustered MITRE ATT&CK attacker profiles without exposing a single internal SIEM port.',
    externalLinks: [
      { label: 'Attack Trigger Panel Repo', url: 'https://github.com/Gurpratap-Smagh/hp-attack-panel' },
    ],
    photos: [
      {
        src: '/photos/omnipulse/kibana-geoip-demo.jpg',
        alt: 'Demonstrating live Kibana GeoIP threat telemetry at OmniPulse Tech 2026',
        caption: 'Presenting the live Kibana GeoIP map showing real attacker traffic hitting the honeypot pipeline.',
        location: 'Humber Polytechnic Atrium',
        date: 'Nov 4, 2026',
      },
      {
        src: '/photos/omnipulse/atrium-showcase-pitch.jpg',
        alt: 'Explaining correlation architecture to attendees at OmniPulse 2026 Conference',
        caption: 'Walking industry visitors and Humber peers through causal escalation and header-order fingerprinting.',
        location: 'OmniPulse 2026 Conference',
        date: 'Nov 4, 2026',
      },
    ],
  },
  {
    id: 'brampton-secops-2026',
    badge: '3RD PLACE PODIUM · HUMBER BARRETT CTI HUB',
    tier: 'institutional',
    title: 'Brampton SecOps Hackathon: SupplyChek Zero-Trust Freight',
    organization: 'City of Brampton, Rogers Cybersecure Catalyst & TMU',
    date: 'September 2026',
    location: 'Brampton Innovation District, ON',
    outcomeMetric: '3rd Place Overall ($1,000) · Awarded by Deputy Mayor & MP Recognition',
    summary:
      'Represented Humber\'s Barrett CTI Digital Technology Hub and led threat modeling plus secure-by-design architecture for SupplyChek: a zero-trust dispatch verification system built to stop freight hijacking via fraudulent carrier, address, and bank-detail reroutes.',
    whyItMatters:
      'Instead of pitching generic dashboards, we threat-modeled the exact dispatch-to-driver trust gap and wired hardware-bound WebAuthn biometric passkeys so every high-risk shipment mutation carries a cryptographic signature and tamper-evident audit log before a driver ever sees it.',
    externalLinks: [],
    photos: [
      {
        src: '/photos/bramsec/supplychek-stage-pitch.jpg',
        alt: 'Team presenting SupplyChek on stage at Brampton SecOps Hackathon',
        caption: 'Presenting SupplyChek\'s zero-trust freight verification architecture to judges and C-suite mentors.',
        location: 'Rogers Cybersecure Catalyst',
        date: 'Sep 2026',
      },
      {
        src: '/photos/bramsec/podium-3rd-place-check.jpg',
        alt: 'Brampton SecOps 3rd place check ceremony with organizers',
        caption: '3rd Place podium finish ($1,000) alongside Rogers Cybersecure Catalyst and City of Brampton organizers.',
        location: 'Brampton Innovation District',
        date: 'Sep 2026',
      },
      {
        src: '/photos/bramsec/whiteboard-threat-model.jpg',
        alt: 'Whiteboard threat modeling session for SupplyChek',
        caption: 'Mapping trust boundaries and cryptographic dispatch verification states before writing a line of code.',
        location: 'Brampton SecOps Sprint Room',
        date: 'Sep 2026',
      },
    ],
  },
  {
    id: 'ngen-n3-summit-2026',
    badge: 'INSTITUTIONAL AMBASSADOR · NGEN CANADA',
    tier: 'institutional',
    title: 'NGen Canada N3 Summit Ambassador',
    organization: 'Youth Culture Inc. & Humber Polytechnic Delegation',
    date: 'April 2026',
    location: 'Ontario, Canada',
    outcomeMetric: 'Direct Industry Field Briefings Across 6 Deep-Tech Verticals',
    summary:
      'Selected as an ambassador representing Youth Culture Inc. and Humber engineering at NGen Canada\'s N3 Advanced Manufacturing Summit. Conducted live technical interviews and security-surface assessments across industrial AI, 3D reverse-engineering scanners, direct-contact wearable telemetry, micro-nuclear reactors, Bosonic quantum computing, and autonomous marine vessels.',
    whyItMatters:
      'Bridged embedded systems engineering with adversarial threat thinking on the expo floor: evaluating how moving compute onto direct-contact wearables or scanning physical components into CAD creates unmediated physical-layer attack surfaces.',
    externalLinks: [
      { label: 'Full N3 Summit Technical Breakdown', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7445638985227522048' },
    ],
    photos: [
      {
        src: '/photos/n3summit/n3-interview-sycodal.jpg',
        alt: 'Gurpratap being interviewed in front of Sycodal robotics booth at N3 Summit',
        caption: 'On-floor ambassador interview discussing industrial automation and robotics integration.',
        location: 'NGen N3 Summit Floor',
        date: 'Apr 2026',
      },
    ],
  },
  {
    id: 'ongov-ctf-and-humbers',
    badge: 'REGIONAL & CAMPUS PODIUMS',
    tier: 'national',
    title: 'Ontario Gov CTF 2026, AchievaFlow (1st Place) & BramHacks',
    organization: 'Humber Polytechnic & Provincial Competitions',
    date: 'Oct 2025 to Nov 2026',
    location: 'Ontario, Canada',
    outcomeMetric: '1st Place AchievaFlow · ON Gov CTF 2026 · BramHacks Space/CAD Sprint',
    summary:
      'Consistent institutional representation across Ontario: competing at Ontario\'s Cyber Security CTF Competition (2026 Edition), winning 1st Place at Humber\'s AchievaFlow Data Drive Hackathon (Longo Centre for Entrepreneurship) with a cross-disciplinary engineering + medical pitch, and building Parasynth (satellite topography to SolidWorks CAD automation) at BramHacks 2025.',
    whyItMatters:
      'Winning with non-technical judges and cross-disciplinary teams forced clear translation of technical pipelines into concrete business and operational impact.',
    externalLinks: [
      { label: 'AchievaFlow 1st Place Post', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7386165642455851009' },
      { label: 'BramHacks Parasynth Post', url: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7393857701145096192' },
    ],
    photos: [
      {
        src: '/photos/ongov/ontario-cyber-summit-stage.jpg',
        alt: 'Gurpratap on stage during Ontario 2026 Cyber Security Summit session',
        caption: 'On stage during Ontario\'s 2026 Cyber Security Summit.',
        location: 'Ontario Cyber Security Summit',
        date: 'Nov 10, 2026',
      },
      {
        src: '/photos/hackathons/achievaflow-stage.jpg',
        alt: 'AchievaFlow 1st Place stage lineup with Humber Longo Centre team and organizers',
        caption: '1st Place team stage lineup at AchievaFlow Data Drive Hackathon (Humber Longo Centre).',
        location: 'Longo Centre Stage',
        date: 'Oct 20, 2025',
      },
      {
        src: '/photos/bramhacks/bramhacks-team-frame.jpg',
        alt: 'BramHacks 2025 team photo with Parasynth laptop demo',
        caption: 'Team Parasynth at BramHacks 2025: automated SolidWorks terrain-wheel pipeline.',
        location: 'Brampton, ON',
        date: 'Nov 2025',
      },
    ],
  },
];
