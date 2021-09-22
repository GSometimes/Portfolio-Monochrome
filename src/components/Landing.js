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
        "Front End Developer.",
        "Web Designer.",
        "UI Designer.",
        "Michelin Star Chef.",
        "Dad."
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
              src="https://res.cloudinary.com/dvug8hy5k/image/upload/v1632284270/Portfolio1/Suit-Love-min_dvfqqw.jpg"
              alt=""
            />
            <p id="hello">
              Hello, my name is Gore Sometimes. I'm a SoCal based{" "}
              <span id="myElement"></span>
              <br /><br />I take simple ideas and turn them into modern design.
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
