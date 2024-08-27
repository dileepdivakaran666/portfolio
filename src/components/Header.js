import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import {IoClose, IoMenu} from 'react-icons/io5'
import logo from '../assets/logo.png'

function Header() {
    const [showMenu, setShowMenu]= useState(false);

    const closeMenuOnMobile = () =>{
        if(window.innerWidth <= 1150){
            setShowMenu(false);
        }
    }

    const toggleMenu = () =>{
        setShowMenu(!showMenu);
        console.log(showMenu);
    }

  return (
    <header>
        <nav>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
            <ul className='header-ul'> 
                <li>
                    <NavLink to="/" className={"nav__link"} onClick={closeMenuOnMobile}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={"nav__link"} onClick={closeMenuOnMobile}>About me</NavLink>
                </li>
                <li>
                    <NavLink to="/experience" className={"nav__link"} onClick={closeMenuOnMobile}>Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/education" className={"nav__link"} onClick={closeMenuOnMobile}>Education</NavLink>
                </li>
                <li>
                    <NavLink to="/skills" className={"nav__link"} onClick={closeMenuOnMobile}>Skills</NavLink>
                </li>
                {/* <li>
                    <NavLink to="/" className={"nav__link"} onClick={closeMenuOnMobile}>Project</NavLink>
                </li> */}
                <li>
                    <NavLink to="/" className={"nav__link"} onClick={closeMenuOnMobile}>Contact Us</NavLink>
                </li>
                <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                <IoClose/>
                </div>
            </ul>
            </div>
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                <IoMenu/>
            </div>
        </nav>
    </header>
  )
}

export default Header