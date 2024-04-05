import {React,useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import {Bio} from '../Constant/Constant.js';
import BurgerMenu from '../../assets/hamburger-menu-icon-logo.png';

const Navbar = () => {
const [showMenu, setshowMenu] =useState(false);

  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="menu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopListItem">About</Link>
            <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-70} duration={500} className="desktopListItem">Skills</Link>
            <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopListItem">Projects</Link>
            <Link activeClass='active' to='Education' spy={true} smooth={true} offset={-40} duration={500} className="desktopListItem">Education</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-15} duration={500} className="desktopListItem">Contact Me</Link>
        </div>
        <button className='resumebtn'>
            <a href={Bio.resume}>Resume</a>
        </button>

        <img src={BurgerMenu} alt="logo" className='BurgerMenu' onClick={()=>setshowMenu(!showMenu)}/>
        <div className="navmenu" style={{display : showMenu ? 'flex' : 'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>About</Link>
          <Link activeClass='active' to='Skills' spy={true} smooth={true} offset={-70} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Skills</Link>
          <Link activeClass='active' to='Projects' spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Projects</Link>
          <Link activeClass='active' to='Education' spy={true} smooth={true} offset={-40} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Education</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-15} duration={500} className="ListItem" onClick={()=>setshowMenu(false)}>Contact Me</Link>
          <button className= 'ListItem'>
            <a href={Bio.resume}>Resume</a>
          </button>
        </div>
    </nav>
  )
}

export default Navbar
