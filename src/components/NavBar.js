import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    return (
        <>
        <div className="mobileIcon"></div>
        <div className="nav">
                <Link to='/'>Home</Link>
                <Link to='/'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/'>Contact</Link>
            </div>

        </>
    )
}

export default NavBar
