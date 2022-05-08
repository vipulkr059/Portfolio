import React from "react";
import { Main } from "./contactStyle";
import insta from "../../assets/insta.svg";
import leetcode from "../../assets/leetcode.png";
import github from "../../assets/github.svg";
import linkd from "../../assets/linkd.svg";

export default function contact() {
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
          <form>
            <div class="form-item">
              <input type="text" name="sender" required />
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
            <button class="submit-btn">Send</button>
          </form>
        </div>
      </div>
    </Main>
  );
}
