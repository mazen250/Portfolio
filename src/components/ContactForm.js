import React, { useState } from "react";
import "../style/contactForm.css";
import emailjs from "emailjs-com";
function ContactForm() {
  const [name, setName] = useState("Enter your Name");
  const [email, setEmail] = useState("Enter your Email");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_js8fwic",
        "template_o6bha6q",
        e.target,
        "user_Zt6yBqD3Js14VLhocjRkD"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => alert(err));
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="ContactFormContainer" id="contact">
      <h1>Contact me</h1>
      <form className="form" onSubmit={sendEmail}>
        <label>Full Name</label>
        <input type="text" name="name" placeholder={name} />
        <label>Email Address</label>
        <input type="text" name="user_email" placeholder={email} />
        <label>Email Body</label>
        <textarea name="message" rows="4" placeholder={message}></textarea>
        <input type="submit" value="send" className="submitBtn" />
      </form>
    </div>
  );
}

export default ContactForm;
