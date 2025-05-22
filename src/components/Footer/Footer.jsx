import "./footer.css"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ScrollToTop } from "../../helpers/helpers";


function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <ul className="footer-nav-list">
                    <li>
                        <NavLink to="/" className="nav__link" onClick={ScrollToTop}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects?id=cyclistic-bikeshare" className="nav__link" onClick={ScrollToTop}>
                            Projects
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/" className="nav__link">
                            CV
                        </NavLink>
                    </li> */}
                    {/* <li>
                        <NavLink to="/" className="nav__link">
                            Blog
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/contact" className="nav__link" onClick={ScrollToTop}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <p className="footer-copyright">&copy; 2025 Rob Wittstock</p>
                <div className="footer-nav-icons">
                    <a href="https://github.com/robtwilliam" target="_blank" className="footer-icon">
                        <IoLogoGithub size="22px"/>
                    </a>
                    <a href="https://www.linkedin.com/in/robwittstock/" target="_blank" className="footer-icon">
                        <IoLogoLinkedin size="22px"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;