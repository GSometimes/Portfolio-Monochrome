import React from 'react'
import NavBar from './NavBar'
import emailjs from 'emailjs-com';
import './Contact.css'

import Fade from 'react-reveal/Fade';


const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_z49gvik', 'template_gxyynmw', e.target, 'user_w1D9hYy51X1NfLEVhL0E9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          alert("Thank your for connecting! I'll be in touch soon!")
      }

    return (
        <>
            <NavBar />
            <div className="contactContainer">
                <p className="contactTitle">Contact</p>
                <form className="contact-form" onSubmit={sendEmail}>
                <Fade top>
                    <h1>Let's Work Together!</h1>
                </Fade>
                <Fade left>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                </Fade>
                <Fade right>
                    <input type="text" name="name" required/>
                </Fade>
                <Fade left>
                    <label>Email</label>
                </Fade>
                <Fade right>
                    <input type="email" name="email" required/>
                </Fade>
                <Fade left>
                    <label>Message</label>
                </Fade>
                <Fade right>
                    <textarea name="message" required/>
                </Fade>
                <Fade bottom>
                    <input id="button" type="submit" value="Send" />
                </Fade>
                </form>
                <div className="contact-details">
                    <Fade top>
                    <p>Email</p>
                    <h1><a href="mailto:gsometimes@outlook.com" target="_blank" rel="noopener noreferrer">gsometimes@outlook.com</a></h1>
                    </Fade>
                    <br/>
                    {/* <br/> */}
                    <Fade left>
                    <p>Social</p>
                    <h1><a href="https://www.linkedin.com/in/gore-sometimes/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h1>
                    </Fade>
                    <Fade right>
                    <h1><a href="https://github.com/GSometimes" target="_blank" rel="noopener noreferrer">Github</a></h1>
                    </Fade>
                    {/* <Fade left>
                    <h1><a href="https://dev.to/gsometimes" target="_blank" rel="noopener noreferrer">Dev.to</a></h1>
                    </Fade> */}
                    <Fade bottom>
                    <p>Resume</p>
                    <h1><a href="https://drive.google.com/file/d/1dQRPfL6YPlbKPBS_CeeZ60fkWzpIwpLM/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>My Resume</a></h1>
                    </Fade>
                </div>


            </div>
        </>
    )
}

export default Contact
