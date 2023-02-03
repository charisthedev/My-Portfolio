import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";
import { BiSend } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
export const ContactUs = ({ AlterPopup, Popup }) => {
  const form = useRef();
  const name = useRef();
  useEffect(() => {
    name.current.focus();
  }, [Popup]);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_je05kl9",
        "template_e8gsdzs",
        form.current,
        "f3heQFk_ycb7UsDKq"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("message sent ✅");
          AlterPopup();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="form">
      <label htmlFor="name" className="label">
        Name
      </label>
      <input
        ref={name}
        type="text"
        required
        name="from_name"
        placeholder="Name"
        id="name"
      />
      <label htmlFor="email" className="label">
        Email
      </label>
      <input
        type="email"
        required
        name="from_email"
        placeholder="Email_id"
        id="email"
      />
      <label htmlFor="message" className="label">
        Message
      </label>
      <textarea name="message" required placeholder="Message" id="message" />
      <button type="submit" className="btn btn-submit">
        Send <BiSend className="sendIcon" />
      </button>
    </form>
  );
};
export default ContactUs;
