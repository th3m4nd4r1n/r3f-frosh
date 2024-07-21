import React, { useState } from 'react'
import logo from '../assets/frosh-white.png'
import {Link} from 'react-router-dom'


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

            <nav className={`nav-menu ${menu?"active":""}`}>
                <span class="buttons-nav">
                    <Link to="/" class="home-link">HOME</Link>
                    <Link to="#event">EVENT</Link>
                    <Link to="#map">MAP</Link>
                    <Link to="#about">ABOUT</Link>
                    <Link to="#sponsors">SPONSORS</Link>
                </span>
                <button class="btn-nav tix mobile-tix">
                    <Link to="/login">GET TICKET</Link>
                </button>
            </nav>
            <button class="font-nav btn-nav tix desktop-tix">
                <Link to="/login">GET TICKET</Link>
            </button>
        </div>    
      </div>
    )

}

export default Navbar
