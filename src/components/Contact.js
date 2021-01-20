import React from 'react'
import NavBar from './NavBar'
import emailjs from 'emailjs-com';



const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_gxyynmw', e.target, 'user_w1D9hYy51X1NfLEVhL0E9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <>
            <NavBar />
            <div className="contactContainer">
                <p className="contactTitle">Contact</p>
                <div className="contact-details">
                    <h1><a href="mailto:gsometimes@outlook.com" target="_blank" rel="noopener noreferrer">GSometimes@outlook.com</a></h1>
                    <h1><a href="https://www.linkedin.com/in/gore-sometimes/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h1>
                    <h1><a href="https://github.com/GSometimes" target="_blank" rel="noopener noreferrer">Github</a></h1>
                </div>
                <form className="contact-form" onSubmit={sendEmail}>
                    <h1>Let's Work Together!</h1>
                    <input type="hidden" name="contact_number" />
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>

            </div>
        </>
    )
}

export default Contact
