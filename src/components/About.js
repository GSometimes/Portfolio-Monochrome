import React from 'react'
import NavBar from './NavBar'
import { Link } from "react-router-dom";


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
                <div className="aboutParagraph">
                    <img src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1611122961/Portfolio1/GS_Logo2_abyhtt.png" alt="GoreSometimes"/>
                    <p>Hi, my name is Gourav Auluck but many know me as Gore Sometimes. I am a Chef turned Developer who’s looking to take my creativity from plate to page and is excited to explore this new world of design and development. I take simple ideas and turn them into modern design.</p>
                    <p>I am a father, foodie, and avid gamer always looking to make lasting memories. My son is my “why” and the reason I do what I do. When I am not online you’ll find me spending time with my son, enjoying a glass of wine with friends or grinding my way through the Destiny Universe.</p>
                    <p>I am a web developer based in Southern California looking for freelance and long-term opportunities. If you are a business seeking a web developer or an employer looking to hire you can get in touch with me <Link to="/contact">here</Link>.</p>
                    <img src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1611122961/Portfolio1/GS_Logo2_abyhtt.png" alt="GoreSometimes"/>
                </div>
                
            </div>
            
        </>
    )
}

export default About;
