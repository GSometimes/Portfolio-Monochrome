import React from 'react'
import NavBar from './NavBar'


const Work = () => {
    return (
        <>
            <NavBar />
            <div className="workContainer">
                <div className="myWorks">
                    <p className="workTitle">Work</p>
                </div>

                <div class="container">
                    <div class="box">
                        <div class="imgBox img1">
                            <img src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1610919748/Portfolio1/2021.01.17-13.32_qdtzcv.png" alt=""/>
                        </div>
                        <div className="textBox">
                            <div className="description">
                                <h2>Portfolio by Sometimes (Previous)</h2>
                                <p>React, CSS</p>
                                <button><a href="https://goresometimes.netlify.app/" target="_blank" rel="noreferrer">Live Link</a></button> <button><a href="https://github.com/GSometimes/PortfolioxV3" target="_blank" rel="noreferrer">Github Link</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="imgBox img2">
                            <img src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1607133056/Portfolio1/the_man_called_cayde_by_vulshokbersrker_dcxfgx8-fullview300_gly2rl.jpg" alt=""/>                    
                        </div>
                        <div className="textBox">
                            <div className="description">
                                <h2>The Man They Called Cayde</h2>
                                <p>React, CSS, CMS</p>
                                <button><a href="https://cayde6.netlify.app/" target="_blank" rel="noreferrer">Live Link</a></button> <button><a href="https://github.com/GSometimes/Cayde6" target="_blank" rel="noreferrer">Github Link</a></button>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="imgBox img3">
                            <img src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1610919751/Portfolio1/2021.01.17-13.33_jrp0hj.png" alt=""/>
                        </div>
                        <div className="textBox">
                            <div className="description">
                                <h2>CinePrime: Movie Planner</h2>
                                <p>React, Express, MongoDB, JWT Auth</p>
                                <button><a href="https://cineprime.netlify.app/" target="_blank" rel="noreferrer">Live Link</a></button> <button><a href="https://github.com/GSometimes/cineprime-frontend" target="_blank" rel="noreferrer">Github Link</a></button>                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="imgBox img4">
                            <img src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1607133621/Portfolio1/Screenshot_2020-11-29_222957_hjtdqz.png" alt=""/>
                        </div>
                        <div className="textBox">
                            <div className="description">
                                <h2>Little Black Book</h2>
                                <p>React, Contentful</p>
                                <button><a href="https://littleblackbook.netlify.app/" target="_blank" rel="noreferrer">Live Link</a></button> <button><a href="https://github.com/GSometimes/LBB-Capstone" target="_blank" rel="noreferrer">Github Link</a></button>                            </div>
                        </div>
                    </div>                   
                </div>

            </div>

        </>
    )
}

export default Work
