import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/stripe.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ce277496-dafd-41c9-8761-c764cc7273fd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert("Error");
      setResult(data.message);
    }
  };
  return (
    <div className='contact' id='contact'>
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
            <form className='contact-right'onSubmit={onSubmit}>
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