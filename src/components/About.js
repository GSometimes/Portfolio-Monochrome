import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div className="nav">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className="aboutContainer">
                <h1>Cheese</h1>
            </div>
            
        </>
    )
}

export default About