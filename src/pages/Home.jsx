import { Link } from "react-router-dom";
import modules from "../data/modules";
import { useProgress } from "../context/ProgressContext";

export default function Home() {
    const { completed, resetProgress } = useProgress();
    const total = modules.length;
    const done = completed.size;
    const pct = Math.round((done / total) * 100);

    return (
        <div style={styles.page}>
            {/* Hero */}
            <div style={styles.hero}>
                <div style={styles.heroIcon}>🛡️</div>
                <h1 style={styles.heroTitle}>Welcome to CyberEdu</h1>
                <p style={styles.heroSub}>
                    Learn core cybersecurity concepts, practice with AI-powered threat
                    simulations, and master using AI tools responsibly.
                </p>
            </div>

            {/* Progress Tracker */}
            <div style={styles.progressCard}>
                <div style={styles.progressTop}>
                    <div>
                        <div style={styles.progressTitle}>📊 Your Progress</div>
                        <div style={styles.progressSub}>
                            {done} of {total} modules completed
                        </div>
                    </div>
                    <div style={styles.progressBadge}>
                        {pct === 100 ? "🏆" : pct >= 50 ? "⚡" : "🌱"}
                        <span style={styles.progressPct}>{pct}%</span>
                    </div>
                </div>
                {/* Progress Bar */}
                <div style={styles.barBg}>
                    <div
                        style={{
                            ...styles.barFill,
                            width: `${pct}%`,
                            background:
                                pct === 100
                                ? "#10b981"
                                : pct >= 50
                                  ? "#6366f1"
                                  : "#f59e0b",
                        }}
                    />
                </div>
                {/* Module pills */}
                <div style={styles.pills}>
                    {modules.map((m) => (
                        <div
                            key={m.id}
                            style={{
                                ...styles.pill,
                                background: completed.has(m.id) ? m.color + "33" : "#1e293b",
                                borderColor: completed.has(m.id) ? m.color : "#334155",
                                color: completed.has(m.id) ? m.color : "#475569",
                            }}
                        >
                            {completed.has(m.id) ? "✓ " : ""}{m.title}
                        </div>
                    ))}
                </div>
                {done > 0 && (
                    <button onClick={resetProgress} style={styles.resetBtn}>
                        Reset Progress
                    </button>
                )}
            </div>

            {/* Module Cards */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>📚 Learning Modules</h2>
                <div style={styles.grid}>
                    {modules.map((mod) => {
                        const isDone = completed.has(mod.id);
                        return (
                            <Link
                                key={mod.id}
                                to={`/module/${mod.id}`}
                                style={{ textDecoration: "none" }}
                            >
                                <div
                                    style={{
                                        ...styles.card,
                                        borderColor: isDone ? mod.color : mod.color + "44",
                                        background: isDone
                                                    ? `linear-gradient(135deg, ${mod.color}30, ${mod.color}15)`
                                                    : `linear-gradient(135deg, ${mod.color}18, ${mod.color}08)`,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-4px)";
                                        e.currentTarget.style.boxShadow = `0 8px 24px ${mod.color}33`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "none";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <div style={styles.cardTop}>
                                        <div style={styles.cardIcon}>{mod.icon}</div>
                                        {isDone && (
                                            <div style={{ ...styles.doneBadge, background: mod.color }}>
                                                ✓ Done
                                            </div>
                                        )}
                                    </div>
                                    <div style={{ ...styles.cardTitle, color: mod.color }}>
                                        {mod.title}
                                    </div>
                                    <div style={styles.cardSummary}>{mod.summary}</div>
                                    <div style={styles.cardMeta}>
                                        {mod.topics.length} topics · {mod.quiz.length} quiz questions
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Feature Banners */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>🚀 Tools & Practice</h2>
                <div style={styles.bannerGrid}>
                    <Link to="/simulation" style={{ textDecoration: "none" }}>
                        <div style={{ ...styles.banner, borderColor: "#f59e0b55" }}>
                            <span style={styles.bannerIcon}>⚠️</span>
                            <div>
                                <div style={{ ...styles.bannerTitle, color: "#f59e0b" }}>
                                    AI Threat Simulation
                                </div>
                                <div style={styles.bannerDesc}>
                                    Face real-world cyber scenarios and get instant AI feedback.
                                </div>
                            </div>
                            <span style={styles.arrow}>→</span>
                        </div>
                    </Link>
                    <Link to="/ai-skills" style={{ textDecoration: "none" }}>
                        <div style={{ ...styles.banner, borderColor: "#6366f155" }}>
                            <span style={styles.bannerIcon}>🤖</span>
                            <div>
                                <div style={{ ...styles.bannerTitle, color: "#6366f1" }}>
                                    AI Skills & Prompt Engineering
                                </div>
                                <div style={styles.bannerDesc}>
                                    Learn to use AI tools effectively and responsibly.
                                </div>
                            </div>
                            <span style={styles.arrow}>→</span>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
}

const styles = {
    page: { minHeight: "100vh", background: "#0f172a", color: "#e2e8f0", fontFamily: "system-ui, sans-serif", padding: "2rem" },
    hero: { textAlign: "center", padding: "3rem 1rem 2rem", maxWidth: 600, margin: "0 auto" },
    heroIcon: { fontSize: "3.5rem", marginBottom: "1rem" },
    heroTitle: { fontSize: "2.4rem", fontWeight: 800, margin: "0 0 1rem", background: "linear-gradient(90deg, #6366f1, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
    heroSub: { color: "#94a3b8", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 },
    progressCard: { maxWidth: 900, margin: "0 auto 2rem", background: "#1e293b", borderRadius: 14, padding: "1.5rem", border: "1px solid #334155" },
    progressTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" },
    progressTitle: { fontWeight: 700, fontSize: "1rem", color: "#e2e8f0" },
    progressSub: { color: "#94a3b8", fontSize: "0.85rem", marginTop: "0.2rem" },
    progressBadge: { display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "1.5rem" },
    progressPct: { fontSize: "1.1rem", fontWeight: 800, color: "#e2e8f0" },
    barBg: { height: 10, background: "#0f172a", borderRadius: 999, overflow: "hidden", marginBottom: "1rem" },
    barFill: { height: "100%", borderRadius: 999, transition: "width 0.5s ease" },
    pills: { display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" },
    pill: { padding: "0.25rem 0.75rem", borderRadius: 999, border: "1px solid", fontSize: "0.75rem", fontWeight: 600, transition: "all 0.3s" },
    resetBtn: { background: "none", border: "1px solid #334155", color: "#475569", borderRadius: 8, padding: "0.3rem 0.9rem", fontSize: "0.78rem", cursor: "pointer" },
    section: { maxWidth: 900, margin: "2rem auto 0" },
    sectionTitle: { fontSize: "1.2rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "1.2rem" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.2rem", alignItems: "stretch" },
    card: { borderRadius: 12, border: "1px solid", padding: "1.4rem", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" },
    cardTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.6rem" },
    cardIcon: { fontSize: "2rem" },
    doneBadge: { fontSize: "0.7rem", fontWeight: 700, color: "#fff", padding: "0.2rem 0.5rem", borderRadius: 6 },
    cardTitle: { fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" },
    cardSummary: { color: "#94a3b8", fontSize: "0.82rem", lineHeight: 1.5, flex: 1 },
    cardMeta: { marginTop: "0.8rem", fontSize: "0.75rem", color: "#475569" },
    bannerGrid: { display: "flex", flexDirection: "column", gap: "1rem", paddingBottom: "2rem" },
    banner: { display: "flex", alignItems: "center", gap: "1.2rem", background: "#1e293b", border: "1px solid", borderRadius: 12, padding: "1.2rem 1.5rem", cursor: "pointer" },
    bannerIcon: { fontSize: "2rem", flexShrink: 0 },
    bannerTitle: { fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" },
    bannerDesc: { color: "#94a3b8", fontSize: "0.85rem" },
    arrow: { marginLeft: "auto", color: "#475569", fontSize: "1.3rem" },
};