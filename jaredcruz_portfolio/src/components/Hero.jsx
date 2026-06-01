import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Smartphone, BarChart3, Palette } from "lucide-react";

function Hero() {
    const title = "Full-Stack Developer building modern web and mobile systems";

    const highlights = [
        { icon: <Code2 size={18} />, label: "React + Django" },
        { icon: <Smartphone size={18} />, label: "Mobile Workflows" },
        { icon: <BarChart3 size={18} />, label: "Analytics Dashboards" },
        { icon: <Palette size={18} />, label: "UI/UX Design" },
    ];

    return (
        <section id="home" className="hero-section">
            <div className="container hero-grid">
                <div className="hero-content">
                    <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                        Full-Stack Developer & UI/UX Designer
                    </motion.p>

                    <h1 className="animated-title">
                        {title.split(" ").map((word, index) => (
                            <motion.span
                                key={`${word}-${index}`}
                                initial={{ opacity: 0, y: 28 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.04 }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.45 }}
                    >
                        I design and develop scalable systems with clean interfaces, structured
                        backend APIs, mobile workflows, analytics dashboards, and practical
                        user-centered experiences.
                    </motion.p>

                    <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
                        <a href="#projects" className="btn primary-btn">
                            View Projects <ArrowRight size={17} />
                        </a>

                        <a href="/resume/Jared_Cruz_Resume.pdf" download className="btn secondary-btn">
                            Download Resume <Download size={17} />
                        </a>
                    </motion.div>


                </div>

                <motion.div
                    className="personal-hero-showcase"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <div className="hero-profile-card">
                        <div className="hero-profile-image">
                            <img src="/profile.png" alt="Jared Cruz" />
                        </div>

                        <div className="hero-profile-info">
                            <span>Available for opportunities</span>
                            <h3>Jared Cruz</h3>
                            <p>Full-Stack Developer</p>
                        </div>
                    </div>

                    <div className="workspace-preview-card">
                        <div className="workspace-preview-header">
                            <span></span>
                            <span></span>
                            <span></span>
                            <small>portfolio.workspace</small>
                        </div>

                        <pre>{`const stack = {
  frontend: "React",
  backend: "Django REST",
  mobile: "React Native",
  focus: "Systems + UI/UX"
};`}</pre>
                    </div>

                    <motion.div
                        className="floating-dev-card card-react"
                        initial={{ opacity: 0, scale: 0.75, y: 18 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.95, ease: "backOut" }}
                    >
                        React UI
                    </motion.div>

                    <motion.div
                        className="floating-dev-card card-api"
                        initial={{ opacity: 0, scale: 0.75, y: 18 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 1.08, ease: "backOut" }}
                    >
                        Django API
                    </motion.div>

                    <motion.div
                        className="floating-dev-card card-mobile"
                        initial={{ opacity: 0, scale: 0.75, y: 18 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 1.21, ease: "backOut" }}
                    >
                        Mobile App
                    </motion.div>

                    <motion.div
                        className="floating-dev-card card-data"
                        initial={{ opacity: 0, scale: 0.75, y: 18 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 1.34, ease: "backOut" }}
                    >
                        Analytics
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;