import { HackathonEntry, Web3BuildEntry } from './types';

export const HACKATHONS: HackathonEntry[] = [
  {
    id: 'fandrop-catalyst',
    badge: 'TRACK WINNERS · CATALYST BY SPEER',
    title: 'Catalyst by Speer: FanDrop Wallet & Fan Passport',
    project: 'FanDrop Apple & Google Wallet Integration',
    mode: 'In-Person',
    date: 'Oct 17 to 18, 2026',
    location: 'Toronto, ON',
    outcome: 'Track Winners · Pitched directly to founders Raine Maida & Mathew Mozaffari',
    tags: ['Wins & Podiums', 'In-Person & Whiteboard'],
    softSkills: [
      'Whiteboard Product Discovery',
      'Founder Pitching',
      'Friction Elimination',
      'Cross-Functional Collaboration',
    ],
    teamAndMentors:
      'Team: Izabela Szczytynski (PM), Gurpratap Smagh (Wallet & Architecture), Gavin Kemp, Uriel Omozusi, Candace Oghide · Founders: Raine Maida & Mathew Mozaffari',
    story:
      'At Catalyst by Speer, we heard the problem straight from founders Raine Maida and Mathew Mozaffari: Ticketmaster holds the venue, so once a concert ends the artist is cut off with passive third-party data and zero direct channel to fans. FanDrop already had a live QR web page, yet asking fans for a sign-up form on a packed concert floor causes a massive drop in retention. On the whiteboard, our team went through multiple iterations and rejected sign-up forms, wristbands, and extra hardware people throw away. Instead, we anchored on something already on every phone: an anonymous pass in Apple Wallet and Google Wallet (FP-MMGH-G95B). One QR tap drops the pass into their wallet with zero email or name upfront, unlocking lock-screen push notifications (24h Memory Capsule alerts), cross-show loyalty tiers (Opener -> Headliner -> Legend), a Memory Map, and a one-shot disposable camera where artists sign fan Polaroids.',
    hardDecision:
      'Apple APNs requires HTTP/2 client-certificate connections that serverless runtimes cannot open natively. We architected both full PassKit signing (node-forge PKCS#7 detached signature + fflate .pkpass + RS256 Google Wallet JWTs) and an instant preview-pass fallback so the live demo worked without waiting on Apple Developer org credentials.',
    gitProof: {
      repo: 'Gurpratap-Smagh/fandrop-wallet',
      window: 'Commits Oct 17 to Oct 18, 2026 (21:55 UTC)',
      highlights: [
        'Oct 17 16:47Z: catchfan initial architecture kickoff',
        'Oct 18 16:21Z: encore-fan-campaign-hub thank-you push & setlist flow',
        'Oct 18 21:26Z (b41e463): Confirmed WalletWallet Apple & Google Wallet pass generation works',
        'Oct 18 21:55Z (63cf02d): Real concert timeline images, Drizzle SQL migrations, Vitest tests',
      ],
    },
    photos: [
      {
        src: '/photos/hackathons/fandrop-whiteboard-flow.jpg',
        alt: 'Original handwritten FanDrop whiteboard flow from Catalyst by Speer',
        caption: 'The actual Catalyst hackathon whiteboard mapping Step 1 Scan QR -> Digital Wallet -> Show Flow -> Post-Concert Memory Book.',
        location: 'Catalyst by Speer',
        date: 'Oct 18, 2026',
      },
      {
        src: '/photos/hackathons/fandrop-wallet-ui.jpg',
        alt: 'Fan Passport UI with Add to Apple Wallet and Save to Google Wallet buttons',
        caption: 'Zero-PII Anonymous Fan Passport (FP-MMGH-G95B) with one-tap Apple Wallet and Google Wallet integration.',
        location: 'FanDrop Pitch Deck',
        date: 'Oct 18, 2026',
      },
      {
        src: '/photos/hackathons/fandrop-passport-history.jpg',
        alt: 'Multi-show Fan Passport loyalty tier view across concerts',
        caption: 'Cross-artist passport tracking shows attended, photos captured, and loyalty tiers without creating an account.',
        location: 'FanDrop Demo',
        date: 'Oct 18, 2026',
      },
      {
        src: '/photos/hackathons/fandrop-entertainer-funnel.jpg',
        alt: 'Entertainer POV live fan stream and 36.4 percent scan-to-check-in funnel',
        caption: 'Artist control-room dashboard surfacing live check-in peaks and drop-off funnels without third-party gatekeepers.',
        location: 'FanDrop Deck',
        date: 'Oct 18, 2026',
      },
      {
        src: '/photos/hackathons/fandrop-stage-winners.jpg',
        alt: 'Five-person FanDrop team on stage under FanDrop screen after winning track',
        caption: 'Team on stage with the FanDrop screen after pitching founders Raine Maida and Mathew Mozaffari and winning the track.',
        location: 'Catalyst by Speer Stage',
        date: 'Oct 18, 2026',
      },
    ],
  },
  {
    id: 'supplychek-brampton',
    badge: '3RD PLACE · $1,000 CHEQUE',
    title: 'Brampton SecOps Hackathon: SupplyChek Scope Cut & Pitch',
    project: 'SupplyChek: Sign the Instruction, Not Just the Login',
    mode: 'In-Person',
    date: 'Sep 25 to 27, 2026',
    location: 'Rogers Cybersecure Catalyst, Brampton, ON',
    outcome: '3rd Place ($1,000) presented by Deputy Mayor Harkirat Singh · 32 hours, 74 commits',
    tags: ['Wins & Podiums', 'In-Person & Whiteboard'],
    softSkills: [
      'Ruthless Scope Pruning',
      'Mentor Synthesis',
      'Real-World Yard Empathy',
      'High-Stakes Pitch Alignment',
    ],
    teamAndMentors:
      'Team: Teghveer Singh Ateliey, Adeyemi Folarin, Gurpratap Smagh, Karandeep Singh Malhari · Mentors: Osman Saleem, Rachel Clark, Tracy Chong, Liam, Harman Grewal',
    story:
      'Day 1 opened with Osman Saleem and Rachel Clark breaking down why small-business supply chains prioritize operational ease. We had an edge: Karandeep came from a trucking family and gave us ground-truth on dispatcher-driver pressure in the yard. On the whiteboard, Tracy Chong flagged biometric privacy and pushed us to focus on the human attack vector, while Liam narrowed our target to logistics. By midnight we had biometrics, a driver map, and Signal-protocol chat (built with Adeyemi Folarin). Day 2 we pitched every mentor we could find. The feedback was unanimous (confirmed by Harman Grewal): strong engineering, scope way too wide. We spent 3 hours going through code and pruning a dozen features (paperwork digitization, compliance, shadow-broker detection) down to ONE sharp problem: securing the change.',
    hardDecision:
      'A real shipment and a real driver get hit by a fake "new delivery address / bank details" email when yard pressure is highest. Attackers get unlimited tries to fool a dispatcher or driver. Instead of trying to detect phishing emails, we made every high-risk shipment mutation (delivery address, carrier, bank details) require dual WebAuthn passkey approval over SHA-256 of the exact request plus Ed25519 signed receipts before the truck moves. Choosing one problem to pitch won us 3rd Place.',
    gitProof: {
      repo: 'SupplyChek Pitch Deck (bramptonsecops.vercel.app)',
      window: 'Sep 25 to Sep 27, 2026 (32 hours · 74 commits)',
      highlights: [
        'Day 1 Whiteboard: Biometric privacy guardrails & logistics target lock',
        'Day 2 (3-hr pivot): Cut 12 features down to dual-passkey instruction signing',
        'Crypto spec: SHA-256 request binding + WebAuthn passkeys + Ed25519 audit receipts',
        'Day 3 Podium: 3rd Place ($1,000) awarded by Deputy Mayor Harkirat Singh + MP Certificate',
      ],
    },
    photos: [
      {
        src: '/photos/bramsec/whiteboard-threat-model.jpg',
        alt: 'Whiteboard threat modeling session at Brampton SecOps',
        caption: 'Day 1 whiteboard mapping dispatcher-to-driver trust boundaries before building.',
        location: 'Rogers Cybersecure Catalyst',
        date: 'Sep 25, 2026',
      },
      {
        src: '/photos/bramsec/supplychek-stage-pitch.jpg',
        alt: 'Presenting SupplyChek on stage before judges',
        caption: 'Day 3 final pitch focused strictly on signing high-risk dispatch changes.',
        location: 'Brampton SecOps Stage',
        date: 'Sep 27, 2026',
      },
      {
        src: '/photos/bramsec/podium-3rd-place-check.jpg',
        alt: 'SupplyChek 3rd Place $1,000 cheque ceremony',
        caption: '3rd Place ($1,000) cheque ceremony with Rogers Cybersecure Catalyst and Brampton leadership.',
        location: 'Brampton Innovation District',
        date: 'Sep 27, 2026',
      },
      {
        src: '/photos/bramsec/mp-certificate.jpg',
        alt: 'Certificate of Achievement from MP Amandeep Sodhi',
        caption: 'Certificate awarded by Amandeep Sodhi, MP for Brampton Centre.',
        location: 'Brampton, ON',
        date: 'Sep 27, 2026',
      },
    ],
  },
  {
    id: 'safescan-ibm-z',
    badge: 'TOP 20 OF 200 · VIRTUAL CO-LEAD & MENTORSHIP',
    title: 'IBM Z x Sheridan Hackathon: SafeScan RAG Safety Engine',
    project: 'SafeScan Personalized Barcode Toxicity Analyzer',
    mode: 'Hybrid',
    date: 'May 9 to 10, 2026',
    location: 'IBM Z x UNSA / Sheridan',
    outcome: 'Top 20 of 200 submissions (96+ teams) · Mentored first-time hackathon builders',
    tags: ['Wins & Podiums', 'Virtual & Global Teams'],
    softSkills: [
      'Mentoring First-Timers',
      'Team Co-Leadership (5 Devs)',
      'Business-Logic Alignment',
      'Judge & Community Engagement',
    ],
    teamAndMentors:
      'Team: Gurpratap Smagh (Co-Lead, 17 commits), Eshan Hussain (13 commits), Chin Wei Mak, Lew Lin, Muhammad Daniyal Khan · Judges: Kriti Faujdar, Surmeet Singh, Ahmed Chaudhry',
    story:
      'Barcodes give access to nutritional data and FDA recall databases, yet none of it is personalized against a user\'s actual allergies, conditions, or prescriptions. We built SafeScan in Next.js 14 + PostgreSQL/Prisma with RAG follow-up chat so a shopper gets a personalized risk report from a barcode scan. My main focus wasn\'t writing another stack essay, it was co-leading a 5-person team and mentoring teammates competing in their very first hackathon while coordinating PR merges, unit test coverage (15 chat endpoint tests), and hallucination/business-logic alignment under tight deadline pressure.',
    hardDecision:
      'Kept deterministic recall and ingredient risk scoring as the hard baseline, using RAG strictly for interactive user follow-up explanations grounded in the fetched report context rather than letting an LLM invent safety scores.',
    gitProof: {
      repo: 'Gurpratap-Smagh/SafeScan',
      window: 'Commits May 10, 2026 (00:54Z to 17:18Z · 33+ team commits)',
      highlights: [
        'chinweimak (04:10Z / 04:40Z): 15 unit tests + UserMemory row deduplication',
        'ETWBALL (13 commits): Core Next.js report UI & Open Food Facts / openFDA integration',
        'Gurpratap-Smagh (17 commits through 17:18Z): Auth, API alignment, final deploy fixes',
      ],
      url: 'https://github.com/Gurpratap-Smagh/SafeScan',
      liveUrl: 'https://safe-scan-nine.vercel.app',
      postUrl: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7460019024597475328',
    },
    photos: [
      {
        src: '/photos/hackathons/safescan-live.jpg',
        alt: 'SafeScan live web application landing page at safe-scan-nine.vercel.app',
        caption: 'Live SafeScan deployment (IBM Z x UNSA Hackathon 2026) combining barcode lookups, openFDA recalls, and personalized AI follow-ups.',
        location: 'Live on Vercel',
        date: 'May 10, 2026',
      },
    ],
  },
  {
    id: 'givehub-zetachain',
    badge: 'OMNICHAIN WEB3 · POST-HACKATHON SECURITY AUDIT',
    title: 'ZetaChain x Google Cloud Buildathon: GiveHub',
    project: 'GiveHub Cross-Chain Crowdfunding DApp',
    mode: 'Virtual / Online',
    date: 'Aug 2025 to Jan 2026',
    location: 'Virtual Global Buildathon',
    outcome: 'Live Cross-Chain ZRC-20 DApp + Re-Audited with Slither & CodeQL CI/CD',
    tags: ['Virtual & Global Teams', 'Blockchain & Web3'],
    softSkills: [
      'Solo End-to-End Ownership',
      'Online Developer Networking',
      'Refusing "If It Works, Ship It" Mentality',
      'Dependency Forensics',
    ],
    teamAndMentors: 'Solo Creator · Online support from ZetaChain developer Denis',
    story:
      'Built GiveHub solo for the ZetaChain x Google Cloud Buildathon: non-custodial ZRC-20 cross-chain donations, WebSocket live feeds, and Gemini AI campaign generation with a live preview editor. Months later, instead of leaving it as an abandoned hackathon repo, I came back after CyberStart Stage 1 to debug local Foundry cross-chain failures properly, audit the code manually, wire Slither + CodeQL into CI/CD, and trace an unexpected network-tab API call down to a redundant assistant-added dependency.',
    hardDecision:
      'Refused to leave the DApp in an "if it works, it works" hackathon state. Locked GCP containers behind IAM, enforced non-custodial swap-and-forward settlement in CrossChainCrowdfund.sol (21.5 KB), and paired it with automated static-analysis gates.',
    gitProof: {
      repo: 'Gurpratap-Smagh/Give-hub',
      window: 'Aug 10, 2025 -> Dec 30, 2025 -> Jan 6, 2026',
      highlights: [
        'Aug 10 to Aug 18, 2025: First UI commits & ZetaChain testnet contract deployment',
        'Dec 30, 2025 23:44Z (edfdfe5): "crosschain works in one go" after Foundry debugging',
        'Jan 1, 2026 19:00Z (6839c62): "secure" hardening pass + Slither & CodeQL CI integration',
      ],
      url: 'https://github.com/Gurpratap-Smagh/Give-hub',
      liveUrl: 'https://give-hub-nngk.vercel.app/',
      postUrl: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7376019080115535872',
    },
    photos: [
      {
        src: '/photos/web3/givehub-tx-metamask.jpg',
        alt: 'GiveHub campaign page with MetaMask confirmed transaction notification on Testnet Blockscout',
        caption: 'Timestamp-matched Jan 1, 2026 screenshot: live GiveHub campaign UI with MetaMask confirming Transaction 17 on Testnet Blockscout.',
        location: 'Local Testnet Capture',
        date: 'Jan 1, 2026',
      },
      {
        src: '/photos/web3/givehub-ui.jpg',
        alt: 'GiveHub omnichain crowdfunding homepage showing live campaigns',
        caption: 'Timestamp-matched Jan 1, 2026 capture of the GiveHub campaign directory after the security & UI hardening sprint.',
        location: 'GiveHub Production UI',
        date: 'Jan 1, 2026',
      },
    ],
  },
  {
    id: 'agromart-hedera',
    badge: 'VIRTUAL CROSS-CONTINENTAL BUILD · HEDERA AFRICA',
    title: 'Hedera Africa Hackathon: Lovtiti Agro-Mart',
    project: 'Lovtiti Agro-Mart Decentralized Farmer Marketplace',
    mode: 'Virtual / Online',
    date: 'Oct 31 to Nov 1, 2025',
    location: 'Virtual (Canada <-> Africa Teammates)',
    outcome: 'Shipped Next.js + Hedera Trust Layer + Prisma build across unfriendly timezones',
    tags: ['Virtual & Global Teams', 'Blockchain & Web3'],
    softSkills: [
      'Cross-Cultural Remote Collaboration',
      'Async Timezone Coordination',
      'Social-Impact Problem Framing',
      'First Team Tech Hackathon',
    ],
    teamAndMentors: 'Distributed international team across Africa and Canada (DoraHacks)',
    story:
      'My first tech hackathon working with an external team, collaborating virtually with teammates across a completely different geographical region. Despite steep timezone differences, we aligned around a real pain point: rural farmers, fishers, and beekeepers losing harvests to spoilage or middlemen because buyers never arrive on time. We paired Next.js and Prisma/SQL persistence with Hedera blockchain as the transparent checkout trust layer.',
    hardDecision:
      'Async timezone overlap left only short live handoff windows, so we split UI/marketplace flows cleanly from Prisma schemas and Hedera settlement logic to ship on schedule by 04:59 UTC.',
    gitProof: {
      repo: 'Gurpratap-Smagh/agro-mart',
      window: 'Oct 31, 2025 18:52Z to Nov 1, 2025 04:59Z',
      highlights: [
        'Oct 31 18:52Z (1433fd3): Initial marketplace scaffold',
        'Nov 1 00:09Z (459fa95): Core storefront, buyer-farmer matching & Hedera wiring',
        'Nov 1 04:59Z (164713e): Final sprint push & live deployment',
      ],
      url: 'https://github.com/Gurpratap-Smagh/agro-mart',
      liveUrl: 'https://agro-mart-beta.vercel.app',
      postUrl: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7390472669269368832',
    },
    photos: [
      {
        src: '/photos/web3/agromart-live.jpg',
        alt: 'Lovtiti Agro Mart live web application at agro-mart-beta.vercel.app',
        caption: 'Live Lovtiti Agro Mart marketplace connecting African farmers directly with global buyers via Hedera.',
        location: 'Live on Vercel',
        date: 'Nov 1, 2025',
      },
    ],
  },
  {
    id: 'achievaflow-1st',
    badge: '1ST PLACE · HUMBER LONGO CENTRE',
    title: 'AchievaFlow Data Drive Hackathon',
    project: 'Cross-Disciplinary Data & Business Strategy Pitch',
    mode: 'In-Person',
    date: 'Oct 18 to 20, 2025',
    location: 'Humber Longo Centre for Entrepreneurship',
    outcome: '1st Place Overall · Engineering + Medical + Business Pitch',
    tags: ['Wins & Podiums', 'In-Person & Whiteboard'],
    softSkills: [
      'Cross-Disciplinary Teamwork',
      'Executive Pitch Rehearsal',
      'Confidence Building',
      'Authentic Post-Event Networking',
    ],
    teamAndMentors:
      'Team: Polina Gapotiy (Pitch Lead), Rida Fathima, Edgar David Medellin Flores, Xcaret Campos (Medical), Gurpratap Smagh · Host/Mentors: Emily Buchnea, Dianne L. L, Marcia Stipanich Martins, Ciara McVeigh',
    story:
      'Entered AchievaFlow just to enjoy the build process and grow my campus network. Teaming three engineers with a medical student (Xcaret Campos) and a strong presenter (Polina Gapotiy) turned raw data analysis into a story non-technical judges backed unanimously. Working directly with mentor Dianne L. L to rehearse and strip out stiff technical delivery pushed us to 1st Place and opened genuine conversations afterward with judges and data leaders like Marcia Stipanich Martins.',
    hardDecision:
      'Instead of overloading slides with engineering minutiae, we structured the narrative around the human mental-wellness metrics and rehearsed transitions repeatedly until the pitch flowed under time limits.',
    gitProof: {
      repo: 'Humber Longo Centre Showcase',
      window: 'Verified Oct 20, 2025 18:19 to 19:34 local timestamps',
      highlights: [
        'Oct 20 18:19: Judges lineup & AchievaFlow stage presentation',
        'Oct 20 18:20: 5-member winning team photo beside Humber Longo Centre banner',
        'Post-event debrief with judge Ciara McVeigh and security mentor Marcia Stipanich Martins',
      ],
      postUrl: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7386165642455851009',
    },
    photos: [
      {
        src: '/photos/hackathons/achievaflow-1st-place.jpg',
        alt: 'AchievaFlow 1st Place winning team next to Humber Longo Centre Builders of Brilliance banner',
        caption: 'Timestamp-matched Oct 20, 2025 photo: 1st Place team beside Humber Polytechnic Longo Centre for Entrepreneurship banner.',
        location: 'Humber Polytechnic',
        date: 'Oct 20, 2025',
      },
      {
        src: '/photos/hackathons/achievaflow-stage.jpg',
        alt: 'AchievaFlow Data Drive Hackathon full stage lineup with judges and participants',
        caption: 'Timestamp-matched Oct 20, 2025 stage photo with AchievaFlow organizers and judges.',
        location: 'Longo Centre Stage',
        date: 'Oct 20, 2025',
      },
    ],
  },
  {
    id: 'bramhacks-parasynth',
    badge: 'SPACE & HARDWARE CAD SPRINT · BRAMHACKS 2025',
    title: 'BramHacks 2025: Parasynth Terrain-Adaptive CAD',
    project: 'Parasynth Satellite Topography -> SolidWorks Pipeline',
    mode: 'In-Person',
    date: 'Nov 7 to 11, 2025',
    location: 'Brampton, ON',
    outcome: 'Live SolidWorks terrain-wheel demo + Devpost multi-discipline team collaboration',
    tags: ['In-Person & Whiteboard'],
    softSkills: [
      'Hardware-Software Interface Handoff',
      'Cross-Team Alignment',
      'Learning From Non-Podium Sprints',
    ],
    teamAndMentors:
      'Design: Jordan Ing, Shaelyn Maximo, Anthony Giagiari · Software: Lakshan Satkurunathan, Gurpratap Smagh · Mentors: Jasmine Danial, Kyle Boyko, Kim Cooper',
    story:
      'Parasynth took geographic coordinates as input, analyzed local terrain topography from satellite imagery, and automatically generated optimal design parameters fed directly into a SolidWorks template to customize a rover wheel for that terrain. Even without taking a trophy, splitting CAD ownership cleanly from software generation and getting live feedback from mentors like Kim Cooper and Kyle Boyko carried straight into later hackathon wins.',
    hardDecision:
      'Scoped our hardware demo to a single end-to-end automated parameter flow (coordinates -> surface profile -> parameterized SolidWorks wheel model) so the judges saw real generated CAD live on the laptop.',
    gitProof: {
      repo: 'Devpost & SolidWorks Sprint',
      window: 'Oct 29 team match -> Nov 8 satellite data -> Nov 10 demo',
      highlights: [
        'Oct 29 00:15: 5-member cross-engineering team locked on Devpost',
        'Nov 8 16:43: Satellite surface imagery ingested for terrain modeling',
        'Nov 10 22:29: Campus table demo & SolidWorks wheel showcase',
      ],
      postUrl: 'https://www.linkedin.com/feed/update/urn%3Ali%3AugcPost%3A7393857701145096192',
    },
    photos: [
      {
        src: '/photos/bramhacks/bramhacks-team-frame.jpg',
        alt: 'BramHacks 2025 team photo with Parasynth laptop demo',
        caption: 'Team Parasynth demonstrating automated SolidWorks wheel generation at BramHacks 2025.',
        location: 'BramHacks 2025',
        date: 'Nov 10, 2025',
      },
      {
        src: '/photos/hackathons/bramhacks-welcome-team.jpg',
        alt: 'BramHacks 2025 team standing by welcome screen',
        caption: 'Timestamp-matched Nov 10, 2025 team shot at the BramHacks venue.',
        location: 'Brampton, ON',
        date: 'Nov 10, 2025',
      },
      {
        src: '/photos/hackathons/bramhacks-devpost-team.jpg',
        alt: 'Devpost team matching roster showing Shaelyn, Jordan, Lakshan, Anthony, and Gurpratap',
        caption: 'Timestamp-matched Oct 29, 2025 Devpost roster forming the CAD + software team.',
        location: 'Devpost Match',
        date: 'Oct 29, 2025',
      },
    ],
  },
];

export const WEB3_BUILDS: Web3BuildEntry[] = [
  {
    id: 'web3-givehub',
    name: 'GiveHub (ZetaChain Omnichain)',
    chain: 'ZetaChain / EVM (ZRC-20)',
    date: 'Aug 2025 to Jan 2026',
    summary:
      'Non-custodial cross-chain crowdfunding with CrossChainCrowdfund.sol (21.5 KB), auto-swap-and-forward settlement, Foundry verification, and GCP IAM containers.',
    securityOrContractNote: 'Hardened post-hackathon with Slither, CodeQL CI gates, and dependency network audits.',
    commitWindow: '2025-08-10 -> 2026-01-06',
    repoUrl: 'https://github.com/Gurpratap-Smagh/Give-hub',
    liveUrl: 'https://give-hub-nngk.vercel.app/',
    photo: {
      src: '/photos/web3/givehub-tx-metamask.jpg',
      alt: 'GiveHub MetaMask confirmed testnet transaction screenshot',
      caption: 'GiveHub cross-chain campaign + MetaMask Transaction 17 Testnet Blockscout confirmation (Jan 1, 2026).',
      location: 'GiveHub / ZetaChain',
      date: 'Jan 1, 2026',
    },
  },
  {
    id: 'web3-skillstake',
    name: 'SkillStake (Revenium Solana dApp)',
    chain: 'Solana Devnet (Rust + Anchor)',
    date: 'Oct 2025',
    summary:
      'Rust Anchor program + Next.js wallet UI where builders mint SPL tokens, submit Proof-of-Work challenges verified via Keccak hash difficulty, stake, and claim time-based rewards.',
    securityOrContractNote: 'Custom Anchor IDL integration, PDA account validation, Phantom/Solflare wallet verification.',
    commitWindow: '2025-10-23 (5 commits, abb40ba wallet connects)',
    repoUrl: 'https://github.com/Gurpratap-Smagh/revenium',
    liveUrl: 'https://revenium-app.vercel.app',
    photo: {
      src: '/photos/web3/skillstake-phantom-devnet.jpg',
      alt: 'SkillStake dApp connected with Phantom wallet on Solana Devnet',
      caption: 'Timestamp-matched Oct 23, 2025 capture: SkillStake running on Solana Testnet/Devnet with Phantom connected (3M REV).',
      location: 'Solana Devnet',
      date: 'Oct 23, 2025',
    },
  },
  {
    id: 'web3-eth-hd-wallet',
    name: 'Ethereum BIP-32 HD Wallet Generator',
    chain: 'Ethereum (Ethers.js + Alchemy RPC)',
    date: 'Jul to Sep 2025',
    summary:
      'Client-side React wallet generator deriving unlimited deterministic Ethereum addresses from BIP-32 seed phrases with live Alchemy RPC balance queries and private-to-public key recovery.',
    securityOrContractNote: 'Zero backend storage; all key derivation runs strictly in-browser from user mnemonic.',
    commitWindow: '2025-07-24 to 2025-09-17 (23 commits)',
    repoUrl: 'https://github.com/Gurpratap-Smagh/etherium_wallet',
    liveUrl: 'https://etherium-wallet-rouge.vercel.app',
    photo: {
      src: '/photos/web3/eth-hd-wallet-live.jpg',
      alt: 'Bromskiii Ethereum HD Wallet live interface',
      caption: 'Live BIP-32 Ethereum wallet generator, balance lookup, and key converter deployed on Vercel.',
      location: 'Live on Vercel',
      date: 'Jul to Sep 2025',
    },
  },
  {
    id: 'web3-agromart',
    name: 'Lovtiti Agro-Mart',
    chain: 'Hedera Blockchain + Prisma',
    date: 'Oct to Nov 2025',
    summary:
      'Direct farm-to-buyer decentralized marketplace empowering rural African producers with transparent blockchain settlement and zero middlemen.',
    securityOrContractNote: 'Built asynchronously across international timezones (Africa <-> Canada) on Hedera trust layer.',
    commitWindow: '2025-10-31 to 2025-11-01',
    repoUrl: 'https://github.com/Gurpratap-Smagh/agro-mart',
    liveUrl: 'https://agro-mart-beta.vercel.app',
    photo: {
      src: '/photos/web3/agromart-live.jpg',
      alt: 'Lovtiti Agro Mart blockchain marketplace live interface',
      caption: 'Live Lovtiti Agro Mart storefront powered by Hedera and Next.js.',
      location: 'Live on Vercel',
      date: 'Nov 1, 2025',
    },
  },
  {
    id: 'web3-scam-research',
    name: 'Arbitrage Bot Remix Subdomain Scam Audit',
    chain: 'Ethereum / Solidity Threat Intel',
    date: 'Aug 17, 2025',
    summary:
      'Dissected a viral YouTube "AI arbitrage bot" drain campaign that tricked developers into pasting malicious Solidity contracts into spoofed Remix IDE subdomains.',
    securityOrContractNote: 'Side-by-side contract diff exposing hidden attacker withdrawal calls and fake comment bots.',
    commitWindow: 'Published Aug 17, 2025 on Medium',
    writeupUrl:
      'https://medium.com/@gsmag404/exposing-the-arbitrage-ai-bot-scam-the-remix-subdomain-trap-1a36e2c55849',
    photo: {
      src: '/photos/web3/web3-scam-remix.jpg',
      alt: 'Side-by-side Remix IDE Solidity scam contract diff',
      caption: 'Timestamp-matched Aug 17, 2025 forensic diff comparing the drainer Solidity contract against legitimate code.',
      location: 'Medium Threat Intel',
      date: 'Aug 17, 2025',
    },
  },
];
