import React from 'react'
import '../App.css';
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>
          <div className="mobileBanner">
              <h1>PORT</h1>
              <h1>FOLI</h1>
              <h1>OBYS</h1>
              <h1>OMET</h1>
              <h1>IMES</h1>
          </div>
          <div className="myName">
                <p id="hello">Hello, my name is...</p>
                <img id ="myPic" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1607283143/Portfolio1/829ABC3F-387C-44D9-978F-4D8D702D4865300_uttnwf.jpg" alt=""/>

                <p id="name">Gore Sometimes</p>
                <p id="designer">Simple Ideas. Modern Design.</p>   

            </div>
          <div className="landingContainer">
            <Link to="/about"><h1 className="homeHeader">ENTER</h1></Link>
          </div>
        </>
    )
}

export default Landing;
