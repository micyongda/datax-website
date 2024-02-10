import React, { useRef } from 'react';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';
// import emailjs from '@emailjs/browser';


function Contact() {
  const refForm = useRef()

  // e is a parameter
  const sendEmail = (e) => {
    e.preventDefault() // this stops it from default sending 
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      refForm.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        alert('Message successfully sent!')
        window.location.reload(false)
        console.log(result.text)
        // TO:DO -  
        // Thank you!
        // We've received your message, and someone will be in touch soon.
      },
      (error) => {
        alert('Failed to send the message, please try again')
        console.log(error.text)
      }
    )

    e.target.reset()
  }


  return (
    <div className='contact'>
        <div className='leftSide'>
          

        <h1>Let's get started</h1>
        <p>Our team will reach out to you within 48 hours of submission. The first call will be 15 minutes and will aim to ensure DataX can help you and learn more about your needs so we can prepare for the tehcnical call to follow. We look forward to connecting with you!</p>
        </div>
        <div className='rightSide'>
            <h1> Contact Us</h1>
            
            <form id="contact-form" ref={refForm} onSubmit={sendEmail}>
                <input name="firstName" placeholder="First Name" type="text" required/>
                <input name="lastName" placeholder="Last Name" type="text" required/>
                <input name="company" placeholder="Company" type="text" required/>
                <input name="email" placeholder="Email" type="email" required/>
                <input name="phone" placeholder="Phone Number" type="tel"/>
                <input name="subject" placeholder="Subject" type="text"/>
                <textarea row="6" placeholder="Message" name="message" required></textarea>
                <button type="submit"> Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default Contact