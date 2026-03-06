const CLAUDE_API_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-sonnet-4-20250514";

/**
 * Sends a prompt to Claude and returns the response text.
 * @param {string} prompt - The user prompt to send.
 * @param {string} systemPrompt - Optional system-level instruction.
 * @returns {Promise<string>} - Claude's response as a plain string.
 */
export async function askClaude(prompt, systemPrompt = "") {
    const body = {
        model: MODEL,
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
    };

    if (systemPrompt) {
        body.system = systemPrompt;
    }

    const response = await fetch(CLAUDE_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err?.error?.message || "Claude API request failed");
    }

    const data = await response.json();

    // Extract all text blocks from the response
    return data.content
        .filter((block) => block.type === "text")
        .map((block) => block.text)
        .join("\n");
}

// ─── Prompts for the Threat Simulation module ───────────────────────

export const THREAT_SCENARIOS = [
    {
        id: "phishing-email",
        label: "🎣 Phishing Email",
        prompt: `You are a cybersecurity training simulator for students.
Generate a realistic phishing email scenario using invented (fake) names and companies.
Format it exactly like an email:

FROM: ...
TO: student@university.edu
SUBJECT: ...
BODY:
...

After the email, write:
"--- TRAINING CHALLENGE ---"
Then ask: "What red flags do you notice in this email, and what steps should you take?"
Keep the total response under 250 words.`,
    },
    {
        id: "suspicious-login",
        label: "🔑 Suspicious Login Alert",
        prompt: `You are a cybersecurity training simulator for students.
Describe a scenario where the student receives a security alert:
a login to their university account from an unrecognized device in a foreign country at 3am.

Write the alert message as it would appear on screen, then write:
"--- TRAINING CHALLENGE ---"
Then ask: "Walk through the exact steps you would take to respond to this incident."
Keep the total response under 250 words.`,
    },
    {
        id: "ransomware",
        label: "💀 Ransomware Notice",
        prompt: `You are a cybersecurity training simulator for students.
Describe a scenario where a student opens an email attachment and a ransomware demand screen appears.
Write the ransomware message as it would appear on screen, then write:
"--- TRAINING CHALLENGE ---"
Then ask: "What should you do immediately, and what could have prevented this attack?"
Keep the total response under 250 words.`,
    },
    {
        id: "social-engineering",
        label: "📞 Social Engineering Call",
        prompt: `You are a cybersecurity training simulator for students.
Write a short dialogue transcript of a social engineering phone call where someone impersonates IT support
and tries to get the student to reveal their password.

Format it as:
CALLER: ...
STUDENT: ...
(continue for 4-5 exchanges)

Then write:
"--- TRAINING CHALLENGE ---"
Then ask: "What red flags did you notice and how should the student have responded?"
Keep the total response under 300 words.`,
    },
];

/**
 * Sends a student's threat response to Claude for grading feedback.
 * @param {string} scenario - The scenario text shown to the student.
 * @param {string} studentAnswer - The student's written response.
 * @returns {Promise<string>} - Instructor feedback from Claude.
 */
export async function gradeThreatResponse(scenario, studentAnswer) {
    const prompt = `You are a cybersecurity instructor grading a student's response to a training scenario.

SCENARIO SHOWN TO STUDENT:
${scenario}

STUDENT'S RESPONSE:
"${studentAnswer}"

Provide brief, constructive feedback in this format:
✅ What they got right:
(1-2 sentences)

⚠️ What they missed:
(1-2 sentences)

💡 Key takeaway:
(1 sentence)

Keep your total response under 150 words.`;

    return askClaude(prompt);
}