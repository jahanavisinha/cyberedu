const modules = [
    {
        id: "cia",
        icon: "🔐",
        title: "CIA Triad",
        color: "#6366f1",
        summary: "The three core principles of information security.",
        topics: [
            {
                name: "Confidentiality",
                desc: "Ensuring information is accessible only to authorized parties.",
                detail:
                    "Confidentiality protects sensitive data from unauthorized access. Common tools include encryption (AES-256, TLS), access control lists, and data classification policies. A breach of confidentiality is when someone reads data they shouldn't — like a hacker stealing passwords.",
            },
            {
                name: "Integrity",
                desc: "Guaranteeing data accuracy and trustworthiness.",
                detail:
                    "Integrity ensures data hasn't been tampered with. Techniques include cryptographic hashing (SHA-256), digital signatures, and checksums. A breach of integrity is when data is altered without authorization — like modifying a bank transaction record.",
            },
            {
                name: "Availability",
                desc: "Ensuring systems and data are accessible when needed.",
                detail:
                    "Availability means authorized users can access data when they need it. It's protected by redundancy, load balancing, DDoS mitigation, and regular backups. A breach of availability is a DDoS attack that takes a website offline.",
            },
        ],
        quiz: [
            {
                q: "Encrypting a file before sending it protects which CIA property?",
                opts: ["Integrity", "Confidentiality", "Availability", "Authentication"],
                ans: 1,
            },
            {
                q: "A DDoS attack primarily targets which CIA property?",
                opts: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
                ans: 2,
            },
            {
                q: "A SHA-256 hash is used to verify which CIA property?",
                opts: ["Availability", "Confidentiality", "Non-repudiation", "Integrity"],
                ans: 3,
            },
        ],
    },
    {
        id: "phishing",
        icon: "🎣",
        title: "Phishing Attacks",
        color: "#ef4444",
        summary: "Social engineering attacks that trick users into revealing sensitive info.",
        topics: [
            {
                name: "Spear Phishing",
                desc: "Targeted attacks crafted for a specific individual.",
                detail:
                    "Unlike generic phishing, spear phishing uses personal details (your name, employer, recent activity) gathered from social media or data breaches to appear legitimate. It's far more convincing and dangerous than mass phishing campaigns.",
            },
            {
                name: "Whaling",
                desc: "Phishing attacks aimed at executives and high-profile targets.",
                detail:
                    "Whaling targets CEOs, CFOs, or IT admins — people with high system access or financial authority. The goal is often wire fraud or credential theft. These emails are highly polished and may impersonate lawyers, banks, or board members.",
            },
            {
                name: "Smishing & Vishing",
                desc: "Phishing via SMS or voice calls.",
                detail:
                    "Smishing uses fake text messages (e.g., 'Your package is held — click here'). Vishing uses phone calls impersonating banks or the IRS. Both exploit urgency and fear to bypass critical thinking.",
            },
        ],
        quiz: [
            {
                q: "A highly targeted phishing email aimed at a specific employee is called?",
                opts: ["Whaling", "Smishing", "Spear Phishing", "Pharming"],
                ans: 2,
            },
            {
                q: "Which clue most strongly indicates a phishing email?",
                opts: [
                    "Sender uses Gmail",
                    "Urgent language + mismatched link URL",
                    "Email has images",
                    "Short subject line",
                ],
                ans: 1,
            },
            {
                q: "Phishing via SMS text message is known as?",
                opts: ["Vishing", "Whaling", "Smishing", "Pharming"],
                ans: 2,
            },
        ],
    },
    {
        id: "auth",
        icon: "🛡️",
        title: "Authentication",
        color: "#10b981",
        summary: "Verifying identity and controlling access to systems.",
        topics: [
            {
                name: "Multi-Factor Authentication (MFA)",
                desc: "Combining multiple verification methods for stronger security.",
                detail:
                    "MFA requires two or more of: something you know (password), something you have (phone/token), something you are (biometrics). Even if a password is stolen, MFA prevents unauthorized access. Examples: Google Authenticator, SMS codes, hardware keys (YubiKey).",
            },
            {
                name: "Password Security",
                desc: "Best practices for creating and managing strong passwords.",
                detail:
                    "A strong password is 12+ characters with a mix of uppercase, lowercase, numbers, and symbols. Never reuse passwords across sites. Use a password manager (Bitwarden, 1Password) to generate and store unique passwords securely.",
            },
            {
                name: "OAuth & SSO",
                desc: "Modern protocols for delegated and single sign-on access.",
                detail:
                    "OAuth lets apps access your data without sharing your password (e.g., 'Sign in with Google'). SSO lets you authenticate once and access multiple services. Both reduce password fatigue but introduce single points of failure if not secured properly.",
            },
        ],
        quiz: [
            {
                q: "Which MFA factor category does a fingerprint scan belong to?",
                opts: [
                    "Something you know",
                    "Something you have",
                    "Something you are",
                    "Something you share",
                ],
                ans: 2,
            },
            {
                q: "What is the primary benefit of a password manager?",
                opts: [
                    "Faster logins",
                    "Unique strong passwords per site",
                    "Biometric authentication",
                    "Encrypts your hard drive",
                ],
                ans: 1,
            },
            {
                q: "OAuth is primarily used for?",
                opts: [
                    "Encrypting passwords",
                    "Delegating access without sharing credentials",
                    "Blocking phishing emails",
                    "Two-factor authentication",
                ],
                ans: 1,
            },
        ],
    },
    {
        id: "network",
        icon: "🌐",
        title: "Network Security",
        color: "#06b6d4",
        summary: "Protecting data as it travels across networks and the internet.",
        topics: [
            {
                name: "Firewalls & IDS/IPS",
                desc: "Controlling and monitoring traffic entering and leaving a network.",
                detail:
                    "A firewall filters traffic based on rules (allow/block by IP, port, protocol). An IDS (Intrusion Detection System) monitors for suspicious activity and alerts admins. An IPS (Intrusion Prevention System) goes further — it actively blocks threats in real time. Together they form the first line of network defense.",
            },
            {
                name: "VPNs & Secure Tunnels",
                desc: "Encrypting network traffic to protect data in transit.",
                detail:
                    "A VPN (Virtual Private Network) creates an encrypted tunnel between your device and a server, hiding your traffic from eavesdroppers. Used by remote workers to securely access corporate networks. Protocols include OpenVPN, WireGuard, and IPSec. TLS/SSL does the same for web traffic (the padlock in your browser).",
            },
            {
                name: "Common Network Attacks",
                desc: "Understanding man-in-the-middle, DNS spoofing, and port scanning.",
                detail:
                    "A Man-in-the-Middle (MitM) attack intercepts communication between two parties. DNS spoofing redirects users to fake websites by corrupting DNS records. Port scanning (using tools like Nmap) is used by attackers to discover open services on a target. Knowing these attacks helps defenders build better protections.",
            },
        ],
        quiz: [
            {
                q: "What is the difference between an IDS and an IPS?",
                opts: [
                    "IDS encrypts traffic; IPS decrypts it",
                    "IDS only detects threats; IPS actively blocks them",
                    "IDS is hardware; IPS is software",
                    "They are the same thing",
                ],
                ans: 1,
            },
            {
                q: "Which protocol is commonly used to secure web traffic (shown as a padlock in browsers)?",
                opts: ["FTP", "HTTP", "TLS/SSL", "DNS"],
                ans: 2,
            },
            {
                q: "An attacker intercepts communication between a user and their bank. This is called?",
                opts: ["Phishing", "Port Scanning", "Man-in-the-Middle", "DNS Spoofing"],
                ans: 2,
            },
        ],
    },
    {
        id: "encryption",
        icon: "🔒",
        title: "Encryption",
        color: "#8b5cf6",
        summary: "Scrambling data so only authorized parties can read it.",
        topics: [
            {
                name: "Symmetric Encryption",
                desc: "One key is used to both encrypt and decrypt data.",
                detail:
                    "Symmetric encryption is fast and efficient, making it ideal for encrypting large amounts of data. Both sender and receiver share the same secret key. The challenge is securely exchanging that key. Common algorithms: AES-256 (used in file encryption, Wi-Fi security) and ChaCha20.",
            },
            {
                name: "Asymmetric Encryption",
                desc: "A public key encrypts data; only the private key can decrypt it.",
                detail:
                    "Asymmetric encryption uses a key pair — a public key (shared openly) and a private key (kept secret). Anyone can encrypt a message with your public key, but only you can decrypt it with your private key. Used in HTTPS, email signing, and SSH. Common algorithms: RSA, ECC. Slower than symmetric but solves the key exchange problem.",
            },
            {
                name: "Hashing",
                desc: "One-way transformation of data into a fixed-length fingerprint.",
                detail:
                    "Unlike encryption, hashing is one-way — you cannot reverse a hash to get the original data. It's used to verify integrity and store passwords securely. SHA-256 produces a 256-bit hash. bcrypt and Argon2 are used for password hashing because they're intentionally slow, making brute-force attacks impractical.",
            },
        ],
        quiz: [
            {
                q: "Which encryption type uses the same key for both encrypting and decrypting?",
                opts: ["Asymmetric", "Hashing", "Symmetric", "Public-key"],
                ans: 2,
            },
            {
                q: "What is the main advantage of asymmetric encryption over symmetric?",
                opts: [
                    "It's faster",
                    "It solves the key exchange problem",
                    "It uses shorter keys",
                    "It can't be broken",
                ],
                ans: 1,
            },
            {
                q: "Why is bcrypt preferred over SHA-256 for storing passwords?",
                opts: [
                    "It produces longer hashes",
                    "It's reversible",
                    "It's intentionally slow, resisting brute-force attacks",
                    "It uses asymmetric keys",
                ],
                ans: 2,
            },
        ],
    },
    {
        id: "social-engineering",
        icon: "🎭",
        title: "Social Engineering",
        color: "#f97316",
        summary: "Manipulating people — not systems — to gain unauthorized access.",
        topics: [
            {
                name: "Pretexting",
                desc: "Creating a fabricated scenario to manipulate a target.",
                detail:
                    "Pretexting involves inventing a believable story to extract information or access. An attacker might impersonate an IT auditor, a new employee, or a vendor. Unlike phishing, pretexting often happens in person or over the phone and relies on building trust over time before making a request.",
            },
            {
                name: "Baiting & Quid Pro Quo",
                desc: "Luring victims with something enticing or offering a fake service.",
                detail:
                    "Baiting leaves infected USB drives in parking lots, hoping curious employees will plug them in. Quid pro quo attacks offer something (e.g., free tech support) in exchange for credentials or access. Both exploit human curiosity and the desire for something free or helpful.",
            },
            {
                name: "Tailgating & Physical Security",
                desc: "Gaining physical access by following authorized personnel.",
                detail:
                    "Tailgating (or piggybacking) is when an attacker follows an authorized person through a secure door without scanning their own badge. Physical security matters as much as digital — an attacker inside your building can plug into your network, steal devices, or shoulder-surf passwords. Always challenge unknown individuals in secure areas.",
            },
        ],
        quiz: [
            {
                q: "An attacker leaves infected USB drives in a company parking lot. This is called?",
                opts: ["Pretexting", "Tailgating", "Baiting", "Vishing"],
                ans: 2,
            },
            {
                q: "What is pretexting?",
                opts: [
                    "Sending fake emails",
                    "Fabricating a scenario to manipulate a target",
                    "Following someone through a secure door",
                    "Scanning for open ports",
                ],
                ans: 1,
            },
            {
                q: "Which of these is the best defense against tailgating?",
                opts: [
                    "Stronger passwords",
                    "Firewalls",
                    "Challenging unknown individuals and enforcing badge policies",
                    "Encrypting hard drives",
                ],
                ans: 2,
            },
        ],
    },
    {
        id: "security-hygiene",
        icon: "🧹",
        title: "Security Hygiene",
        color: "#14b8a6",
        summary: "Everyday habits and practices that dramatically reduce your attack surface.",
        topics: [
            {
                name: "Device & Software Hygiene",
                desc: "Keeping your devices and software updated and hardened.",
                detail:
                    "Most breaches exploit known vulnerabilities that already have patches available. Enable automatic updates for your OS, browser, and apps. Uninstall software you don't use — every installed program is a potential attack surface. Disable services you don't need (Bluetooth, remote desktop). Enable full-disk encryption (FileVault on Mac, BitLocker on Windows) so data is unreadable if your device is stolen.",
            },
            {
                name: "Backup Strategy — The 3-2-1 Rule",
                desc: "Protecting your data so ransomware and hardware failure can't destroy it.",
                detail:
                    "The 3-2-1 rule: keep 3 copies of your data, on 2 different media types, with 1 copy offsite (cloud or physical). Test your backups regularly — an untested backup is not a backup. For organizations, backups should be air-gapped (disconnected from the main network) so ransomware can't encrypt them too. Tools: Time Machine (Mac), Windows Backup, Backblaze, and AWS S3.",
            },
            {
                name: "Least Privilege & Zero Trust",
                desc: "Only grant the access that is absolutely necessary — nothing more.",
                detail:
                    "The Principle of Least Privilege (PoLP) means every user, app, and system should have only the minimum permissions needed to do their job. Zero Trust takes this further: 'never trust, always verify' — even users inside the network must authenticate and be authorized for every resource. In practice: avoid using admin accounts for daily tasks, review permissions regularly, and revoke access immediately when someone leaves an organization.",
            },
        ],
        quiz: [
            {
                q: "What does the 3-2-1 backup rule mean?",
                opts: [
                    "3 passwords, 2 devices, 1 cloud account",
                    "3 copies of data, on 2 media types, with 1 offsite copy",
                    "Back up every 3 days, 2 weeks, and 1 month",
                    "3 encryptions, 2 keys, 1 recovery code",
                ],
                ans: 1,
            },
            {
                q: "What is the Principle of Least Privilege?",
                opts: [
                    "All users share the same admin account",
                    "Users get maximum access to avoid bottlenecks",
                    "Users and systems get only the minimum permissions needed",
                    "Privileged accounts never require passwords",
                ],
                ans: 2,
            },
            {
                q: "Why should backups be air-gapped from the main network?",
                opts: [
                    "To make them faster to access",
                    "To prevent ransomware from encrypting them too",
                    "To comply with GDPR",
                    "To allow public access",
                ],
                ans: 1,
            },
        ],
    },
    // ── 4 UNIQUE MODULES ──────────────────────────────────────────────────────
    {
        id: "darkweb",
        icon: "🕵️",
        title: "Dark Web & OSINT",
        color: "#64748b",
        summary: "How attackers use hidden networks and open-source intelligence.",
        topics: [
            {
                name: "What is the Dark Web?",
                desc: "The encrypted, anonymous layer of the internet not indexed by search engines.",
                detail:
                    "The internet has three layers: the Surface Web (Google-indexed), the Deep Web (paywalled/private content like email), and the Dark Web (requires Tor browser, intentionally anonymous). Cybercriminals use the dark web to sell stolen credentials, malware, and hacking services. Security researchers also monitor it to detect data breaches early.",
            },
            {
                name: "OSINT — Open Source Intelligence",
                desc: "Gathering information about targets using publicly available sources.",
                detail:
                    "OSINT is the practice of collecting intelligence from public sources: social media, job postings, WHOIS records, GitHub repos, and news articles. Attackers use OSINT to profile targets before an attack. Defenders use it to understand their own exposure. Tools include Maltego, Shodan (finds internet-connected devices), and theHarvester.",
            },
            {
                name: "Protecting Your Digital Footprint",
                desc: "Reducing the information attackers can gather about you or your organization.",
                detail:
                    "Every public post, job listing, and GitHub commit tells attackers something. Minimize exposure by: auditing what your organization shares publicly, scrubbing sensitive info from job postings (don't list internal tools), setting social media to private, and using Have I Been Pwned (haveibeenpwned.com) to check if your credentials appear in known data breaches.",
            },
        ],
        quiz: [
            {
                q: "Which tool is used to find internet-connected devices exposed to the public internet?",
                opts: ["Maltego", "Shodan", "Wireshark", "Nmap"],
                ans: 1,
            },
            {
                q: "What layer of the internet requires the Tor browser to access?",
                opts: ["Surface Web", "Deep Web", "Dark Web", "Shadow Web"],
                ans: 2,
            },
            {
                q: "OSINT primarily uses which type of sources?",
                opts: [
                    "Classified government databases",
                    "Hacked private servers",
                    "Publicly available information",
                    "Encrypted dark web forums",
                ],
                ans: 2,
            },
        ],
    },
    {
        id: "incident-response",
        icon: "🚨",
        title: "Incident Response",
        color: "#dc2626",
        summary: "How organizations detect, contain, and recover from cyberattacks.",
        topics: [
            {
                name: "The IR Lifecycle",
                desc: "The 6 phases every security team follows after a breach.",
                detail:
                    "NIST defines 6 IR phases: (1) Preparation — building plans and tools before an incident; (2) Identification — detecting and confirming an incident occurred; (3) Containment — stopping the spread (short-term: isolate affected systems; long-term: patch and harden); (4) Eradication — removing the threat entirely; (5) Recovery — restoring systems safely; (6) Lessons Learned — documenting what happened and improving defenses.",
            },
            {
                name: "Digital Forensics",
                desc: "Collecting and preserving evidence from compromised systems.",
                detail:
                    "Digital forensics involves capturing memory dumps, disk images, and log files without altering the original evidence (chain of custody). Forensic analysts look for indicators of compromise (IOCs): unusual processes, modified files, unknown network connections. Tools: Autopsy, Volatility (memory forensics), and FTK Imager.",
            },
            {
                name: "Tabletop Exercises",
                desc: "Simulated attack scenarios used to train and test IR teams.",
                detail:
                    "A tabletop exercise walks a team through a simulated breach scenario in a meeting room — no systems are actually touched. Teams discuss what they would do at each stage. It exposes gaps in communication, unclear roles, and missing playbooks. Most security frameworks (NIST, ISO 27001) recommend running these at least annually.",
            },
        ],
        quiz: [
            {
                q: "Which IR phase involves isolating affected systems to stop an attack from spreading?",
                opts: ["Identification", "Eradication", "Containment", "Recovery"],
                ans: 2,
            },
            {
                q: "What is the purpose of a tabletop exercise?",
                opts: [
                    "To install new security software",
                    "To simulate an attack and test team response without touching real systems",
                    "To recover deleted files",
                    "To scan for open ports",
                ],
                ans: 1,
            },
            {
                q: "Which tool is used for memory forensics during incident response?",
                opts: ["Nmap", "Wireshark", "Volatility", "Metasploit"],
                ans: 2,
            },
        ],
    },
    {
        id: "secure-coding",
        icon: "💻",
        title: "Secure Coding",
        color: "#16a34a",
        summary: "Writing code that is resistant to attacks from the ground up.",
        topics: [
            {
                name: "OWASP Top 10",
                desc: "The ten most critical web application security risks.",
                detail:
                    "OWASP (Open Worldwide Application Security Project) publishes the Top 10 most dangerous web vulnerabilities. The current list includes: Injection (SQL, command), Broken Authentication, Sensitive Data Exposure, XML External Entities, Broken Access Control, Security Misconfiguration, XSS (Cross-Site Scripting), Insecure Deserialization, Using Components with Known Vulnerabilities, and Insufficient Logging. Every developer should know this list.",
            },
            {
                name: "SQL Injection & XSS",
                desc: "Two of the most exploited vulnerabilities in web applications.",
                detail:
                    "SQL Injection tricks a database into executing malicious queries by inserting SQL code into input fields (e.g., username: `admin'--`). Prevention: use parameterized queries / prepared statements, never concatenate user input into SQL. XSS (Cross-Site Scripting) injects malicious JavaScript into a webpage viewed by other users. Prevention: sanitize and encode all user-supplied output, use Content Security Policy (CSP) headers.",
            },
            {
                name: "Shift Left Security",
                desc: "Integrating security into every stage of the development lifecycle.",
                detail:
                    "Shift Left means moving security earlier (left) in the software development lifecycle — catching vulnerabilities during design and coding rather than after deployment. Practices include threat modeling, code reviews, static analysis (SAST tools like Semgrep, Snyk), dependency scanning, and security unit tests. The earlier a bug is caught, the cheaper it is to fix.",
            },
        ],
        quiz: [
            {
                q: "What is the best defense against SQL Injection?",
                opts: [
                    "Firewalls",
                    "Parameterized queries / prepared statements",
                    "Encryption",
                    "Strong passwords",
                ],
                ans: 1,
            },
            {
                q: "XSS attacks inject what into web pages?",
                opts: ["SQL commands", "Malicious JavaScript", "Encrypted payloads", "Fake DNS records"],
                ans: 1,
            },
            {
                q: "What does 'Shift Left' mean in secure development?",
                opts: [
                    "Moving servers to the left side of the data center",
                    "Integrating security earlier in the development lifecycle",
                    "Using left-to-right encryption",
                    "Shifting firewall rules to allow more traffic",
                ],
                ans: 1,
            },
        ],
    },
    {
        id: "cyber-law",
        icon: "⚖️",
        title: "Cyber Law & Ethics",
        color: "#0ea5e9",
        summary: "The legal and ethical boundaries every security professional must know.",
        topics: [
            {
                name: "Key Cybersecurity Laws",
                desc: "Laws that govern data protection, hacking, and privacy.",
                detail:
                    "CFAA (Computer Fraud and Abuse Act) — US law making unauthorized computer access a federal crime. GDPR (General Data Protection Regulation) — EU law requiring organizations to protect personal data and report breaches within 72 hours. HIPAA — protects health data in the US. FERPA — protects student education records. Violating these carries heavy fines and criminal penalties. Security professionals must know which laws apply to their industry.",
            },
            {
                name: "Ethical Hacking & Scope",
                desc: "The difference between legal penetration testing and criminal hacking.",
                detail:
                    "Ethical hacking (penetration testing) is authorized — the tester has written permission (a 'scope of work') defining exactly what systems can be tested and when. Anything outside that scope is illegal, even if done with good intentions. Bug bounty programs (HackerOne, Bugcrowd) let researchers legally find and report vulnerabilities for rewards. Always get written authorization before testing any system.",
            },
            {
                name: "Responsible Disclosure",
                desc: "How to ethically report vulnerabilities you discover.",
                detail:
                    "Responsible disclosure (also called coordinated disclosure) means privately reporting a vulnerability to the affected organization and giving them time to fix it before going public. The standard window is 90 days (Google Project Zero's policy). Going public immediately (full disclosure) can harm users. Selling vulnerabilities to criminal groups is illegal and unethical. Always disclose responsibly.",
            },
        ],
        quiz: [
            {
                q: "Which US law makes unauthorized computer access a federal crime?",
                opts: ["GDPR", "HIPAA", "CFAA", "FERPA"],
                ans: 2,
            },
            {
                q: "What document must an ethical hacker always have before testing a system?",
                opts: [
                    "A non-disclosure agreement",
                    "Written authorization defining the scope",
                    "A government-issued security clearance",
                    "A bug bounty account",
                ],
                ans: 1,
            },
            {
                q: "Responsible disclosure means?",
                opts: [
                    "Publishing vulnerabilities immediately to warn users",
                    "Selling vulnerabilities to the highest bidder",
                    "Privately reporting vulnerabilities and giving organizations time to fix them",
                    "Reporting bugs only to law enforcement",
                ],
                ans: 2,
            },
        ],
    },
    {
        id: "ai-skills",
        icon: "🤖",
        title: "AI for Cybersecurity",
        color: "#f59e0b",
        summary: "Using AI tools effectively and responsibly in security contexts.",
        topics: [
            {
                name: "What is Prompt Engineering?",
                desc: "Crafting inputs to get accurate, useful outputs from AI models.",
                detail:
                    "Prompt engineering is the skill of writing clear, structured instructions for AI. Key techniques: role-setting ('You are a security analyst...'), chain-of-thought ('Think step by step...'), few-shot examples (showing the AI sample inputs/outputs), and constraints ('Answer in 3 bullet points only'). Better prompts = better results.",
            },
            {
                name: "AI in Threat Detection",
                desc: "How AI is used to identify and respond to cyber threats.",
                detail:
                    "AI analyzes massive volumes of logs, network traffic, and user behavior to detect anomalies that humans would miss. Tools like Darktrace, CrowdStrike Falcon, and Microsoft Sentinel use ML for real-time threat hunting, malware classification, and incident response automation.",
            },
            {
                name: "Using AI Responsibly",
                desc: "Safe practices when using AI tools in security work.",
                detail:
                    "Never paste real credentials, PII, or internal system details into public AI tools. Always verify AI-generated security advice against authoritative sources: NIST, OWASP, and MITRE ATT&CK. AI can hallucinate — treat its output as a starting point, not a final answer.",
            },
        ],
        quiz: [
            {
                q: "Which prompt technique asks the AI to reason step by step before answering?",
                opts: ["Zero-shot", "Few-shot", "Chain-of-thought", "Role prompting"],
                ans: 2,
            },
            {
                q: "What should you NEVER do when using AI for security research?",
                opts: [
                    "Ask for explanations of concepts",
                    "Paste real credentials or PII",
                    "Request code examples",
                    "Ask it to compare attack techniques",
                ],
                ans: 1,
            },
            {
                q: "Which organization publishes the ATT&CK framework used in AI threat detection?",
                opts: ["NIST", "OWASP", "MITRE", "CISA"],
                ans: 2,
            },
        ],
    },
];

export default modules;