import React from 'react'
import NavBar from './NavBar'
import './Work.css'
import Fade from 'react-reveal/Fade';

const Work = () => {
    return (
        <>
            <NavBar />
            <div className="workContainer">
                <div className="myWorks">
                    <p className="workTitle">Work</p>
                </div>


                <div className="container">
                    {/* <div className="box">
                        <div className="imgBox">                              
                            <Fade left>
                                <img className="img1" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1610919748/Portfolio1/2021.01.17-13.32_qdtzcv.png" alt=""/>
                            </Fade>
                        </div>
                        <div className="textBox">
                            <div className="description">
                                <h2>Portfolio by Sometimes (Previous)</h2>
                                <p>React, CSS</p>
                                <button><a href="https://goresometimes.netlify.app/" target="_blank" rel="noreferrer">Live Link</a></button> <button><a href="https://github.com/GSometimes/PortfolioxV3" target="_blank" rel="noreferrer">Github Link</a></button>
                            </div>
                        </div>
                    </div> */}
                    <div className="box">
                        <div className="imgBox">
                            <Fade top>
                            <img className="img2" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1612826960/Portfolio1/Ace_of_Spades_br0qos.png" alt=""/>                    
                            </Fade>
                        </div>
                        <div className="textBox">
                            <div className="description">
                                <h2>The Man They Called Cayde</h2>
                                <p>React, CSS, CMS</p>
                                <button><a href="https://cayde-redesign.netlify.app/" target="_blank" rel="noreferrer">Live Link</a></button> <button><a href="https://github.com/GSometimes/Cayde-Redesign" target="_blank" rel="noreferrer">Github Link</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBox">
                            <Fade bottom>
                            <img className="img3" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1610919751/Portfolio1/2021.01.17-13.33_jrp0hj.png" alt=""/>
                            </Fade>
                        </div>
                        <div className="textBox">
                            <div className="description">
                                <h2>CinePrime: Movie Planner</h2>
                                <p>React, Express, MongoDB, JWT Auth</p>
                                <button><a href="https://cineprime.netlify.app/" target="_blank" rel="noreferrer">Live Link</a></button> <button><a href="https://github.com/GSometimes/cineprime-frontend" target="_blank" rel="noreferrer">Github Link</a></button>                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBox">
                            <Fade right>
                            <img className="img4" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1607133621/Portfolio1/Screenshot_2020-11-29_222957_hjtdqz.png" alt=""/>
                            </Fade>
                        </div>
                        <div className="textBox">
                            <div className="description">
                                <h2>Little Black Book</h2>
                                <p>React, Contentful</p>
                                <button><a href="https://littleblackbook.netlify.app/" target="_blank" rel="noreferrer">Live Link</a></button> <button><a href="https://github.com/GSometimes/LBB-Capstone" target="_blank" rel="noreferrer">Github Link</a></button>                
                            </div>
                        </div>
                    </div>               
                </div>

            </div>

        </>
    )
}

export default Work
