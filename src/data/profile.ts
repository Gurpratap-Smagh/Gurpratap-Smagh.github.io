import { CertificationItem } from './types';

export const PROFILE = {
  fullName: 'Gurpratap Karn Singh Smagh',
  shortName: 'Gurpratap Smagh',
  handle: 'bromskiii / @gsmag404',
  headline: 'Security Engineering, DFIR & Institutional Representation',
  subheadline:
    'B.Eng. Information Systems student at Humber Polytechnic (Dean\'s List Semesters 1 to 4, 87.9% GPA). Representing Humber on international CTF stages in France, showcasing live threat-intel correlation engines, and shipping verified systems across OT/ICS security, forensics, and zero-trust software.',
  location: 'Etobicoke / Toronto, ON',
  availability: 'Seeking 4, 8, or 12-month Co-op starting Summer 2027',
  email: 'gurpratap2007@gmail.com',
  links: {
    github: 'https://github.com/Gurpratap-Smagh',
    linkedin: 'https://www.linkedin.com/in/Gurpratap-Smagh/',
    medium: 'https://medium.com/@gsmag404',
    ctftimeUser: 'https://ctftime.org/user/248925',
    ctftimeTeam: 'https://ctftime.org/team/387399',
  },
  education: {
    institution: 'Humber Polytechnic',
    faculty: 'Faculty of Applied Sciences & Technology (FAST) / Barrett CTI',
    degree: 'Bachelor of Engineering, Information Systems',
    timeline: 'Aug 2024 to May 2029 (Expected)',
    gpa: '87.9%',
    standing: 'Dean\'s Honour List, Semesters 1 to 4',
    funding: 'Employability Experience Fund (EEF) Scholarship & FAST Travel Sponsorship',
  },
  heroStats: [
    {
      value: '8th -> 14th',
      label: 'Midnight Flag CTF Finals (France)',
      detail: '8th of 756+ qualifiers, 9th student / 14th overall on-site at ESNA Bretagne',
      accent: 'gold' as const,
    },
    {
      value: '#46 Global',
      label: 'CTF Player @ THEM?!',
      detail: 'CTFtime #46 to #51 global ranking (2026), picoCTF 7th of 8,747 teams',
      accent: 'teal' as const,
    },
    {
      value: 'Track Win · 1st · 3rd',
      label: 'Hackathon Podiums',
      detail: 'FanDrop Track Winner, 1st AchievaFlow, 3rd Brampton SecOps ($1,000), Top 20/200 IBM Z',
      accent: 'gold' as const,
    },
    {
      value: '1,900+ / 7,856',
      label: 'Live Threat Telemetry',
      detail: 'V2 L7 correlation engine + V1 locker ICS honeypot (1,481 attacker IPs)',
      accent: 'orange' as const,
    },
  ],
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: 'GIAC Foundational Cybersecurity Technologies (GFACT)',
    issuer: 'GIAC / SANS Institute (CyberStart Top Performer Scholarship)',
    issued: 'Oct 2026 to Oct 2030',
    note: 'Earned via CyberStart Canada Top Performer scholarship (4th in CyberStart Canada CTF, 200+ day TryHackMe streak).',
  },
  {
    name: 'Certified in Cybersecurity (CC)',
    issuer: 'ISC2',
    issued: 'Jun 2025 to Jun 2028',
    credentialId: 'License 2688611',
    url: 'https://www.credly.com/badges/1e6ca903-3e17-4a31-b6a8-3966ec4aec76/public_url',
    note: 'Verified security operations, access control, incident response, and network defense credential.',
  },
  {
    name: 'Google Cybersecurity Specialization',
    issuer: 'Google / Coursera',
    issued: 'May 2025',
    credentialId: '5WGL1OJ9B85U',
    url: 'https://www.coursera.org/account/accomplishments/specialization/5WGL1OJ9B85U',
    note: 'Foundations in SIEM triage, Linux, SQL, Python log automation, and packet inspection.',
  },
  {
    name: 'TryHackMe Cyber Security 101 & CyberStart Intro Pathway',
    issuer: 'TryHackMe',
    issued: 'Jun 2025 & Dec 2025',
    credentialId: 'THM-3SJ75E1SJY / THM-NJUMPMQAFZ',
    url: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-3SJ75E1SJY.pdf',
    note: '43h 53m CyberStart pathway plus 200+ consecutive days of hands-on labs.',
  },
  {
    name: 'Cyber Job Simulation',
    issuer: 'Deloitte Australia (Forage)',
    issued: 'Jun 2025',
    credentialId: 'u6cajdiyYkxvzGfhR',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_yYsa8yHX6LDfAWnQ6_1749933394070_completion_certificate.pdf',
    note: 'Log anomaly triage and breach impact analysis simulation.',
  },
];
