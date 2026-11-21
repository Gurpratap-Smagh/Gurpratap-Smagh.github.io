import { CtfChallengeType, CtfRecord } from './types';

export const CYBERSTART_ARC = {
  badge: 'ROGERS CYBERSECURE CATALYST · TMU · TOP PERFORMER',
  headline: 'It Started With a Card at a Booth',
  period: 'Nov 2025 to Oct 2026',
  summary:
    'Picked up a CyberStart Canada flyer card at a BramHacks booth in November 2025, applied on the spot, and kept showing up. Chained 200+ consecutive daily TryHackMe sessions (completing the 43h 53m CyberStart Canada 25/26 Introductory Pathway, THM-NJUMPMQAFZ, Dec 19, 2025) across web exploitation, digital forensics, OSINT, reverse engineering, and SOC triage. Finished 4th in the CyberStart Canada CTF, earned Top Performer recognition and the SANS scholarship, and passed GIAC GFACT on Oct 27, 2026 (Analyst #8458). That fundamentals runway directly powered joining global Top-50 CTF team THEM?!, competing at international finals in France, and co-hosting THEM?!CTF 2026.',
  milestones: [
    { label: 'Origin', value: 'BramHacks Booth Card (Nov 2025)' },
    { label: 'Consistency', value: '200+ Consecutive Days (43h 53m Pathway)' },
    { label: 'CTF Finish', value: '4th Place · CyberStart Top Performer' },
    { label: 'Outcome', value: 'SANS Scholarship -> GIAC GFACT (#8458)' },
  ],
  verifyUrl: 'https://www.credly.com/badges/33ff7ea8-5a30-4124-a3ab-2397609e99a3',
};

export const CTF_CHALLENGE_SUMMARY: {
  type: CtfChallengeType;
  focus: string;
}[] = [
  {
    type: 'Forensics & DFIR',
    focus:
      'Win98 memory dumps (CHALL.DMP -> FAT32 -> ISO9660 -> MS-DOS TOWN.ZZT), Chocolate Doom .lmp C engine patching, Windows registry AES-CBC ransomware key recovery, SD partition hex carving, UEFI disk images, and live auth.log/wtmp breach triage.',
  },
  {
    type: 'Hardware & PCB',
    focus:
      'EEPROM firmware extraction & memory repair, imprecise microcontroller voltage/clock fault injection under AI-free finals rules, UART/logic analyzer probing, WAV signal extraction, and router exploitation.',
  },
  {
    type: 'OSINT',
    focus:
      'Exact-quoted historical archive dorking (1896 Chronicling America -> itch.io -> Instagram Python code screenshot -> GitHub USER_PROFILES pivot) and tracing persistent Git dangling commits across PR refs.',
  },
  {
    type: 'Crypto',
    focus:
      'Last-hour custom polynomial nonce exploitation (5th place clutch at CryptoNite CTF), SHA-256 key derivation, and AES-CBC ransomware payload decryption without paying ransom.',
  },
  {
    type: 'Web & Pwn',
    focus:
      'Reflected XSS & router admin chains (0xL4ugh Awesome Router), web challenge series qualifying for THEM?!, multi-category TryHackMe rooms, and binary/stack triage.',
  },
  {
    type: 'SecOps & Threat Hunting',
    focus:
      'Google SecOps Chronicle YARA-L UDM queries across Sysmon (1/3/17/18/23/26), PowerShell 4104, and 4624 logs to catch ntkd.exe/dbgeng.dll sideloading, scs_sync.exe, and DCSync replication GUIDs.',
  },
  {
    type: 'Infra & Challenge Authoring',
    focus:
      'Co-operating live CTFd & VPN backend infrastructure for 1,500+ players (THEM?!CTF 2026), containing a pre-launch GCP compromise, authoring obfuscated DFIR & DFIRxBlockchain challenges, and writing the team config playbook.',
  },
];

export const DOCUMENTED_CTFS: CtfRecord[] = [
  {
    id: 'ctf-midnight-flag-finals',
    name: 'Midnight Flag CTF EXECUTION 2026 Finals',
    date: 'Jun 12 to 16, 2026',
    teamOrRole: 'THEM?! (Humber Sponsored)',
    format: 'On-Site Finals',
    outcome: '8th / 756+ Quals -> 9th Student / 14th Overall',
    challengeTypes: ['Hardware & PCB', 'Forensics & DFIR', 'OSINT', 'Crypto'],
    challengesAndWork:
      'AI-banned on-site arena at ESNA de Bretagne in Rennes, France. Performed EEPROM firmware extraction and memory repair, imprecise voltage/clock fault injection on live hardware boards, Windows registry AES-CBC decryption of ransomware file Gestion.pdf.kiki, and the Holmes the Inspired Killer OSINT pivot chain.',
    proofUrl: 'https://ctftime.org/team/387399',
    proofLabel: 'THEM?! on CTFtime',
    anchorId: 'writeups',
  },
  {
    id: 'ctf-themctf-2026',
    name: 'THEM?!CTF 2026',
    date: 'May 29 to 31, 2026',
    teamOrRole: 'Organizer · Infra & Author',
    format: 'Organizer / Author',
    outcome: '1,500+ Players · 40+ Challenges · Max 25.00 First-Year Weight',
    challengeTypes: ['Infra & Challenge Authoring', 'Forensics & DFIR'],
    challengesAndWork:
      'Co-carried live CTFd and VPN infrastructure ops for 1,500+ global players, investigated a pre-launch GCP host breach (auth.log, wtmp, /tmp/ssh-* agent sockets, Flask @app.after_request admin backdoor) to declare Total Loss and rebuild clean, wrote the post-incident playbook, and authored obfuscated forensics plus DFIRxBlockchain challenges.',
    proofUrl: 'https://ctftime.org/event/3209/weight',
    proofLabel: 'CTFtime Event 3209',
    anchorId: 'stories',
  },
  {
    id: 'ctf-picoctf-2026',
    name: 'picoCTF 2026',
    date: 'Spring 2026',
    teamOrRole: 'THEM?!',
    format: 'Online',
    outcome: '7th Globally of 8,747 Teams (14,500 pts)',
    challengeTypes: ['Forensics & DFIR', 'Web & Pwn', 'Crypto', 'OSINT'],
    challengesAndWork:
      'Full 14,500-point scoreboard clear competing with THEM?! across forensics, web exploitation, cryptography, and OSINT tracks against 8,747 international teams.',
    proofUrl: 'https://play.picoctf.org/events/79/scoreboards',
    proofLabel: 'picoCTF Leaderboard',
  },
  {
    id: 'ctf-cyberstart-canada',
    name: 'Rogers CyberStart Canada CTF 25/26',
    date: 'Oct 2025 to Jun 2026',
    teamOrRole: 'Solo · Top Performer',
    format: 'Online',
    outcome: '4th Place · Top Performer · SANS GFACT Scholarship',
    challengeTypes: ['Forensics & DFIR', 'Web & Pwn', 'OSINT', 'SecOps & Threat Hunting'],
    challengesAndWork:
      'Picked up a CyberStart card at the BramHacks booth, logged 200+ consecutive daily TryHackMe challenge days and completed the 43h 53m Introductory Pathway (THM-NJUMPMQAFZ), solved web, forensics, OSINT, reverse engineering, and SOC tracks for 4th place and a SANS scholarship (GIAC GFACT earned Oct 2026).',
    proofUrl: 'https://www.credly.com/badges/33ff7ea8-5a30-4124-a3ab-2397609e99a3',
    proofLabel: 'GFACT Credly Badge',
  },
  {
    id: 'ctf-cryptonite-2026',
    name: 'CryptoNite CTF 2026',
    date: '2026',
    teamOrRole: 'THEM?!',
    format: 'Online',
    outcome: '5th Place Overall (Top 0.58%)',
    challengeTypes: ['Crypto'],
    challengesAndWork:
      'Final-hour clutch solve exploiting a custom polynomial nonce vulnerability to push THEM?! into 5th place overall (top 0.58%), followed by a published technical writeup.',
    proofUrl: 'https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7431816781125758976',
    proofLabel: 'LinkedIn Breakdown',
  },
  {
    id: 'ctf-0xl4ugh-2026',
    name: '0xL4ugh CTF 2026',
    date: 'Jan 2026',
    teamOrRole: 'THEM?!',
    format: 'Online',
    outcome: '9th Overall (First Month on Roster)',
    challengeTypes: ['Web & Pwn', 'Hardware & PCB'],
    challengesAndWork:
      'Router target exploitation on Awesome Router combining reflected XSS and binary/pwn primitives during my first month competing on the THEM?! roster.',
    proofUrl: 'https://medium.com/@gsmag404/0x4ugh-awesome-router-3cd99ab43702',
    proofLabel: 'Medium Writeup',
  },
  {
    id: 'ctf-z0d1ak-2026',
    name: 'z0d1ak CTF Qualifiers 2026',
    date: 'Aug 21 to 23, 2026',
    teamOrRole: 'idkTHEM?!',
    format: 'Online',
    outcome: '18th of 1,253 Teams',
    challengeTypes: ['Forensics & DFIR', 'Web & Pwn', 'Crypto'],
    challengesAndWork:
      '48-hour global qualifier placement (#18 of 1,253 competing teams) tackling digital forensics, web exploitation, and applied cryptography challenges.',
  },
  {
    id: 'ctf-srdnlen-2026',
    name: 'Srdnlen CTF 2026 Quals',
    date: 'Mar 2026',
    teamOrRole: 'THEM?!',
    format: 'Online',
    outcome: '20th of 433 Teams',
    challengeTypes: ['Forensics & DFIR'],
    challengesAndWork:
      'Unpacked a nested box-in-a-box-in-a-box forensics chain starting from Win98 memory dump CHALL.DMP -> FAT32 image SEG_FAT.BIN -> virtual ISO9660 CD-ROM -> 1991 MS-DOS TOWN.ZZT board text tiles.',
    proofUrl: 'https://medium.com/@gsmag404/retro-forensics-ce78891370fb',
    proofLabel: 'Retro Forensics Writeup',
  },
  {
    id: 'ctf-pwnsec-2026',
    name: 'PwnSec CTF 2026',
    date: '2026',
    teamOrRole: 'THEN_WHEN / THEM?!',
    format: 'Online',
    outcome: '36th Place Overall',
    challengeTypes: ['Forensics & DFIR', 'Web & Pwn', 'Crypto'],
    challengesAndWork:
      'International multi-category run across forensics investigations, web exploitation, and cryptography challenges against competitive global rosters.',
  },
  {
    id: 'ctf-umassctf-2026',
    name: 'UMassCTF 2026',
    date: 'Apr 2026',
    teamOrRole: 'THEM?!',
    format: 'Online',
    outcome: '45th Place Overall',
    challengeTypes: ['Forensics & DFIR'],
    challengesAndWork:
      'Solved a deterministic DOOM demo corruption (.lmp) forensics challenge by modifying the C Chocolate Doom engine to pause at exact TIC desyncs and scrub +/-5s without restarting from frame zero.',
    proofUrl: 'https://medium.com/@gsmag404/retro-forensics-ce78891370fb',
    proofLabel: 'Medium Writeup',
  },
  {
    id: 'ctf-tamuctf-2026',
    name: 'TAMUctf 2026',
    date: 'Mar 2026',
    teamOrRole: 'THEM?!',
    format: 'Online',
    outcome: 'Published Git Internals Writeup',
    challengeTypes: ['Forensics & DFIR', 'OSINT'],
    challengesAndWork:
      'Traced how deleted commits remain reachable across GitHub unreferenced git objects, retained pull-request refs, and shared fork object pools, published in "Github is scary: The Illusion of Deletion".',
    proofUrl: 'https://medium.com/@gsmag404/github-is-scary-the-illusion-of-deletion-9cccfe8c7fa8',
    proofLabel: 'Medium Writeup',
  },
  {
    id: 'ctf-uoftctf-2026',
    name: 'UofTCTF 2026',
    date: 'Jan 2026',
    teamOrRole: 'Solo',
    format: 'Online',
    outcome: 'Solo Performance -> THEM?! Trial Invite',
    challengeTypes: ['Forensics & DFIR', 'Web & Pwn'],
    challengesAndWork:
      'Solo run including the image/metadata forensics solve "Is your pokemon-card fake?" and a web challenge series whose performance earned my trial invitation to THEM?!.',
    proofUrl: 'https://medium.com/@gsmag404/is-your-pokemon-card-fake-099b3e95868b',
    proofLabel: 'Medium Writeup',
  },
  {
    id: 'ctf-ongov-2026',
    name: "Ontario's Cyber Security CTF Competition 2026",
    date: 'Nov 2026',
    teamOrRole: 'Humber Polytechnic Team',
    format: 'In-Person',
    outcome: 'In-Person Provincial Competition',
    challengeTypes: ['SecOps & Threat Hunting', 'Forensics & DFIR'],
    challengesAndWork:
      "Represented Humber Polytechnic on-site in Ontario's 2026 provincial cyber competition alongside Ontario's Cyber Security Summit.",
    anchorId: 'institutional',
  },
  {
    id: 'ctf-humber-chronicle-udm',
    name: 'Humber Chronicle UDM SecOps CTF',
    date: 'Nov 2026',
    teamOrRole: 'Humber SecOps',
    format: 'In-Person',
    outcome: 'Full AD Kill-Chain Reconstruction',
    challengeTypes: ['SecOps & Threat Hunting', 'Forensics & DFIR'],
    challengesAndWork:
      'Authored Google SecOps Chronicle YARA-L UDM detection queries across Sysmon events (1, 3, 17, 18, 23, 26), PowerShell 4104, and logon 4624 to catch ntkd.exe/dbgeng.dll sideloading, scs_sync.exe (PID 9012), DCSync GUID 1131f6ad-9c07-11d1-f79f-00c04fc2dcd2, \\dnsresolver_pipe, and staging domain chemscalere.com.',
    anchorId: 'architecture',
  },
  {
    id: 'ctf-pctf-0xfun-2026',
    name: 'PatriotCTF (PCTF) & 0xFun CTF 2026',
    date: '2026',
    teamOrRole: 'THEM?!',
    format: 'Online',
    outcome: 'Multi-Category Lab Solves',
    challengeTypes: ['Forensics & DFIR', 'Hardware & PCB', 'Web & Pwn'],
    challengesAndWork:
      'UEFI disk image and memory-map disassembly triage (uefi_disk.img, mmap_disassembled.txt), WAV audio/signal analysis (chicken.wav, noise.wav), and nested archive extraction challenges.',
  },
  {
    id: 'ctf-cyberquest-thm-2025',
    name: 'CyberQuest Winter 2025 & TryHackMe Rooms',
    date: 'Dec 2025 to Jan 2026',
    teamOrRole: 'Solo',
    format: 'Online',
    outcome: 'Early Circuit Foundation',
    challengeTypes: ['Forensics & DFIR', 'Web & Pwn'],
    challengesAndWork:
      'Early packet capture triage, host forensic artifact recovery, and walkthrough documentation including "THM: The Great Disappearing Act Walkthrough".',
    proofUrl: 'https://medium.com/@gsmag404/thm-the-great-disappearing-act-walkthrough-41a6fb693075',
    proofLabel: 'Medium Writeup',
  },
];
