import React, { useState } from 'react'
import logo from '../assets/frosh-white.png'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'


const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const menuActive = ()=>{
        setMenu(!menu)
    }    
    return (
      <div className='nav bg-nav font-nav'>
        <div class="navbar">
            <img src={logo} alt="frosh logo"/>
            
            <div className={`menu-toggle ${menu?"active":""}`} id="mobile-menu" onClick={menuActive}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <div className={`nav-menu ${menu?"active":""}`}>
                <div class="buttons-nav">
                    <Link to="/" class="home-link">HOME</Link>
                    <HashLink to="#event" smooth>EVENT</HashLink>
                    <HashLink to="#map" smooth>MAP</HashLink>
                    <HashLink to="#about" smooth>ABOUT</HashLink>
                    <HashLink to="#sponsors" smooth>SPONSORS</HashLink>
                </div>
                <button class="btn-nav tix mobile-tix">
                    <Link to="/login">GET TICKET</Link>
                </button>
            </div>
            <button class="font-nav btn-nav tix desktop-tix">
                <Link to="/login">GET TICKET</Link>
            </button>
        </div>    
        
      </div>
    )

}

export default Navbar
