import styled from "styled-components";

export const Container = styled.div`
  background-color: linear-gradient(180deg, #111132, #0c0c1d);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  position: relative;
  height: 100vh;
  scroll-snap-align: center;
  .ellipse1 {
    position: absolute;
    top: 3rem;
    left: 9rem;
    img {
      width: 50%;
    }
  }

  .ellipse2 {
    position: absolute;
    bottom: 3rem;
    left: 12rem;
    img {
      width: 70%;
    }
  }
  .ellipse3 {
    position: absolute;
    bottom: 15rem;
    right: 9rem;
    img {
      width: 70%;
    }
  }
  div {
    font-size: 6rem;
  }
  span {
    color: #f76301;
  }
  .icon {
    color: #f76301;
    animation: arrowblink 1s infinite;
  }

  @keyframes arrowblink {
    100% {
      opacity: 0;
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
      font-size: 5rem;
    }
    .ellipse1 {
      width: 50%;
      left: 3rem;
    }
    .ellipse2 {
      width: 30%;
      left: 3rem;
    }
    .ellipse3 {
      width: 30%;
      right: 1rem;
    }
  }
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
    .moon {
      background-image: url("/moon.png");
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
  }
`;
