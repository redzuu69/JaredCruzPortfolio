import {
    HiOutlineDownload,
    HiOutlineMail,
    HiOutlineLocationMarker,
    HiOutlinePhone,
} from "react-icons/hi";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const contactLinks = [
    {
        label: "GitHub",
        value: "github.com/redzuu69",
        href: "https://github.com/redzuu69",
        icon: <FaGithub />,
    },
    {
        label: "Facebook",
        value: "Jared Cruz",
        href: "https://facebook.com/@JaredPatagui.Cruz",
        icon: <FaFacebook />,
    },
    {
        label: "LinkedIn",
        value: "Jared Cruz",
        href: "www.linkedin.com/in/jared-cruz-6a5897345",
        icon: <FaLinkedin />,
    },

];

function Contact() {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-editorial">
                <div className="contact-left">
                    <p className="section-label">Contact</p>
                    <h2>Let’s work together.</h2>
                    <p>
                        Open to freelance projects, collaborations,
                        and development roles focused on practical digital systems.
                    </p>
                    <div className="contact-primary-info">
                        <a href="mailto:jaredcruz242629@gmail.com">
                            <HiOutlineMail />
                            <span>jaredcruz242629@gmail.com</span>
                        </a>

                        <a href="tel:+639202353086">
                            <HiOutlinePhone />
                            <span>+63 920 235 3086</span>
                        </a>

                        <div>
                            <HiOutlineLocationMarker />
                            <span>Caloocan City, Philippines</span>
                        </div>
                    </div>

                </div>

                <div className="contact-right">
                    {contactLinks.map((item) => {
                        const content = (
                            <>
                                <span className="contact-link-icon">{item.icon}</span>
                                <div>
                                    <small>{item.label}</small>
                                    <strong>{item.value}</strong>
                                </div>
                            </>
                        );

                        return item.href ? (
                            <a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith("http") ? "_blank" : undefined}
                                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                                className="contact-line"
                            >
                                {content}
                            </a>
                        ) : (
                            <div key={item.label} className="contact-line">
                                {content}
                            </div>
                        );
                    })}

                    <a href="/resume/Resume.pdf" download className="resume-line">
                        <HiOutlineDownload />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;