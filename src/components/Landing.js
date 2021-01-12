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
          <div className="landingContainer">
            <Link to="/about"><h1 className="homeHeader">ENTER</h1></Link>
          </div>
        </>
    )
}

export default Landing;
