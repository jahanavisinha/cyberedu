import { useState } from "react";
import { THREAT_SCENARIOS, gradeThreatResponse } from "../api/claude";

export default function Simulation() {
    const [scenario, setScenario] = useState(null);
    const [scenarioText, setScenarioText] = useState("");
    const [loadingScenario, setLoadingScenario] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState("");
    const [loadingFeedback, setLoadingFeedback] = useState(false);

    const loadScenario = async (s) => {
        setScenario(s);
        setScenarioText("");
        setUserAnswer("");
        setFeedback("");
        setLoadingScenario(true);
        try {
            const { askClaude } = await import("../api/claude");
            const text = await askClaude(s.prompt);
            setScenarioText(text);
        } catch (err) {
            setScenarioText("❌ Failed to load scenario. Check your API key and try again.");
        }
        setLoadingScenario(false);
    };

    const submitAnswer = async () => {
        if (!userAnswer.trim()) return;
        setLoadingFeedback(true);
        setFeedback("");
        try {
            const result = await gradeThreatResponse(scenarioText, userAnswer);
            setFeedback(result);
        } catch {
            setFeedback("❌ Failed to get feedback. Please try again.");
        }
        setLoadingFeedback(false);
    };

    return (
        <div style={styles.page}>
            <div style={styles.container}>

                {/* Header */}
                <div style={styles.header}>
                    <h1 style={styles.title}>⚠️ AI Threat Simulation</h1>
                    <p style={styles.subtitle}>
                        Select a scenario, read it carefully, write your response, and get
                        instant feedback from an AI instructor.
                    </p>
                </div>

                {/* Scenario Buttons */}
                <div style={styles.scenarioButtons}>
                    {THREAT_SCENARIOS.map((s) => (
                        <button
                            key={s.id}
                            onClick={() => loadScenario(s)}
                            style={{
                                ...styles.scenarioBtn,
                                borderColor: scenario?.id === s.id ? "#f59e0b" : "#334155",
                                background: scenario?.id === s.id ? "#f59e0b22" : "#1e293b",
                                color: scenario?.id === s.id ? "#f59e0b" : "#94a3b8",
                            }}
                        >
                            {s.label}
                        </button>
                    ))}
                </div>

                {/* Loading */}
                {loadingScenario && (
                    <div style={styles.loading}>🔄 Generating scenario...</div>
                )}

                {/* Scenario Text */}
                {scenarioText && !loadingScenario && (
                    <div style={styles.scenarioBox}>
                        <div style={styles.scenarioLabel}>📋 YOUR SCENARIO</div>
                        <pre style={styles.scenarioText}>{scenarioText}</pre>
                    </div>
                )}

                {/* Answer Box */}
                {scenarioText && !loadingScenario && (
                    <div style={styles.answerSection}>
                        <label style={styles.answerLabel}>
                            ✍️ Your Response
                        </label>
                        <textarea
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="Type your response here — identify the threats, red flags, and what steps you would take..."
                            style={styles.textarea}
                        />
                        <button
                            onClick={submitAnswer}
                            disabled={loadingFeedback || !userAnswer.trim()}
                            style={{
                                ...styles.submitBtn,
                                opacity: loadingFeedback || !userAnswer.trim() ? 0.5 : 1,
                            }}
                        >
                            {loadingFeedback ? "Analyzing..." : "Submit for AI Feedback →"}
                        </button>
                    </div>
                )}

                {/* Feedback */}
                {feedback && (
                    <div style={styles.feedbackBox}>
                        <div style={styles.feedbackLabel}>🤖 AI Instructor Feedback</div>
                        <pre style={styles.feedbackText}>{feedback}</pre>
                    </div>
                )}

                {/* Empty state */}
                {!scenario && (
                    <div style={styles.emptyState}>
                        <div style={{ fontSize: "3rem" }}>👆</div>
                        <p style={{ color: "#475569", marginTop: "1rem" }}>
                            Select a scenario above to get started.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
}

const styles = {
    page: { minHeight: "100vh", background: "#0f172a", color: "#e2e8f0", fontFamily: "system-ui, sans-serif", padding: "2rem" },
    container: { maxWidth: 780, margin: "0 auto" },
    header: { marginBottom: "1.8rem" },
    title: { fontSize: "1.8rem", fontWeight: 800, color: "#f59e0b", margin: "0 0 0.5rem" },
    subtitle: { color: "#94a3b8", fontSize: "0.95rem", margin: 0, lineHeight: 1.6 },
    scenarioButtons: { display: "flex", flexWrap: "wrap", gap: "0.7rem", marginBottom: "1.8rem" },
    scenarioBtn: { padding: "0.5rem 1.1rem", borderRadius: 8, border: "1px solid", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", transition: "all 0.2s" },
    loading: { textAlign: "center", color: "#f59e0b", padding: "2rem", fontSize: "1rem" },
    scenarioBox: { background: "#1e293b", borderRadius: 12, padding: "1.5rem", marginBottom: "1.2rem", border: "1px solid #334155" },
    scenarioLabel: { fontSize: "0.75rem", fontWeight: 700, color: "#475569", letterSpacing: "0.08em", marginBottom: "0.8rem" },
    scenarioText: { whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: "0.9rem", color: "#e2e8f0", lineHeight: 1.7, margin: 0 },
    answerSection: { display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "1.2rem" },
    answerLabel: { fontSize: "0.9rem", fontWeight: 600, color: "#cbd5e1" },
    textarea: { width: "100%", minHeight: 130, background: "#1e293b", border: "1px solid #334155", borderRadius: 8, color: "#e2e8f0", padding: "0.9rem", fontSize: "0.9rem", resize: "vertical", boxSizing: "border-box", fontFamily: "inherit", lineHeight: 1.6 },
    submitBtn: { alignSelf: "flex-start", padding: "0.6rem 1.5rem", background: "#f59e0b", border: "none", borderRadius: 8, color: "#0f172a", fontWeight: 700, cursor: "pointer", fontSize: "0.9rem" },
    feedbackBox: { background: "#10b98115", border: "1px solid #10b98144", borderRadius: 12, padding: "1.5rem" },
    feedbackLabel: { fontSize: "0.85rem", fontWeight: 700, color: "#10b981", marginBottom: "0.8rem" },
    feedbackText: { whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: "0.9rem", color: "#e2e8f0", lineHeight: 1.7, margin: 0 },
    emptyState: { textAlign: "center", paddingTop: "4rem" },
};