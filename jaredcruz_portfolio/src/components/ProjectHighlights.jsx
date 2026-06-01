const highlights = [
    {
        title: "Queue IT",
        tag: "Queue Monitoring",
        image: "/projects/queueit/queueit2.png",
    },
    {
        title: "Grade IT",
        tag: "Academic Analytics",
        image: "/projects/gradeit/gradeit2.png",
    },
    {
        title: "Queue IT",
        tag: "Admin Dashboard",
        image: "/projects/linesndots/lines5.png",
    },
    {
        title: "BS FARM",
        tag: "POS System",
        image: "/projects/bsfarm/bsfarm69.png",
    },
    {
        title: "BS FARM",
        tag: "Inventory Reports",
        image: "/projects/gradeit/gradeit3.png",
    },
    {
        title: "Grade IT",
        tag: "Academic Analytics",
        image: "/projects/linesndots/lines4.png",
    },
    {
        title: "Grade IT",
        tag: "Mobile Attendance",
        image: "/projects/queueit/queueit3.png",
    },
    {
        title: "BS FARM",
        tag: "POS System",
        image: "/projects/bsfarm/bsfarm70.png",
    },

];

function ProjectHighlights() {
    const repeatedHighlights = [...highlights, ...highlights];

    return (
        <section className="project-highlights-section">
            <div className="project-highlights-header">
                <p className="section-label">Selected Work</p>
                <h2>Visual snapshots from systems I’ve built.</h2>
            </div>

            <div className="highlight-marquee">
                <div className="highlight-track">
                    {repeatedHighlights.map((item, index) => (
                        <article className="highlight-snapshot" key={`${item.image}-${index}`}>
                            <img src={item.image} alt={item.title} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectHighlights;