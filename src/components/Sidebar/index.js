import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-g.png'
import LogoSubtitle from '../../assets/images/logo_sub3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faRProject } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
return(
    <div className = "nav-bar">
        <Link className = "logo" to = "/"
          onClick={() => setShowNav(false)}>
         <img src={LogoS} alt="logo"/>
         <img className="sub-logo" src={LogoSubtitle} alt="Gopal"/>
         </Link>
         <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact= "true" activeclassname="active" to="/"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon = {faHome} color= "#4d4d4e"/>
            </NavLink>
            <NavLink exact= "true" activeclassname="active" className="about-link" to="/about"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon = {faUser} color= "#4d4d4e"/>
            </NavLink>
            <NavLink exact= "true" activeclassname="active" className="project-link" to="/project"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon = {faRProject} color= "#4d4d4e"/>
            </NavLink>
            <NavLink exact= "true" activeclassname="active" className="contact-link" to="/contact"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon = {faEnvelope} color= "#4d4d4e"/>
            </NavLink>

            <FontAwesomeIcon
         onClick={() => setShowNav(false)}
         icon={faClose}
         color="#ffd700"
         size='3x'
         className='close-icon'
         />
         </nav>
         
         <ul>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/gopal-maity-448855189/"

                >
                    <FontAwesomeIcon icon= {faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/GopalMaity"
                >
                    <FontAwesomeIcon icon= {faGithub} color="#4d4d4e" />
                </a>
            </li>
         </ul>
         <FontAwesomeIcon
         onClick={() => setShowNav(true)}
         icon={faBars}
         color="#ffd700"
            size='3x'
            className='hamburger-icon'
         />
    </div>
)
}

export default Sidebar