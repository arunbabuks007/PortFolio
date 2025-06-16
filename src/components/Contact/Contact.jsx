import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/stripe.png'
const Contact = () => {
  return (
    <div className='contact'>
        <div class="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" width={40} height={40}/>
        </div>
        <div class="contact-section">
            <div class="contact-left">
                <h1>Let's talk</h1>
                <p>I'm always happy to talk about my work and how I can help you.</p>
                <div class="contact-details">
                    <div class="contact-detail">
                        <img src={theme_pattern} alt="" width={40}/><p>Mail</p>
                    </div>
                    <div class="contact-detail">
                         <img src={theme_pattern} alt="" width={40}/><p>Phone NO</p>
                    </div>
                    <div class="contact-detail">
                         <img src={theme_pattern} alt="" width={40}/><p>US area</p>
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder='Enter your name' name='name'/>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder='Enter your email' name='email'/>
                <label htmlFor='message'>Message</label>
                <textarea id='message' placeholder='Enter your message' name='message'></textarea>
                <button type='submit' className='contact-submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact