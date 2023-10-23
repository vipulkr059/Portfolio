import styled from "styled-components";

export const Main = styled.div`
  background: linear-gradient(180deg, #111132, #0c0c1d);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  #contact {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact-box {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    height: 65%;
  }

  .contact-links,
  .contact-form-wrapper {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .contact-links {
    background-color: #a276ff;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: radial-gradient(
        circle at 55% 92%,
        #426691 0 12%,
        transparent 12.2%
      ),
      radial-gradient(circle at 94% 72%, #426691 0 10%, transparent 10.2%),
      radial-gradient(
        circle at 20% max(78%, 350px),
        #263a53 0 7%,
        transparent 7.2%
      ),
      radial-gradient(circle at 0% 0%, #263a53 0 40%, transparent 40.2%),
      #a276ff;
    border-radius: 10px 0 0 10px;
  }

  .contact-form-wrapper {
    background-color: #f76301;

    border-radius: 0 10px 10px 0;
  }

  @media only screen and (max-width: 800px) {
    .contact-links,
    .contact-form-wrapper {
      width: 100%;
    }

    .contact-links {
      border-radius: 10px 10px 0 0;
    }

    .contact-form-wrapper {
      border-radius: 0 0 10px 10px;
    }
  }

  @media only screen and (max-width: 400px) {
    .contact-box {
      width: 95%;
      margin: 8% 5%;
    }
  }

  h2 {
    color: #fff;
    font-size: clamp(30px, 6vw, 60px);
    letter-spacing: 0.5rem;
    text-align: center;
    transform: scale(0.95, 1);

    span {
      color: #f76301;
    }
  }

  .links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 50px;
  }

  .link {
    margin: 10px;
    cursor: pointer;
  }

  img {
    width: 56px;
    height: 56px;
    filter: drop-shadow(4px 4px 4px black);
    transition: 0.2s;
    user-select: none;
  }

  img:hover {
    transform: scale(1.1, 1.1);
  }

  img:active {
    transform: scale(1.1, 1.1);
    filter: hue-rotate(220deg) drop-shadow(2px 4px 4px #222) sepia(0.3);
  }

  .form-item {
    position: relative;
  }

  label,
  input,
  textarea {
    font-family: "Poppins", sans-serif;
  }

  label {
    position: absolute;
    top: 10px;
    left: 2%;
    color: #999;
    font-size: clamp(14px, 1.5vw, 18px);
    pointer-events: none;
    user-select: none;
  }

  input,
  textarea {
    width: 100%;
    outline: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 12px;
    font-size: clamp(15px, 1.5vw, 18px);
  }

  input:focus + label,
  input:valid + label,
  textarea:focus + label,
  textarea:valid + label {
    font-size: clamp(13px, 1.3vw, 16px);
    color: #777;
    top: -20px;
    transition: all 0.225s ease;
  }

  .submit-btn {
    background-color: #1b1c35;
    filter: drop-shadow(2px 2px 3px #0003);
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: clamp(16px, 1.6vw, 18px);
    display: block;
    padding: 12px 20px;
    margin: 2px auto;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    transition: 0.2s;
  }

  .submit-btn:hover {
    transform: scale(1.1, 1.1);
  }

  .submit-btn:active {
    transform: scale(1.1, 1.1);
    filter: sepia(0.5);
  }

  @media only screen and (max-width: 800px) {
    h2 {
      font-size: clamp(40px, 10vw, 60px);
    }
  }

  @media only screen and (max-width: 400px) {
    h2 {
      font-size: clamp(30px, 12vw, 60px);
    }

    .links {
      padding-top: 30px;
    }

    img {
      width: 38px;
      height: 38px;
    }
  }
`;
