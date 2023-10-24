import React, { useRef, useState } from "react";
import { Main } from "./contactStyle";
import insta from "../../assets/insta.svg";
import leetcode from "../../assets/leetcode.png";
import github from "../../assets/github.svg";
import linkd from "../../assets/linkd.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <Main id="contact">
      <div class="contact-box">
        <div
          class="contact-links"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <h2>
            CON<span>TA</span>CT
          </h2>
          <div class="links">
            <div class="link">
              <a
                href="https://www.linkedin.com/in/vipul-kumar-520465215/"
                target="_blank"
              >
                <img src={linkd} alt="linkedin" />
              </a>
            </div>
            <div class="link">
              <a href="https://github.com/vipulkr059" target="_blank">
                <img src={github} alt="github" />
              </a>
            </div>
            <div class="link">
              <a
                href="https://www.instagram.com/vipul_choudhary_/?hl=en"
                target="_blank"
              >
                <img src={insta} alt="insta" />
              </a>
            </div>
            <div class="link">
              <a href="https://leetcode.com/vipulkr059/" target="_blank">
                <img src={leetcode} alt="leetcode" />
              </a>
            </div>
          </div>
        </div>
        <div
          class="contact-form-wrapper"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <form ref={formRef} onSubmit={sendEmail}>
            <div class="form-item">
              <input type="text" name="name" required />
              <label>Name:</label>
            </div>
            <div class="form-item">
              <input type="text" name="email" required />
              <label>Email:</label>
            </div>
            <div class="form-item">
              <textarea class="" name="message" required></textarea>
              <label>Message:</label>
            </div>
            <button type="submit" class="submit-btn">
              Send
            </button>

            {error && <p className=" text-red-600">Error</p>}
            {success && <p className="text-green-500">Message Sent</p>}
          </form>
        </div>
      </div>
    </Main>
  );
};

export default Contact;
