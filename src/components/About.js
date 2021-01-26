import React from 'react'
import NavBar from './NavBar'
import { Link } from "react-router-dom";

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
                    <p>Hi, my name is Gourav Auluck but many know me as Gore Sometimes. I am a Chef turned Developer who’s looking to take my creativity from plate to page and is excited to explore this new world of design and development. I take simple ideas and turn them into modern design.</p>
                    </Fade>
                    <Fade right>
                    <p>I am a father, foodie, and avid gamer always looking to make lasting memories. My son is my “why” and the reason I do what I do. When I am not online you’ll find me spending time with my son, enjoying a glass of wine with friends or grinding my way through the Destiny Universe.</p>
                    </Fade>
                    <Fade bottom>
                    <p>I am a web developer based in Southern California looking for freelance and long-term opportunities. If you are a business seeking a web developer or an employer looking to hire you can get in touch with me <Link to="/contact"> here</Link>.</p>
                    </Fade>

                    <Fade bottom>
                    <img src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1611277322/Portfolio1/Screenshot_2021-01-21_170120_omncrd.png" alt="GoreSometimes"/>
                    </Fade>
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
