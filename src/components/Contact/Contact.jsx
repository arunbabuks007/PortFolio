import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/stripe.png'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import Swal from 'sweetalert2';
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
      Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
      event.target.reset();
    } else {
      console.log("Error", data);
      Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: 'Try Again...'
});
      setResult(data.message);
    }
  };
  return (
    <div className='contact d-flex justify-content-center align-items-center' id='contact'>
        <div class="contact-title m-5">
            <h1>Get In Touch</h1>
            {/* <img src={theme_pattern} alt="" width={40} height={40}/> */}
        </div>
        <div class="contact-section">
            <div class="contact-left">
                <h1>Let's talk</h1>
                <p>I'm always happy to talk about my work and how I can help you.</p>
                <div class="contact-details">
                   <div className="contact-detail">
                      <a href="mailto:arunbabuks03@gmail.com" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                      <IoMdMail size={24} style={{ marginRight: "8px" }} />
                      <p style={{ margin: 0 }}>arunbabuks03@gmail.com</p>
                      </a>
                      </div>

                      <div className="contact-detail">
                      <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                      <FaPhoneAlt size={24} style={{ marginRight: "8px" }} />
                      <p style={{ margin: 0 }}>+91 95009 20812</p>
                      </a>
                      </div>

                     

                </div>
            </div>
            <form className='contact-right'onSubmit={onSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder='Enter your name' name='name' required/>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' placeholder='Enter your email' name='email' required/>
                <label htmlFor='message'>Message</label>
                <textarea id='message' placeholder='Enter your message' name='message' required></textarea>
                <button type='submit' className='contact-submit'>Send</button>
            </form>
            
        </div>
    </div>
  )
}

export default Contact