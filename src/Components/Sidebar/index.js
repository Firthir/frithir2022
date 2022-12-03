import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='Logo' />
            </Link>
            <nav>
                <NavLink exact="true" to='/' activeclassname='active'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
                </NavLink>  
                <NavLink exact="true" to='/about' className="about-link" activeclassname='active'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
                </NavLink>  
                <NavLink exact="true" to='/contact' className="contact-link" activeclassname='active'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
                </NavLink>  
            </nav>
            <ul>
                <li>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/alex-frith-50046916/">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
                    </a>
                </li>
                <li>
                    <a 
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Firthir">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar