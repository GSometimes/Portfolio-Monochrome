import React from 'react'
import NavBar from './NavBar'

const About = () => {
    return (
        <>
            <NavBar />
            <div className="aboutContainer">
                <div className="aboutMe">
                    <p className="aboutTitle">About</p>
                </div>
                <div className="imageGrid">
                    <div className="image1"></div>
                    <div className="image2"></div>
                    <div className="image3"></div>
                    <div className="image4"></div>
                    <div className="image5"></div>
                </div>

                
            </div>
            
        </>
    )
}

export default About;
