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
            <form className="contact-form" onSubmit={sendEmail}>
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
