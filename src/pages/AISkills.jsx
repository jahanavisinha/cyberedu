import { useState } from "react";
import { askClaude } from "../api/claude";

const PROMPT_TECHNIQUES = [
    {
        name: "Role Prompting",
        icon: "🎭",
        desc: "Tell the AI to act as a specific expert to get more focused answers.",
        example: `"You are a cybersecurity analyst. Explain how a SQL injection attack works."`,
        why: "Giving the AI a role anchors its tone, vocabulary, and depth to that domain.",
    },
    {
        name: "Chain-of-Thought",
        icon: "🧠",
        desc: "Ask the AI to reason step by step before giving a final answer.",
        example: `"Think step by step: what would an attacker do after gaining initial access to a network?"`,
        why: "Forces the model to reason through problems rather than jump to conclusions, improving accuracy.",
    },
    {
        name: "Few-Shot Examples",
        icon: "📋",
        desc: "Show the AI 2-3 examples of what you want before asking your question.",
        example: `"Here are two examples of phishing red flags: [example 1], [example 2]. Now analyze this email: ..."`,
        why: "Examples teach the AI the format and style you expect, producing more consistent output.",
    },
    {
        name: "Constraints",
        icon: "📐",
        desc: "Set clear boundaries on format, length, or scope.",
        example: `"In exactly 3 bullet points, list the most critical steps after a data breach."`,
        why: "Constraints prevent the AI from being vague or overly verbose — you get exactly what you need.",
    },
    {
        name: "Iterative Refinement",
        icon: "🔁",
        desc: "Start broad, then follow up with more specific prompts to drill deeper.",
        example: `First: "Explain MFA." Then: "Now explain specifically how TOTP-based MFA works under the hood."`,
        why: "No single prompt needs to be perfect. Building on responses is how experts use AI effectively.",
    },
];

const SANDBOX_STARTERS = [
    "You are a cybersecurity instructor. Explain phishing to a beginner in 3 bullet points.",
    "Think step by step: how would an attacker perform a brute force attack on a login page?",
    "In 2 sentences each, compare symmetric and asymmetric encryption.",
    "You are a SOC analyst. What are the first 5 steps you take when you suspect a breach?",
];

export default function AISkills() {
    const [activeCard, setActiveCard] = useState(null);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const runPrompt = async () => {
        if (!prompt.trim()) return;
        setLoading(true);
        setResponse("");
        try {
            const result = await askClaude(prompt);
            setResponse(result);
        } catch (err) {
            setResponse("❌ Error: " + err.message);
        }
        setLoading(false);
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>

                {/* Header */}
                <div style={styles.header}>
                    <h1 style={styles.title}>🤖 AI Skills & Prompt Engineering</h1>
                    <p style={styles.subtitle}>
                        Learn how to communicate with AI effectively — a critical skill for
                        modern cybersecurity professionals.
                    </p>
                </div>

                {/* What is Prompt Engineering */}
                <div style={styles.infoBox}>
                    <div style={styles.infoTitle}>💡 What is Prompt Engineering?</div>
                    <p style={styles.infoText}>
                        Prompt engineering is the practice of crafting clear, structured inputs
                        to guide AI models toward accurate and useful outputs. Just like a Google
                        search works better with the right keywords, AI works better with
                        well-structured prompts. In cybersecurity, this skill helps you use AI
                        tools for threat analysis, log review, report writing, and more.
                    </p>
                </div>

                {/* Techniques */}
                <h2 style={styles.sectionTitle}>🛠️ Core Techniques</h2>
                <div style={styles.techniqueGrid}>
                    {PROMPT_TECHNIQUES.map((t, i) => (
                        <div
                            key={i}
                            onClick={() => setActiveCard(activeCard === i ? null : i)}
                            style={{
                                ...styles.techniqueCard,
                                borderColor: activeCard === i ? "#6366f1" : "#1e293b",
                                background: activeCard === i ? "#6366f115" : "#1e293b",
                            }}
                        >
                            <div style={styles.techniqueHeader}>
                                <span style={styles.techniqueIcon}>{t.icon}</span>
                                <span style={styles.techniqueName}>{t.name}</span>
                                <span style={styles.chevron}>{activeCard === i ? "▲" : "▼"}</span>
                            </div>
                            <div style={styles.techniqueDesc}>{t.desc}</div>
                            {activeCard === i && (
                                <div style={styles.techniqueExpanded}>
                                    <div style={styles.exampleBox}>
                                        <div style={styles.exampleLabel}>Example prompt</div>
                                        <div style={styles.exampleText}>{t.example}</div>
                                    </div>
                                    <div style={styles.whyText}>📌 {t.why}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Prompt Sandbox */}
                <h2 style={styles.sectionTitle}>🧪 Prompt Sandbox</h2>
                <p style={styles.sandboxDesc}>
                    Practice writing prompts below. Try the starters or write your own.
                </p>

                {/* Starter chips */}
                <div style={styles.starters}>
                    {SANDBOX_STARTERS.map((s, i) => (
                        <button
                            key={i}
                            onClick={() => setPrompt(s)}
                            style={styles.starterChip}
                        >
                            {s.length > 60 ? s.slice(0, 60) + "..." : s}
                        </button>
                    ))}
                </div>

                {/* Textarea */}
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Write your prompt here..."
                    style={styles.textarea}
                />
                <button
                    onClick={runPrompt}
                    disabled={loading || !prompt.trim()}
                    style={{
                        ...styles.runBtn,
                        opacity: loading || !prompt.trim() ? 0.5 : 1,
                    }}
                >
                    {loading ? "Running..." : "▶ Run Prompt"}
                </button>

                {/* Response */}
                {response && (
                    <div style={styles.responseBox}>
                        <div style={styles.responseLabel}>🤖 Claude's Response</div>
                        <pre style={styles.responseText}>{response}</pre>
                    </div>
                )}

                {/* Responsible Use */}
                <div style={styles.warningBox}>
                    <div style={styles.warningTitle}>⚠️ Responsible AI Use</div>
                    <ul style={styles.warningList}>
                        <li>Never paste real credentials, passwords, or PII into AI tools.</li>
                        <li>Always verify security advice against NIST, OWASP, or MITRE ATT&CK.</li>
                        <li>AI can hallucinate — treat output as a starting point, not ground truth.</li>
                        <li>Be aware that prompts sent to cloud AI may be logged by the provider.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

const styles = {
    page: { minHeight: "100vh", background: "#0f172a", color: "#e2e8f0", fontFamily: "system-ui, sans-serif", padding: "2rem" },
    container: { maxWidth: 780, margin: "0 auto" },
    header: { marginBottom: "1.8rem" },
    title: { fontSize: "1.8rem", fontWeight: 800, color: "#6366f1", margin: "0 0 0.5rem" },
    subtitle: { color: "#94a3b8", fontSize: "0.95rem", margin: 0, lineHeight: 1.6 },
    infoBox: { background: "#1e293b", borderRadius: 12, padding: "1.4rem", marginBottom: "2rem", borderLeft: "4px solid #6366f1" },
    infoTitle: { fontWeight: 700, color: "#6366f1", marginBottom: "0.6rem", fontSize: "1rem" },
    infoText: { color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 },
    sectionTitle: { fontSize: "1.1rem", fontWeight: 700, color: "#e2e8f0", margin: "0 0 1rem" },
    techniqueGrid: { display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2rem" },
    techniqueCard: { borderRadius: 10, border: "1px solid", padding: "1rem 1.2rem", cursor: "pointer", transition: "all 0.2s" },
    techniqueHeader: { display: "flex", alignItems: "center", gap: "0.7rem" },
    techniqueIcon: { fontSize: "1.2rem" },
    techniqueName: { fontWeight: 700, fontSize: "0.95rem", flex: 1 },
    chevron: { color: "#475569", fontSize: "0.7rem" },
    techniqueDesc: { color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.3rem" },
    techniqueExpanded: { marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.8rem" },
    exampleBox: { background: "#0f172a", borderRadius: 8, padding: "0.9rem" },
    exampleLabel: { fontSize: "0.72rem", color: "#475569", fontWeight: 700, letterSpacing: "0.07em", marginBottom: "0.4rem" },
    exampleText: { color: "#a5b4fc", fontSize: "0.85rem", fontStyle: "italic", lineHeight: 1.5 },
    whyText: { color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.5 },
    sandboxDesc: { color: "#94a3b8", fontSize: "0.88rem", margin: "0 0 1rem" },
    starters: { display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" },
    starterChip: { padding: "0.4rem 0.9rem", borderRadius: 20, border: "1px solid #334155", background: "#1e293b", color: "#94a3b8", cursor: "pointer", fontSize: "0.78rem", textAlign: "left" },
    textarea: { width: "100%", minHeight: 110, background: "#1e293b", border: "1px solid #334155", borderRadius: 8, color: "#e2e8f0", padding: "0.9rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", lineHeight: 1.6 },
    runBtn: { marginTop: "0.7rem", padding: "0.6rem 1.5rem", background: "#6366f1", border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: "0.9rem" },
    responseBox: { background: "#1e293b", borderRadius: 12, padding: "1.4rem", marginTop: "1.2rem", border: "1px solid #334155" },
    responseLabel: { fontSize: "0.8rem", fontWeight: 700, color: "#6366f1", marginBottom: "0.7rem" },
    responseText: { whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: "0.9rem", color: "#e2e8f0", lineHeight: 1.7, margin: 0 },
    warningBox: { background: "#f59e0b11", border: "1px solid #f59e0b33", borderRadius: 12, padding: "1.3rem", marginTop: "2rem" },
    warningTitle: { fontWeight: 700, color: "#f59e0b", marginBottom: "0.7rem" },
    warningList: { color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.8, paddingLeft: "1.2rem", margin: 0 },
};