import styled from "styled-components";

export const IntroContainer = styled.div`
  /* background: #1b1c35; */
  background: linear-gradient(180deg, #111132, #0c0c1d);
  /* display: flex;
  flex-direction: column; */
  height: 100vh;
  scroll-snap-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
  color: white;
  flex-direction: column;
  .name {
    position: absolute;
    /* padding-left: 12rem;
    padding-top: 9rem; */

    .text {
      color: white;
      text-shadow: 4px 4px 4px rgb(0 0 0 / 25%), 15px 17px 4px rgb(0 0 0 / 40%);

      .high {
        color: #f76301;
      }
      .small {
        font-size: 1.5rem;
        text-shadow: none;
        line-height: 2;
        span {
          font-size: inherit;
          color: #f76301;
          text-shadow: 0 0 2px black;
        }
      }
    }
    @media (max-width: 800px) {
      /* top: 45%;
      padding-left: 4rem; */
    }
  }

  img {
    transition: all 0.3s ease-in-out;
    z-index: 3;
  }
  img:hover {
    transition: all 0.6s ease;
    transform: translate(-2%, -2%) scale(1.03);
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
  .stars {
    background-image: url("/stars.png");
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
  }
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  z-index: 3;
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  /* background-color: #a276ff; */
  border-radius: 25px 25px 0px 0px;
  z-index: 1;

  .name {
    z-index: 2;
    bottom: 10rem;
    left: 10rem;
  }
  @media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    .name {
      bottom: auto;
      left: auto;
    }
  }
`;
