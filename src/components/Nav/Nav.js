import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import { NavData } from './NavData'
import { IconContext } from 'react-icons'
import './Nav.css'

function Nav() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <React.Fragment>
            <IconContext.Provider value={{ color: 'white' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} className="react-icon" />
                    </Link>
                    <h1>
                        <Link to="/">Wheel Expectations</Link>
                    </h1>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose className="react-icon" />
                            </Link>
                        </li>
                        {NavData.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className="icon-title">{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </React.Fragment>
    )
}

export default Nav;