import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from = 0, to, suffix = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [value, setValue] = useState(from);

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(from, to, {
            duration: 1.4,
            ease: "easeOut",
            onUpdate: (latest) => setValue(Math.round(latest)),
        });

        return () => controls.stop();
    }, [isInView, from, to]);

    return (
        <strong ref={ref}>
            {value}
            {suffix}
        </strong>
    );
}

function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container about-grid">
                <motion.div
                    className="about-heading"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                >
                    <p className="section-label">About Me</p>
                    <h2>I build systems that connect design, data, and functionality.</h2>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                >



                    <div className="about-stats">
                        <div>
                            <Counter to={10} suffix="+" />
                            <span>Systems & Projects Built</span>
                        </div>

                        <div>
                            <Counter to={450} suffix="+" />
                            <span>Internship Hours Completed</span>
                        </div>

                        <div>
                            <Counter to={15} suffix="+" />
                            <span>Technologies Used</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;