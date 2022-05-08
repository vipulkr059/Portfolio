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
