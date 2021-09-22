import React from 'react'
import NavBar from './NavBar'
import './About.css'
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <>
            <NavBar />
            <div className="aboutContainer">

                <div className="aboutMe">
                    <p className="aboutTitle">About</p>
                </div>

                <div className="aboutParagraph">
                    <Fade top>
                    <p>Hi, my name is Gore Auluck. Many know me as Gore Sometimes. I am a Chef turned Developer who utilizes my creativity to take simple ideas and turn them into modern designs.</p>
                    </Fade>
                    <Fade right>
                    <p>From plates to pages, I build a foundation utilizing simple ingredients that incorporates all of the senses resulting in a hand-crafted experience, making a lasting impression.</p>
                    </Fade>
                    <Fade bottom>
                    <p>I am a creative frontend developer who is proficient in HTML/CSS, JavaScript, React, and specializes in creating modern, engaging design. I am experienced in working individually and with a team to create clean code, follow UI best practices, and produce modern, engaging websites.</p>
                    <p>Motivated to learn, grow and excel in the Tech Industry, I am excited to partner with you and your team!</p>
                    </Fade>

                    {/* <Fade bottom>
                    <img src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1611277322/Portfolio1/Screenshot_2021-01-21_170120_omncrd.png" alt="GoreSometimes"/>
                    </Fade> */}
                </div>
                <div className="imageGrid">
                <Fade left>
                    <div className="image1"></div>
                </Fade>
                <Fade top>
                    <div className="image2"></div>
                </Fade>
                <Fade left>
                    <div className="image3"></div>
                </Fade>
                <Fade right>
                    <div className="image4"></div>
                </Fade>
                <Fade bottom>
                    <div className="image5"></div>
                </Fade>
                </div>
                
            </div>
        </>
    )
}

export default About;
