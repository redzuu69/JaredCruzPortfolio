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
            onUpdate: (latest) => {
                setValue(Math.round(latest));
            },
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

function DeveloperStats() {
    return (
        <section className="developer-stats-section">
            <div className="container developer-stats-grid">
                <motion.div
                    className="developer-stat-card"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Counter to={10} suffix="+" />
                    <span>Systems & Projects Built</span>
                </motion.div>

                <motion.div
                    className="developer-stat-card"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <Counter to={450} suffix="+" />
                    <span>Internship Hours Completed</span>
                </motion.div>

                <motion.div
                    className="developer-stat-card"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Counter to={15} suffix="+" />
                    <span>Technologies Used</span>
                </motion.div>
            </div>
        </section>
    );
}

export default DeveloperStats;