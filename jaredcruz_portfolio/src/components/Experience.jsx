import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Web Developer Intern",
        company: "Lines & Dots Advertising Company",
        date: "January - April 2026",
        type: "Internship",
        logo: "/logos/linesdots_logo.png",
        bullets: [
            "Developed and maintained responsive company website features.",
            "Implemented modern UI/UX designs using React and Vite.",
            "Worked on API integrations, frontend optimization, and deployment workflows.",
        ],
    },
    {
        role: "Multimedia Volunteer",
        company: "SPCC CIT Week: FUNTASTECH",
        date: "March 2024",
        type: "Volunteer",
        logo: "/logos/cit_logo.png",
        bullets: [
            "Supported multimedia and presentation materials for school events.",
            "Assisted with creative assets, event documentation, and visual content preparation.",
        ],
    },
];

function Experience() {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <div className="experience-header">
                    <p className="section-label">Experience</p>
                    <h2>Work and volunteer experience.</h2>
                </div>

                <div className="experience-timeline">
                    {experiences.map((item, index) => (
                        <motion.article
                            className="experience-row"
                            key={item.role}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <div className="experience-year">
                                <span>{String(index + 1).padStart(2, "0")}</span>

                                <div>
                                    <Calendar size={15} />
                                    <p>{item.date}</p>
                                </div>

                                <small>
                                    <Briefcase size={14} />
                                    {item.type}
                                </small>
                            </div>

                            <div className="experience-main">
                                <div className="experience-brand">
                                    <div className="experience-logo">
                                        <img src={item.logo} alt={`${item.company} logo`} />
                                    </div>

                                    <div>
                                        <h3>{item.role}</h3>
                                        <p>{item.company}</p>
                                    </div>
                                </div>

                                <ul>
                                    {item.bullets.map((bullet) => (
                                        <li key={bullet}>{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;