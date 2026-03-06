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