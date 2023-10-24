import styled from "styled-components";

export const Container = styled.div`
  background-color: #1b1c35;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  position: relative;
  div {
    font-family: "Cedarville Cursive", cursive;
    width: 50%;
    font-size: 2.5rem;
  }
  span {
    font-family: "Cedarville Cursive", cursive;

    color: #f76301;
    font-size: 1.5rem;
  }
  .ellipse1 {
    width: auto;
    position: absolute;
    top: 25rem;
    right: 0;
    img {
      width: 50%;
    }
  }

  .ellipse2 {
    position: absolute;
    bottom: 3rem;
    left: 12rem;
    img {
      width: 20%;
    }
  }
  .ellipse3 {
    position: absolute;
    top: 3rem;
    left: 20rem;
    img {
      width: 20%;
    }
  }

  img:hover {
    transition: all 0.6s ease;
    transform: translate(-10%, -10%) scale(1.2);
    transform-origin: center;

    &:after {
      opacity: 1;
      transition: opacity 1s ease;
    }

    &:before {
      opacity: 1;
      transition: opacity 0.6s linear;
    }
  }

  @media (max-width: 800px) {
    div {
      font-size: 1.5rem;
    }
    .ellipse1 {
      width: 50%;
      left: 1rem;
      top: 5rem;
    }
    .ellipse2 {
      width: 120%;
    }
    .ellipse3 {
      width: 100%;
      top: 15rem;
    }
  }
`;

export const NewCon = styled.div`
  .parallax {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: white;
    flex-direction: column;
    div {
      font-family: "Cedarville Cursive", cursive;
    }
    span {
      font-family: "Cedarville Cursive", cursive;
      color: #f76301;
      font-size: 1.5rem;
    }

    .mars {
      background-image: url(/mars.png);
      background-size: contain;
      width: 25%;
      height: 25%;
      position: absolute;
      z-index: 2;
      background-repeat: no-repeat;
      top: 0;
      left: 0;
      margin: 8rem;
    }

    .astro {
      background-image: url("/astronaut.png");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom;

      height: 50%;
      position: absolute;
      z-index: 3;
      bottom: 0;
      right: 0;
    }
    .stars {
      background-image: url("/stars.png");
      background-size: cover;
      background-position: bottom;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
    }
  }
`;
