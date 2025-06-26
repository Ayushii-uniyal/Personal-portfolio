import React, {useRef} from 'react';
import "./contact.css";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm(
            "service_hhr971k", "template_f8es5bb", form.current, 'HIkUp4LJIZSwdZDLf'
        )
        .then((result) =>{
            alert("Message sent successfully!!");
            form.current.reset();
        }, (error) =>{
            alert("Oops, something went wrong :(");
            console.error(error.text);
        });
    };
  return (
    <div id = "contact">
      <section className = "contact container section">
        <h2 className = "section__title">Get In Touch</h2>
        <div className= "contact__container grid">
            <div className = "contact__info">
                <h3 className = "contact_title">Let's connect!</h3>
                <p className = "contact_details">Send me an email :)</p>
            </div>
            <form ref = {form} onSubmit = {sendEmail} className = "contact__form">
                <div className = "contact__form-group">
                    <div className = "contact__form-div">
                        <input name = "user_name" type = "text" placeholder='Your name' className = "contact__form-input"/>                        
                    </div>

                    <div className = "contact__form-div">
                        <input name = "user_email" type = "text" placeholder='Your email' className = "contact__form-input"/>                        
                    </div>
                </div>
                <div className = "contact__form-div2">
                    <textarea name = "message" id = "" cols = "30" rows = "10" className = "contact__form-input" placeholder='Write your message'/>                        
                </div>
                <button type = "submit" className = "btn">Send message 💬</button>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
