import { ArrowUp, Mail, MapPin } from "lucide-react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="portfolio-footer">
            <div className="container footer-grid">
                <div className="footer-cta">


                    <button className="footer-top-link" onClick={scrollToTop}>
                        Back to Top
                        <span>
                            <ArrowUp size={18} />
                        </span>
                    </button>
                </div>

                <div className="footer-info">
                    <div>
                        <p>Contact</p>
                        <a href="mailto:jaredcruz242629@gmail.com">
                            <Mail size={16} />
                            jaredcruz242629@gmail.com
                        </a>
                    </div>

                    <div>
                        <p>Location</p>
                        <span>
                            <MapPin size={16} />
                            Caloocan City, Philippines
                        </span>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom-row">
                <div className="footer-socials">
                    <span>© {new Date().getFullYear()}</span>
                    <a href="https://github.com/reduu69" target="_blank" rel="noreferrer">
                        <FaGithub /> GitHub
                    </a>
                    <a href="https://facebook.com/@JaredPatagui.Cruz" target="_blank" rel="noreferrer">
                        <FaFacebook /> Facebook
                    </a>
                    <a href="www.linkedin.com/in/jared-cruz-6a5897345" target="_blank" rel="noreferrer">
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>

                <h3>
                    Jared Cruz<span>.</span>
                </h3>
            </div>
        </footer>
    );
}

export default Footer;