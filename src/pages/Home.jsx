import { Link } from "react-router-dom";
import modules from "../data/modules";

export default function Home() {
    return (
        <div style={styles.page}>
            {/* Hero Section */}
            <div style={styles.hero}>
                <div style={styles.heroIcon}>🛡️</div>
                <h1 style={styles.heroTitle}>Welcome to CyberEdu</h1>
                <p style={styles.heroSub}>
                    Learn core cybersecurity concepts, practice with AI-powered threat
                    simulations, and master using AI tools responsibly.
                </p>
            </div>

            {/* Module Cards */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>📚 Learning Modules</h2>
                <div style={styles.grid}>
                    {modules.map((mod) => (
                        <Link
                            key={mod.id}
                            to={`/module/${mod.id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <div
                                style={{
                                    ...styles.card,
                                    borderColor: mod.color + "44",
                                    background: `linear-gradient(135deg, ${mod.color}18, ${mod.color}08)`,
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
                                <div style={styles.cardIcon}>{mod.icon}</div>
                                <div style={{ ...styles.cardTitle, color: mod.color }}>
                                    {mod.title}
                                </div>
                                <div style={styles.cardSummary}>{mod.summary}</div>
                                <div style={styles.cardMeta}>
                                    {mod.topics.length} topics · {mod.quiz.length} quiz questions
                                </div>
                            </div>
                        </Link>
                    ))}
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
                                    Face real-world cyber scenarios and get instant AI feedback on
                                    your responses.
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
                                    Learn how to use AI tools effectively and responsibly in
                                    security contexts.
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
    page: {
        minHeight: "100vh",
        background: "#0f172a",
        color: "#e2e8f0",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
    },
    hero: {
        textAlign: "center",
        padding: "3rem 1rem 2rem",
        maxWidth: 600,
        margin: "0 auto",
    },
    heroIcon: { fontSize: "3.5rem", marginBottom: "1rem" },
    heroTitle: {
        fontSize: "2.4rem",
        fontWeight: 800,
        margin: "0 0 1rem",
        background: "linear-gradient(90deg, #6366f1, #10b981)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
    heroSub: {
        color: "#94a3b8",
        fontSize: "1.05rem",
        lineHeight: 1.7,
        margin: 0,
    },
    section: {
        maxWidth: 900,
        margin: "2.5rem auto 0",
    },
    sectionTitle: {
        fontSize: "1.2rem",
        fontWeight: 700,
        color: "#e2e8f0",
        marginBottom: "1.2rem",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1.2rem",
    },
    card: {
        borderRadius: 12,
        border: "1px solid",
        padding: "1.4rem",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
    },
    cardIcon: { fontSize: "2rem", marginBottom: "0.6rem" },
    cardTitle: { fontWeight: 700, fontSize: "1rem", marginBottom: "0.4rem" },
    cardSummary: { color: "#94a3b8", fontSize: "0.82rem", lineHeight: 1.5 },
    cardMeta: {
        marginTop: "0.8rem",
        fontSize: "0.75rem",
        color: "#475569",
    },
    bannerGrid: { display: "flex", flexDirection: "column", gap: "1rem" },
    banner: {
        display: "flex",
        alignItems: "center",
        gap: "1.2rem",
        background: "#1e293b",
        border: "1px solid",
        borderRadius: 12,
        padding: "1.2rem 1.5rem",
        cursor: "pointer",
        transition: "transform 0.2s",
    },
    bannerIcon: { fontSize: "2rem", flexShrink: 0 },
    bannerTitle: { fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" },
    bannerDesc: { color: "#94a3b8", fontSize: "0.85rem" },
    arrow: { marginLeft: "auto", color: "#475569", fontSize: "1.3rem" },
};