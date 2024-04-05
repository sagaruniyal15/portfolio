import {React, useRef} from 'react'
import './Contact.css'
import facebook from '../../assets/facebook-icon.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github-icon.png'
import emailjs from '@emailjs/browser';
import {Bio} from '../Constant/Constant.js';
const Contact = () => {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jmhadpr', 'template_3wvecsh', form.current, {
        publicKey: 'CzhFyi5ENijC7j9HT',
      })
      .then((result) => {
          e.target.reset();
          alert('Email Sent !');
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact'>
        <h2>Contact Me</h2>
        <span className="conatctDesc">Please fill out the form below to dicuss any work opportunies.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className='contactname' placeholder='Your Name' name='from_name'/>
            <input type="text" className='contactEmail' placeholder='Your Email' name='from_email'/>
            <textarea className = "conatctmessage" cols="30" rows="5"  placeholder='Message' name='message'></textarea>
            <button className='submitbtn' type='submit' value='send'>Submit</button>
            <div className="conatctlinks">
                <a href={Bio.linkedin}><img src={linkedin} alt="LinkedIn"  className='conLink' /></a>
                <a href={Bio.instagram}><img src={instagram} alt="Instagram" className='conLink'/></a>
                <a href={Bio.facebook}><img src={facebook} alt="Facebook" className='conLink'/></a>
                <a href={Bio.github}><img src={github} alt="Github"  className='conLink'/></a>
            </div>
        </form>

    </div>
  )
}

export default Contact
