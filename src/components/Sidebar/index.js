import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-g.png'
import LogoSubtitle from '../../assets/images/logo_sub3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser, } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <dev className = "nav-bar">
        <Link className = "logo" to = "/">
         <img src={LogoS} alt="logo"/>
         <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
         </Link>
         <nav>
            <NavLink exact= "true" activeclassname="active" to="/">
                <FontAwesomeIcon icon = {faHome} color= "#4d4d4e"/>
            </NavLink>
            <NavLink exact= "true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon = {faUser} color= "#4d4d4e"/>
            </NavLink>
            <NavLink exact= "true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color= "#4d4d4e"/>
            </NavLink>
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
    </dev>
)

export default Sidebar