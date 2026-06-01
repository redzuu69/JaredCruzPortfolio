import { useState } from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

function Certifications() {
    const certs = [
        {
            title: "Outstanding System Developer",
            provider: "System Plus Computer College of Caloocan Inc.",
            date: "May 16, 2026",
            detail: "Final Capstone Project Recognition",
            image: "/certificates/cert2.jpg",
        },
        {
            title: "Outstanding System Designer",
            provider: "System Plus Computer College of Caloocan Inc.",
            date: "May 16, 2026",
            detail: "Final Capstone Project Recognition",
            image: "/certificates/cert1.jpg",
        },
        {
            title: "Microsoft Excel: Advanced Techniques for Efficiency and Productivity",
            provider: "System Plus Computer College",
            date: "March 18 - April 13, 2024",
            detail: "40-hour course",
            image: "/certificates/excel-certificate.png",
        },


    ];

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    return (
        <section id="certifications" className="section">
            <div className="container">
                <p className="section-label">Certifications</p>
                <h2>Training, certifications, and recognitions.</h2>

                <div className="cert-grid">
                    {certs.map((cert) => (
                        <article className="cert-card" key={cert.title}>
                            <div className="cert-image-wrap">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    onClick={() => {
                                        setIndex(certs.indexOf(cert));
                                        setOpen(true);
                                    }}
                                />
                            </div>

                            <div className="cert-content">
                                <span className="cert-date">
                                    <Calendar size={14} />
                                    {cert.date}
                                </span>

                                <h3>{cert.title}</h3>
                                <p>{cert.provider}</p>

                                <div className="cert-footer">
                                    <small>
                                        <Award size={14} />
                                        {cert.detail}
                                    </small>

                                    <button
                                        className="cert-btn"
                                        onClick={() => {
                                            setIndex(certs.indexOf(cert));
                                            setOpen(true);
                                        }}
                                    >
                                        View <ExternalLink size={14} />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                plugins={[Zoom]}
                index={index}
                slides={certs.map((cert) => ({
                    src: cert.image,
                }))}
            />
        </section>

    );
}

export default Certifications;