export interface ConferenceItem {
  id: string;
  date: string;
  event: string;
  location: string;
  takeaway: string;
}

export const CONFERENCES_LIST: ConferenceItem[] = [
  {
    id: 'conf-catalyst-summit',
    date: '2026',
    event: 'Rogers Cybersecure Catalyst Summit',
    location: 'Toronto, ON',
    takeaway:
      'Heard Bruce Schneier break down how agentic AI lowers attacker cost curves, speeds up vulnerability discovery, and pushes defense toward automated verification.',
  },
  {
    id: 'conf-ontario-cyber',
    date: 'Nov 2026',
    event: "Ontario's 2026 Cyber Security Summit",
    location: 'Toronto, ON',
    takeaway:
      'Represented Humber Polytechnic on stage and in provincial competition sessions.',
  },
  {
    id: 'conf-toronto-global-forum',
    date: 'Oct 2026',
    event: 'Toronto Global Forum · 20th Anniversary (World Trade Centre)',
    location: 'Toronto, ON',
    takeaway:
      'Heard AI & automation insights from industry speakers including Nick Frosst (Cohere), Calista Redmond (NVIDIA), Andrej Zdravkovic (AMD), and Cyril Perducat (Rockwell Automation).',
  },
  {
    id: 'conf-omnipulse',
    date: 'Nov 2026',
    event: 'OmniPulse Tech 2026 Showcase',
    location: 'Humber Barrett CTI',
    takeaway:
      'Showcased live L7 Honeypot telemetry (Raspberry Pi -> WireGuard -> Fluent Bit -> Elasticsearch, 1,900+ requests over 3 days).',
  },
  {
    id: 'conf-ngen-n3',
    date: 'Apr 2026',
    event: 'NGen Canada N3 Summit',
    location: 'Ontario (Youth Culture & Humber)',
    takeaway:
      'Served as Student Ambassador conducting technical floor interviews across industrial AI, 3D CAD, micro-nuclear, quantum, and marine robotics booths.',
  },
  {
    id: 'conf-sector-dc416',
    date: '2025 to 2026',
    event: 'SecTor & DEFCON Toronto (DC416)',
    location: 'Toronto, ON',
    takeaway:
      'Attended enterprise security & OT/ICS briefings on Modbus register exposure and perimeter blind spots.',
  },
];
