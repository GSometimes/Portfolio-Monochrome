import React from 'react'
import NavBar from './NavBar'


const Work = () => {
    return (
        <>
            <NavBar />
            <div className="workContainer">
            <div class="container">
                <div class="box">
                    <div class="imgBox img1">
                        <img src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1610919748/Portfolio1/2021.01.17-13.32_qdtzcv.png" alt=""/>
                    </div>
                    <div className="textBox">
                        <div className="description">
                            <h2>Portfolio by Sometimes (Previous)</h2>
                            <p>React, Contentful</p>
                            <button>Live Link</button> <button>Github Repo</button>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox img2">
                        <img src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1607133056/Portfolio1/the_man_called_cayde_by_vulshokbersrker_dcxfgx8-fullview300_gly2rl.jpg" alt=""/>                    
                    </div>
                    <div className="textBox">
                        <h2 className="description">The Man They Called Cayde</h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox img3">
                        <img src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1610919751/Portfolio1/2021.01.17-13.33_jrp0hj.png" alt=""/>
                    </div>
                    <div className="textBox">
                        <h2 className="description">Cineprime</h2>
                    </div>
                </div>
                <div class="box">
                    <div class="imgBox img4">
                        <img src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1607133621/Portfolio1/Screenshot_2020-11-29_222957_hjtdqz.png" alt=""/>
                    </div>
                    <div className="textBox">
                        <h2 className="description">Little Black Book</h2>
                    </div>
                </div>
        </div>
    
            </div>

        </>
    )
}

export default Work
