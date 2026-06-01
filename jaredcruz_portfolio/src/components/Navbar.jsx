import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.documentElement.classList.add("menu-open");
            document.body.classList.add("menu-open");
        } else {
            document.documentElement.classList.remove("menu-open");
            document.body.classList.remove("menu-open");
        }

        return () => {
            document.documentElement.classList.remove("menu-open");
            document.body.classList.remove("menu-open");
        };
    }, [open]);

    const links = [
        "Projects",
        "Skills",
        "Certifications",
        "Experience",
        "Contact",
    ];

    return (
        <header className="navbar">
            <div className="nav-container">
                <a href="#home" className="logo" onClick={() => setOpen(false)}>
                    Jared Cruz<span>.</span>
                </a>

                <nav className="nav-links">
                    {links.slice(0, 5).map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`}>
                            {link}
                        </a>
                    ))}
                </nav>

                <div className="nav-actions">
                    <a href="#contact" className="contact-nav-btn">
                        Contact
                    </a>

                    <button
                        type="button"
                        className="menu-btn"
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu size={22} />
                    </button>
                </div>
            </div>

            <div className={`mobile-menu ${open ? "show" : ""}`}>
                <div className="mobile-menu-top">
                    <a href="#home" className="mobile-logo" onClick={() => setOpen(false)}>
                        Jared Cruz<span>.</span>
                    </a>

                    <button
                        type="button"
                        className="mobile-close"
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                    >
                        <X size={22} />
                    </button>
                </div>

                <nav className="mobile-menu-links">
                    {links.map((link, index) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => setOpen(false)}
                        >
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;