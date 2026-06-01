import { useState } from "react";
import { ExternalLink, Images } from "lucide-react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import { projects } from "../data/projects";

function ProjectCard({ project, index }) {
    const [galleryOpen, setGalleryOpen] = useState(false);

    const slides = project.screenshots.map((shot) => ({
        src: shot.image,
        title: shot.label,
    }));

    return (
        <motion.article
            className={`project-card ${project.accent}`}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
        >
            <div className="project-video-wrap">
                <video
                    src={project.video}
                    className="project-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />

                <div className="video-badge">
                    <span></span>
                    Preview
                </div>
            </div>

            <div className="project-info">
                <div className="project-meta">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <small>{project.year}</small>
                </div>

                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-desc">{project.description}</p>

                <div className="tech-list">
                    {project.tech.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>

                <div className="project-actions">
                    <button
                        type="button"
                        className="project-gallery-link"
                        onClick={() => setGalleryOpen(true)}
                    >
                        <Images size={16} />
                        View Gallery
                    </button>

                    <a href="#contact" className="project-btn">
                        Discuss Project <ExternalLink size={16} />
                    </a>
                </div>
            </div>

            <Lightbox
                open={galleryOpen}
                close={() => setGalleryOpen(false)}
                plugins={[Zoom]}
                slides={slides}
            />
        </motion.article>
    );
}

function Projects() {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <p className="section-label">Featured Projects</p>
                <h2>Complete systems, not just simple apps.</h2>

                <div className="project-list">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
