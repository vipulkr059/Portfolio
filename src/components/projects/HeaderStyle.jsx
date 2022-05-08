import styled from "styled-components";

export const Container = styled.div`
  background-color: #1b1c35;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  position: relative;
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
`;
