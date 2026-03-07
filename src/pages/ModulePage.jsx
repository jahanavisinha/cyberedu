import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import modules from "../data/modules";

export default function ModulePage() {
    const { id } = useParams();
    const mod = modules.find((m) => m.id === id);
    const [tab, setTab] = useState("learn");
    const [quizState, setQuizState] = useState({ idx: 0, score: 0, answered: null, done: false });

    if (!mod) {
        return (
            <div style={{ ...styles.page, textAlign: "center", paddingTop: "4rem" }}>
                <div style={{ fontSize: "3rem" }}>🔍</div>
                <p style={{ color: "#94a3b8" }}>Module not found.</p>
                <Link to="/" style={{ color: "#6366f1" }}>← Back to Home</Link>
            </div>
        );
    }

    const q = mod.quiz[quizState.idx];

    const handleAnswer = (i) => {
        if (quizState.answered !== null) return;
        const correct = i === q.ans;
        setQuizState((s) => ({ ...s, answered: i, score: correct ? s.score + 1 : s.score }));
    };

    const nextQuestion = () => {
        const next = quizState.idx + 1;
        if (next >= mod.quiz.length) setQuizState((s) => ({ ...s, done: true }));
        else setQuizState((s) => ({ ...s, idx: next, answered: null }));
    };

    const resetQuiz = () => setQuizState({ idx: 0, score: 0, answered: null, done: false });

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                {/* Back link */}
                <Link to="/" style={styles.back}>← Back to Home</Link>

                {/* Header */}
                <div style={styles.header}>
                    <span style={styles.headerIcon}>{mod.icon}</span>
                    <div>
                        <h1 style={{ ...styles.title, color: mod.color }}>{mod.title}</h1>
                        <p style={styles.summary}>{mod.summary}</p>
                    </div>
                </div>

                {/* Tabs */}
                <div style={styles.tabs}>
                    {["learn", "quiz"].map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            style={{
                                ...styles.tab,
                                background: tab === t ? mod.color : "#1e293b",
                                color: tab === t ? "#fff" : "#94a3b8",
                            }}
                        >
                            {t === "learn" ? "📖 Learn" : "🧠 Quiz"}
                        </button>
                    ))}
                </div>

                {/* Learn Tab */}
                {tab === "learn" && (
                    <div style={styles.topicList}>
                        {mod.topics.map((topic, i) => (
                            <div key={i} style={{ ...styles.topicCard, borderLeftColor: mod.color }}>
                                <div style={{ ...styles.topicName, color: mod.color }}>{topic.name}</div>
                                <div style={styles.topicDesc}>{topic.desc}</div>
                                <div style={styles.topicDetail}>{topic.detail}</div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Quiz Tab */}
                {tab === "quiz" && !quizState.done && (
                    <div style={styles.quizBox}>
                        <div style={styles.quizMeta}>
                            Question {quizState.idx + 1} of {mod.quiz.length}
                        </div>
                        <div style={styles.question}>{q.q}</div>
                        <div style={styles.options}>
                            {q.opts.map((opt, i) => {
                                let bg = "#0f172a", border = "#334155", color = "#e2e8f0";
                                if (quizState.answered !== null) {
                                    if (i === q.ans) { bg = "#10b98122"; border = "#10b981"; color = "#10b981"; }
                                    else if (i === quizState.answered && i !== q.ans) { bg = "#ef444422"; border = "#ef4444"; color = "#ef4444"; }
                                }
                                return (
                                    <div
                                        key={i}
                                        onClick={() => handleAnswer(i)}
                                        style={{ ...styles.option, background: bg, borderColor: border, color,
                                            cursor: quizState.answered === null ? "pointer" : "default" }}
                                    >
                                        {opt}
                                    </div>
                                );
                            })}
                        </div>
                        {quizState.answered !== null && (
                            <div style={styles.feedback}>
                                {quizState.answered === q.ans
                                 ? "✅ Correct!"
                                 : `❌ Incorrect — the correct answer was: ${q.opts[q.ans]}`}
                                <button onClick={nextQuestion} style={{ ...styles.btn, background: mod.color }}>
                                    {quizState.idx + 1 < mod.quiz.length ? "Next Question →" : "See Results"}
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* Quiz Results */}
                {tab === "quiz" && quizState.done && (
                    <div style={styles.results}>
                        <div style={styles.resultIcon}>
                            {quizState.score === mod.quiz.length ? "🏆" : quizState.score >= mod.quiz.length / 2 ? "📊" : "📚"}
                        </div>
                        <div style={{ ...styles.resultScore, color: mod.color }}>
                            {quizState.score} / {mod.quiz.length}
                        </div>
                        <div style={styles.resultMsg}>
                            {quizState.score === mod.quiz.length
                             ? "Perfect score! You've mastered this module."
                             : quizState.score >= mod.quiz.length / 2
                               ? "Good effort! Review the topics and try again."
                               : "Keep studying — you've got this!"}
                        </div>
                        <button onClick={resetQuiz} style={{ ...styles.btn, background: mod.color }}>
                            Retry Quiz
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {
    page: { minHeight: "100vh", background: "#0f172a", color: "#e2e8f0", fontFamily: "system-ui, sans-serif", padding: "2rem" },
    container: { maxWidth: 780, margin: "0 auto" },
    back: { color: "#94a3b8", textDecoration: "none", fontSize: "0.9rem", display: "inline-block", marginBottom: "1.5rem" },
    header: { display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.8rem" },
    headerIcon: { fontSize: "3rem" },
    title: { fontSize: "1.8rem", fontWeight: 800, margin: 0 },
    summary: { color: "#94a3b8", margin: "0.3rem 0 0", fontSize: "0.95rem" },
    tabs: { display: "flex", gap: "0.5rem", marginBottom: "1.5rem" },
    tab: { padding: "0.45rem 1.2rem", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.9rem" },
    topicList: { display: "flex", flexDirection: "column", gap: "1rem" },
    topicCard: { background: "#1e293b", borderRadius: 12, padding: "1.3rem", borderLeft: "4px solid" },
    topicName: { fontWeight: 700, fontSize: "1rem", marginBottom: "0.3rem" },
    topicDesc: { color: "#cbd5e1", fontSize: "0.88rem", marginBottom: "0.6rem", fontWeight: 500 },
    topicDetail: { color: "#94a3b8", fontSize: "0.85rem", lineHeight: 1.65 },
    quizBox: { background: "#1e293b", borderRadius: 12, padding: "1.8rem" },
    quizMeta: { color: "#475569", fontSize: "0.8rem", marginBottom: "0.8rem" },
    question: { fontSize: "1.05rem", fontWeight: 600, marginBottom: "1.2rem", lineHeight: 1.5 },
    options: { display: "flex", flexDirection: "column", gap: "0.6rem" },
    option: { padding: "0.8rem 1rem", borderRadius: 8, border: "1px solid", fontSize: "0.9rem", transition: "all 0.15s" },
    feedback: { marginTop: "1.2rem", display: "flex", flexDirection: "column", gap: "0.8rem", color: "#e2e8f0", fontSize: "0.9rem" },
    btn: { padding: "0.5rem 1.3rem", border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontWeight: 600, fontSize: "0.9rem", alignSelf: "flex-start" },
    results: { background: "#1e293b", borderRadius: 12, padding: "2.5rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem" },
    resultIcon: { fontSize: "3rem" },
    resultScore: { fontSize: "2rem", fontWeight: 800 },
    resultMsg: { color: "#94a3b8", fontSize: "0.95rem" },
};