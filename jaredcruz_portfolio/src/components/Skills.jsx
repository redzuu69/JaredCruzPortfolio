import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaBootstrap,
    FaLaravel,
    FaPhp,
    FaNodeJs,
    FaGithub,
    FaFigma,
} from "react-icons/fa";

import {
    SiVite,
    SiDjango,
    SiPostgresql,
    SiMysql,
    SiReact,
    SiExpo,
    SiRender,
    SiVercel,
    SiPython,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const groups = [
    {
        items: [
            { name: "React", icon: <FaReact color="#61DAFB" /> },
            { name: "Vite", icon: <SiVite color="#646CFF" /> },
            { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
            { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
            { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },

            { name: "Python", icon: <SiPython color="#3776AB" /> },
            { name: "Django", icon: <SiDjango color="#092E20" /> },
            { name: "Laravel", icon: <FaLaravel color="#FF2D20" /> },
            { name: "PHP", icon: <FaPhp color="#777BB4" /> },
            { name: "Node.js", icon: <FaNodeJs color="#339933" /> },

            { name: "React Native", icon: <SiReact color="#61DAFB" /> },
            { name: "Expo", icon: <SiExpo color="#ffffff" /> },

            { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
            { name: "MySQL", icon: <SiMysql color="#4479A1" /> },

            { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
            { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
            { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
            { name: "Render", icon: <SiRender color="#46E3B7" /> },
            { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
        ],
    },
];

function Skills() {
    const allTech = groups.flatMap((group) => group.items);

    return (
        <section id="skills" className="skills-logo-section">
            <div className="container">
                <div className="skills-logo-header">
                    <p className="section-label">Tech Stack</p>
                    <h2>Technologies I work with</h2>
                </div>

                <div className="skills-logo-wall">
                    {allTech.map((item, index) => (
                        <motion.div
                            className="skills-logo-item"
                            key={`${item.name}-${index}`}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.35,
                                delay: index * 0.035,
                            }}
                        >
                            <div className="skills-logo-icon">
                                {item.icon}
                            </div>

                            <span>{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;