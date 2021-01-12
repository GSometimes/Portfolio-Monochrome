import React from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
    return (
        <div>
            <div className="nav">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Contact
