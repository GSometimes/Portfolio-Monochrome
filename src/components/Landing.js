import React, { Component } from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import { init } from "ityped";

// const Landing = () => {
  export default class Landing extends Component {

  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: ["Front End Developer,","React Developer,", "Entrepreneur,", "Designer,"]
    });
  }

    render () { return (
        <>
          {/* <div className="mobileBanner">
              <h1>PORT</h1>
              <h1>FOLI</h1>
              <h1>OBYS</h1>
              <h1>OMET</h1>
              <h1>IMES</h1>
          </div> */}
          <div className="myName">
                <img id ="myPic" src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1607283143/Portfolio1/829ABC3F-387C-44D9-978F-4D8D702D4865300_uttnwf.jpg" alt=""/>
                <p id="hello">Hello, my name is Gore Sometimes. I'm a SoCal based <span id="myElement"></span> Chef, and Dad. <br/><br/>I take simple ideas and turn them into modern design.</p> 

            </div>
          <div className="landingContainer">
            <Link to="/about"><h1 className="homeHeader">ENTER</h1></Link>
          </div>
        </>
    )
}
}

// export default Landing;
