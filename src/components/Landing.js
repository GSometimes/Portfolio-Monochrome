import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { init } from "ityped";

import Fade from "react-reveal/Fade";

export default class Landing extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: [
        "Front End Developer,",
        "React Developer,",
        "Entrepreneur,",
        "Designer,",
      ],
    });
  }

  render() {
    return (
      <>
        <div className="myName">
          <Fade top>
            <img
              id="myPic"
              src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1607283143/Portfolio1/829ABC3F-387C-44D9-978F-4D8D702D4865300_uttnwf.jpg"
              alt=""
            />
            <p id="hello">
              Hello, my name is Gore Sometimes. I'm a SoCal based{" "}
              <span id="myElement"></span> Chef, and Dad. <br />
              <br />I take simple ideas and turn them into modern design.
            </p>
          </Fade>
        </div>

        <Fade bottom>
          <div className="landingContainer">
            <Link to="/work">
              <h1 className="homeHeader">ENTER</h1>
            </Link>
          </div>
        </Fade>
      </>
    );
  }
}
