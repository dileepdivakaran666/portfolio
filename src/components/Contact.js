import React, {useState} from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'
import { IoMail } from "react-icons/io5";
import { FaPhoneSquare } from "react-icons/fa";

function Contact() {
    const [formData, setFormData] = useState({
        name : "",
        email : "",
        message : ""
    })

    const handleChange = (e)=>{
        setFormData({
            ...formData,
                [e.target.name]:e.target.value
        });

    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_2p63tae', 'template_hzyx8bn', e.target, 'uoVREKT1f66AqiN42')
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        alert('Failed to send the message. Please try again.');
      });
    }

  return (
    <div className='contact-page'>
      <div className='cont-personal'>

        <h1 className='cont-h1'>Let's Chat.<br/>Tell me about your project</h1>
        <div className='contact-details'>
            <table>
              <tr>
                <td>Email :</td>
                <td><a href='mailto:dileepdivakaran666@gmail.com' target="_blank" rel="noopener noreferrer">
                    <IoMail/>dileepdivakaran666@gmail.com
                    </a>
                </td>
              </tr>
              <tr>
                <td>Phone no :</td>
                <td><a href="tel:+918113938201" target="_blank" rel="noopener noreferrer"> <FaPhoneSquare/>+918113938201</a>
                </td>
              </tr>
            </table>
          </div>
      </div>
    <div className='cont-container'>
      <h2>Send me a Message</h2>
      <form onSubmit={handleSubmit} className='con-form'>
        <div className='con-items'>
            <label htmlFor='name'>Name:</label>
            <input
              type = "text"
              id="name"
              name = "name"
              value ={formData.name}
              onChange={handleChange}
              required
            />
        </div>
        
        <div className='con-items'>
            <label htmlFor='email'>Email:</label>
            <input 
              type = "email"
              id = "email"
              name = "email"
              value = {formData.email}
              onChange={handleChange}
              required
            />
        </div>
            
        <div className='con-items'>
            <label htmlFor='message'>Message:</label>
            <textarea
              id = "message"
              name = "message"
              value = {formData.message}
              onChange={handleChange}
              required
            />
        </div>
        <button type="submit" id="sub-button">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contact