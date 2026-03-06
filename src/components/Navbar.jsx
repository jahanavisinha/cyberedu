import { Link, useLocation } from "react-router-dom";

const links = [
    { to: "/", label: "🏠 Home" },
    { to: "/simulation", label: "⚠️ Threat Sim" },
    { to: "/ai-skills", label: "🤖 AI Skills" },
];

export default function Navbar() {
    const { pathname } = useLocation();

    return (
        <nav style={styles.nav}>
            <Link to="/" style={styles.brand}>
                🛡️ CyberEdu
            </Link>
            <div style={styles.links}>
                {links.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        style={{
                            ...styles.link,
                            ...(pathname === link.to ? styles.active : {}),
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

const styles = {
    nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.9rem 2rem",
        background: "#0f172a",
        borderBottom: "1px solid #1e293b",
        position: "sticky",
        top: 0,
        zIndex: 100,
    },
    brand: {
        fontWeight: 800,
        fontSize: "1.2rem",
        color: "#6366f1",
        textDecoration: "none",
        letterSpacing: "-0.5px",
    },
    links: {
        display: "flex",
        gap: "0.5rem",
    },
    link: {
        padding: "0.4rem 1rem",
        borderRadius: "8px",
        color: "#94a3b8",
        textDecoration: "none",
        fontSize: "0.9rem",
        fontWeight: 500,
        transition: "all 0.2s",
    },
    active: {
        background: "#1e293b",
        color: "#e2e8f0",
    },
};