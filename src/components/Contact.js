import React from 'react'
import NavBar from './NavBar'
import emailjs from 'emailjs-com';



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
                    <h1>Let's Work Together!</h1>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="name" required/>
                    <label>Email</label>
                    <input type="email" name="email" required/>
                    <label>Message</label>
                    <textarea name="message" required/>
                    <input id="button" type="submit" value="Send" />
                </form>
                <div className="contact-details">
                    <p>Email</p>
                    <h1><a href="mailto:gsometimes@outlook.com" target="_blank" rel="noopener noreferrer">gsometimes@outlook.com</a></h1>
                    <br/>
                    <br/>
                    <p>Social</p>
                    <h1><a href="https://www.linkedin.com/in/gore-sometimes/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h1>
                    <h1><a href="https://github.com/GSometimes" target="_blank" rel="noopener noreferrer">Github</a></h1>
                    <h1><a href="https://dev.to/gsometimes" target="_blank" rel="noopener noreferrer">Dev.to</a></h1>
                    <p>Resume</p>
                    <h1><a href="/currentResume.pdf" download>My Resume</a></h1>
                </div>


            </div>
        </>
    )
}

export default Contact
