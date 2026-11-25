export interface ConferenceItem {
  id: string;
  date: string;
  event: string;
  location: string;
  roleOrFocus: string;
  takeaway: string;
  photo?: string;
  photoAlt?: string;
}

export const CONFERENCES_LIST: ConferenceItem[] = [
  {
    id: 'conf-catalyst-summit',
    date: 'Nov 2026',
    event: "Rogers Cybersecure Catalyst Summit / Ontario's 2026 Cyber Security Summit",
    location: 'Toronto, ON',
    roleOrFocus: 'Competitor Stage & AI Security Keynotes',
    takeaway:
      'Heard Bruce Schneier break down how agentic AI shifts the cyber offense-defense balance: lowering attacker cost curves, automating vulnerability discovery at machine speed, and forcing defenders toward automated patching and verification.',
    photo: '/photos/conferences/catalyst-cyber-summit-stage.jpg',
    photoAlt: "Gurpratap on stage during Ontario's 2026 Cyber Security Summit",
  },
  {
    id: 'conf-toronto-global-forum',
    date: 'Oct 21 to 23, 2026',
    event: 'Toronto Global Forum (20th Anniversary · World Trade Centre)',
    location: 'Toronto, ON',
    roleOrFocus: 'Enterprise AI & Infrastructure Delegate',
    takeaway:
      'Heard practical AI insights from industry speakers including Nick Frosst (Cohere), Calista Redmond (NVIDIA), Andrej Zdravkovic (AMD), and Cyril Perducat (Rockwell Automation) on automation and production deployment.',
    photo: '/photos/conferences/toronto-global-forum.jpg',
    photoAlt: 'Gurpratap at the Toronto Global Forum 20th Anniversary backdrop',
  },
  {
    id: 'conf-omnipulse',
    date: 'Nov 4, 2026',
    event: 'OmniPulse Tech 2026 Showcase',
    location: 'Humber Barrett CTI, Toronto',
    roleOrFocus: 'Live Exhibitor · V2 L7 Honeypot at Expo',
    takeaway:
      'Demonstrated my stateless Raspberry Pi -> WireGuard -> Fluent Bit -> Elasticsearch causal correlation engine live, tracking 1,900+ requests across 3 days.',
    photo: '/photos/omnipulse/kibana-geoip-demo.jpg',
    photoAlt: 'Demonstrating live Kibana GeoIP telemetry at OmniPulse Tech 2026',
  },
  {
    id: 'conf-ngen-n3',
    date: 'Apr 2026',
    event: 'NGen Canada N3 Advanced Manufacturing Summit',
    location: 'Ontario (Youth Culture & Humber)',
    roleOrFocus: 'Student Ambassador & Technical Interviewer',
    takeaway:
      'Conducted technical floor interviews across industrial AI, 3D CAD reverse engineering, wearable telemetry, micro-nuclear, quantum, and autonomous marine booths.',
    photo: '/photos/n3summit/n3-interview-sycodal.jpg',
    photoAlt: 'Gurpratap representing Humber at the NGen N3 Summit',
  },
  {
    id: 'conf-defcon-sector',
    date: 'Feb 2026',
    event: 'DEFCON Toronto (DC416) & SecTor Community Briefings',
    location: 'Toronto, ON',
    roleOrFocus: 'OT/ICS Defense Field Notes',
    takeaway:
      'Analyzed why perimeter-only network defenses fail against direct Modbus register writes and lateral movement inside industrial environments.',
  },
];
