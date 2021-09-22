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
                    <div className="box">
                        <div className="imgBox">                              
                            <Fade left>
                                <img className="img1" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1632284268/Portfolio1/Abode-Screenshot-min_wlstbt.jpg" alt=""/>
                            </Fade>
                        </div>
                        <div className="textBox">
                            <div className="description">
                                <h2>Abode By Sometimes</h2>
                                <p>React, Styled Components</p>
                                <button><a href="https://abode-by-sometimes.netlify.app/" target="_blank" rel="noreferrer">Live Link</a></button> <button><a href="https://github.com/GSometimes/react-real-estate" target="_blank" rel="noreferrer">Github Link</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBox">
                            <Fade top>
                            <img className="img2" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1632284268/Portfolio1/Storefront-Screenshot-min_ci1ikq.jpg" alt=""/>                    
                            </Fade>
                        </div>
                        <div className="textBox">
                            <div className="description">
                                <h2>Bath Bomb Storefront</h2>
                                <p>React, Shopify API</p>
                                <button><a href="https://react-shopify-storefront.netlify.app//" target="_blank" rel="noreferrer">Live Link</a></button> <button><a href="https://github.com/GSometimes/React-Storefront" target="_blank" rel="noreferrer">Github Link</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="imgBox">
                            <Fade bottom>
                            <img className="img3" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1632284781/Portfolio1/Cineprime-min_brpomk.jpg" alt=""/>
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
