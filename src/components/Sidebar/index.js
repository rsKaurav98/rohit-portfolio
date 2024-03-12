import './index.scss';
import {Link , NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faClose, faEnvelope, faHome, faSuitcase, faUser  } from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn , faGithub,faTwitter} from '@fortawesome/free-brands-svg-icons'
import LogoR from "../../assets/images/logo.png"
import LogoSub from '../../assets/images/logo_subr.png'
import React, { useState } from 'react'

const Sidebar = () => {

  const [showNav , setShowNav] = useState(false);
  return (
    <div className='nav-bar'>
   <Link className='logo' to='/'>
     <img src={LogoR} alt='logo'/>
     <img className='sub-logo' src={LogoSub} alt='Rohit'/>
   </Link>
   <nav className={showNav ? "mobile-show" :""}>
    <NavLink onClick={()=>setShowNav(false)}
     exact="true" activeclassname="active" to='/'>
     <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>   
    </NavLink>
    <NavLink 
    onClick={()=>setShowNav(false)}
    exact="true" activeclassname="active"  className='about-link' to='/about'>
     <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>   
    </NavLink>
    <NavLink 
    onClick={()=>setShowNav(false)}
    exact="true" activeclassname="active"  className='portfolio-link' to='/portfolio'>
     <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'/>   
    </NavLink>
    <NavLink 
    onClick={()=>setShowNav(false)}
    exact="true" activeclassname="active" className='contact-link' to='/contact'>
     <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>   
    </NavLink>

    <FontAwesomeIcon
    onClick={()=>setShowNav(false)}
    icon={faClose}
    color='#ffd700'
    size='3x'
    className='close-icon'
    />
   </nav>
   <ul>
    <li>
        <a
        target='_blank'
        rel='noreferrer'
        href='https://www.linkedin.com/in/Rohit-S-Kaurav'
        >
            <FontAwesomeIcon icon={faLinkedinIn} color='#4d4d4e'/>
        </a>
    </li>
    <li>
        <a
        target='_blank'
        rel='noreferrer'
        href='https://github.com/rsKaurav98'
        >
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
        </a>
    </li>
    <li>
        <a
        target='_blank'
        rel='noreferrer'
        href='https://twitter.com/RohitKaurav1'
        >
            <FontAwesomeIcon icon={faTwitter} color='#4d4d4e'/>
        </a>
    </li>
   </ul>
   <FontAwesomeIcon icon={faBars}
   onClick={()=>setShowNav(true)}
   color='#ffd700'
   size='3x'
   className='hamburger-icon'
   />
    </div>
  )
}

export default Sidebar