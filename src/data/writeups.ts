import { WriteupItem } from './types';

export const WRITEUPS: WriteupItem[] = [
  {
    id: 'raw-logs-to-ttps',
    kind: 'Technical Breakdown',
    platform: 'Site Dossier',
    title: 'From Raw Logs to TTPs: Causal Correlation Without IP Fragility',
    date: 'Nov 2026',
    tags: ['Detection Engineering', 'MITRE ATT&CK', 'Elasticsearch', 'Correlation'],
    summary:
      'Why edge Raspberry Pi sensors perform zero local analysis, why grouping by client.ip breaks, and how separating lure:* from primitive:* detects unmapped exploits.',
    excerpt:
      '"In log formats, the edge device receiving traffic is called a sensor. Our Raspberry Pi does zero analysis on its own. It just serves a fake page, stamps which Lure route was hit in sensor.action, and sends the raw log to the cloud where all the real processing happens..."',
    url: 'https://medium.com/@gsmag404',
    fullMarkdownSections: [
      {
        heading: '1. Zero-Logic Edge Sensors',
        body: 'In log formats, the edge device receiving traffic is called a sensor. Our Raspberry Pi does zero analysis on its own. It just serves a fake page, stamps which Lure route was hit in sensor.action, and sends the raw log over WireGuard and Fluent Bit to the cloud where all the real processing happens. Keeping the Pi stateless ensures no SIEM port ever faces the public internet and attacker fingerprinting never contaminates correlation state.',
      },
      {
        heading: '2. Lures vs. Execution Primitives',
        body: 'There are thousands of CVEs, so building a custom lure for every single exploit is impossible. However, once an attacker gets past any door, they always use the same small set of primitive:* commands (primitive:id, primitive:whoami) to check if their exploit worked. Splitting sensor.action into generic routes (route:portal, route:not_found), vulnerability lures (lure:php_stream, lure:config_canary), and execution primitives decouples noisy scanning from real post-exploitation intent.',
      },
      {
        heading: '3. Causal Escalation Detection',
        body: 'Normally, an attacker hits a known vulnerability lure (lure:*) before running a shell command (primitive:*). If a session jumps straight from random 404 pages (route:not_found) to an execution command (primitive:id, primitive:whoami) without touching any known lure, the attacker found a way in that we did not have a trap for. The engine flags causal_escalation: true and labels the profile Zero-Day / Unmapped Exploit.',
      },
      {
        heading: '4. Cross-IP Actor Attribution Mechanics',
        body: 'IP addresses rotate across cloud VPS providers and residential proxies constantly. correlator.py strips the empty GET body SHA-256 (e3b0c442...) so harmless scanners never collide, hashes exact HTTP header arrival order (MD5[:8]), checks Shannon entropy (>4.8 bits/byte for T1027 obfuscation), and clusters events by payload hash, header fingerprint, and normalized action sequence. That linked cluster C-14ef4fe0a2 across Cameroon and US source IPs.',
        code: 'Cluster Score = (max_phase_rank * 1000) + (actor.ip_count * 10) + event_count\nHeader FP     = MD5(lowercase_header_keys_in_order)[:8]  // e.g. efa389eb',
      },
    ],
  },
  {
    id: 'midnight-flag-voltage-spike',
    kind: 'CTF Writeup',
    platform: 'Site Dossier',
    title: 'I Shocked a Chip and It Gave Me the Flag.',
    date: 'Jun 13, 2026',
    tags: ['Midnight Flag', 'Hardware Track', 'Fault Injection', 'CH341A', 'AI-Free'],
    summary:
      '5 hours of setup. No AI. No docs. One voltage spike. Bypassed a custom microcontroller check at ESNA Bretagne using a CH341A programmer and manual power-rail fault injection.',
    excerpt:
      '"AI was banned at the competition. No Copilot. No ChatGPT. Five hours on setup alone. Five hours before a single byte was read. Knowing the vulnerability window was wide enough for manual timing was the insight. The spike itself took seconds."',
    url: '/writeups/midnight-flag-voltage-fault-injection.pdf',
    fullMarkdownSections: [
      {
        heading: '1. The Black Box (5 Hours Before 1 Byte)',
        body: 'The organisers handed us a custom microcontroller and a CH341A programmer with zero documentation, setup guide, or forum threads. With AI banned in the ESNA Bretagne arena, we traced pinouts manually, cross-referenced loosely similar datasheets, and iterated through raw trial and error for five hours before reading a single byte.',
      },
      {
        heading: '2. The Voltage Spike (Manual Fault Injection)',
        body: 'With clean firmware running on the chip, standard fault injection usually demands nanosecond-precise timing hardware. Instead, we used a wire and a power rail to introduce a controlled voltage surge at the target execution cycle. The vulnerability window was wide enough that manual timing glitched the check and printed the flag in seconds.',
      },
      {
        heading: '3. Takeaway (Where Experience Starts)',
        body: 'The exploit took minutes; getting there took the entire day. Piecing setup together manually through datasheets and hardware correlation without AI shortcuts revealed exactly where fundamentals end and tooling begins.',
      },
    ],
  },
  {
    id: 'holmes-osint-france',
    kind: 'CTF Writeup',
    platform: 'Site Dossier',
    title: 'We Hunted a Killer Online (Holmes OSINT, Midnight Flag France)',
    date: 'Jun 14, 2026',
    tags: ['OSINT', 'Midnight Flag', 'Cross-Platform Pivoting', 'France Finals'],
    summary:
      'Co-authored finals writeup (bromskiii & tegeda_): tracing a fictional killer across an 1896 Philadelphia Inquirer confession, itch.io, Instagram Python code, GitHub commit 9c79ae0, and a private diary.',
    excerpt:
      '"We traced a fictional killer across a 130-year-old newspaper, a gaming forum, Instagram, a developer platform, a coded cipher, and a private diary using nothing but public information and a search bar."',
    url: '/writeups/midnight-flag-we-hunted-a-killer-online.pdf',
    fullMarkdownSections: [
      {
        heading: 'Scene 1 & 2: Witness Quote -> Philadelphia Inquirer (Apr 12, 1896)',
        body: 'Starting from a single newspaper clipping and the witness quote ("I only got to explore part of the castle. I\'d love to see the rest in real life someday."), Library of Congress newspaper archive matching pinned the source to H.H. Holmes\'s confession in the Philadelphia Inquirer, April 12, 1896.',
      },
      {
        heading: 'Scene 3 & 4: Google Dork -> itch.io -> Instagram -> GitHub (9c79ae0)',
        body: 'After dead ends on medical theories and TikTok, exact-quoted Google search surfaced itch.io user holmes-obsessed reviewing a serial-killer simulation game. That profile linked to Instagram account elizabethbathory_lover, whose Python code screenshot exposed username zodiac_enjoyer and led straight to GitHub commit 9c79ae0.',
      },
      {
        heading: 'Scene 5 & 6: WHITECHAPELBOSS Cipher -> Central Park Diary (HEZJ)',
        body: 'Deciphering the encoded image revealed WHITECHAPELBOSS, unlocking a private repository holding an April 6, 2026 Central Park newspaper clipping and a handwritten diary where the suspect adopted the four-letter alias HEZJ.',
      },
      {
        heading: 'Verdict & Teamwork (bromskiii & tegeda_)',
        body: 'Every clue came from artifacts the subject posted themselves. At 2 AM, momentum held because whenever one of us hit a wall, the other found the next crack.',
      },
    ],
  },
  {
    id: 'medium-github-scary',
    kind: 'Article',
    platform: 'Medium',
    title: 'Github is scary: The Illusion of Deletion',
    date: 'Mar 27, 2026',
    tags: ['Git Internals', 'TAMUctf', 'DFIR', 'Security'],
    summary:
      'Traced at TAMUctf how dangling commits persist through unreferenced git objects, retained pull-request refs, and shared fork object pools long after deletion.',
    url: 'https://medium.com/@gsmag404/github-is-scary-the-illusion-of-deletion-9cccfe8c7fa8',
  },
  {
    id: 'medium-retro-forensics',
    kind: 'CTF Writeup',
    platform: 'Medium',
    title: 'Retro Forensics',
    date: 'Mar 10, 2026',
    tags: ['Srdnlen CTF', 'UMassCTF', 'Nested Forensics', 'C Tooling'],
    summary:
      'Nested "box-in-a-box-in-a-box" binary/forensics extraction at Srdnlen CTF Quals (20th of 433 teams) alongside retro emulator debugging notes.',
    url: 'https://medium.com/@gsmag404/retro-forensics-ce78891370fb',
  },
  {
    id: 'medium-war-on-ads',
    kind: 'Article',
    platform: 'Medium',
    title: 'My war on ads',
    date: 'Feb 16, 2026',
    tags: ['DRM', 'Manifest V3', 'Open Web', 'Hardware Security'],
    summary:
      'Examining how ad delivery and platform enforcement push restrictions deeper toward Manifest V3, DRM stacks, and CPU-level trust boundaries.',
    url: 'https://medium.com/@gsmag404/my-war-on-ads-f5433f283bb6',
  },
  {
    id: 'medium-0xl4ugh',
    kind: 'CTF Writeup',
    platform: 'Medium',
    title: '0x4ugh Awesome router',
    date: 'Jan 27, 2026',
    tags: ['0xL4ugh CTF', 'Pwn', 'Reflected XSS', 'Router Exploitation'],
    summary:
      'Router target walkthrough from 0xL4ugh CTF where THEM?! placed 9th overall during my first month on the roster.',
    url: 'https://medium.com/@gsmag404/0x4ugh-awesome-router-3cd99ab43702',
  },
  {
    id: 'medium-pokemon-fake',
    kind: 'CTF Writeup',
    platform: 'Medium',
    title: 'Is your pokemon-card fake?',
    date: 'Jan 12, 2026',
    tags: ['UofTCTF', 'Digital Forensics', 'Image Analysis'],
    summary:
      'Solo UofTCTF forensics solve that formed part of the performance proof behind my trial invite to THEM?!.',
    url: 'https://medium.com/@gsmag404/is-your-pokemon-card-fake-099b3e95868b',
  },
  {
    id: 'medium-thm-disappearing',
    kind: 'CTF Writeup',
    platform: 'Medium',
    title: 'THM: The Great Disappearing Act Walkthrough',
    date: 'Jan 3, 2026',
    tags: ['TryHackMe', 'Forensics', 'Incident Triage'],
    summary: 'Step-by-step TryHackMe forensic artifact recovery walkthrough.',
    url: 'https://medium.com/@gsmag404/thm-the-great-disappearing-act-walkthrough-41a6fb693075',
  },
  {
    id: 'medium-arbitrage-scam',
    kind: 'Article',
    platform: 'Medium',
    title: 'Exposing the "Arbitrage AI Bot" Scam: The Remix Subdomain Trap',
    date: 'Aug 17, 2025',
    tags: ['Web3', 'Smart Contract Scams', 'OSINT', 'Threat Intel'],
    summary:
      'Investigating malicious Solidity "AI trading bot" lures and fake Remix IDE subdomains designed to drain developer wallets.',
    url: 'https://medium.com/@gsmag404/exposing-the-arbitrage-ai-bot-scam-the-remix-subdomain-trap-1a36e2c55849',
  },
  {
    id: 'linkedin-defcon-ics',
    kind: 'Field Note',
    platform: 'LinkedIn',
    title: 'DEFCON Toronto (DC416): Perimeter Thinking vs. Modbus OT Reality',
    date: 'Feb 20, 2026',
    tags: ['DEFCON Toronto', 'OT/ICS', 'Modbus', 'Zero Trust'],
    summary:
      'Field notes from DEFCON Toronto on why power grids guarding only the perimeter leave Modbus register writes and lateral movement wide open.',
    url: 'https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7430729730577838080',
  },
];
