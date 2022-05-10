import styled from "styled-components";

export const IntroContainer = styled.div`
  background: #1b1c35;
  display: flex;
  flex-direction: column;
  .name {
    position: absolute;
    /* padding-left: 12rem;
    padding-top: 9rem; */

    .text {
      font-weight: 400;
      font-size: 6rem;

      color: white;
      text-shadow: 4px 4px 4px rgb(0 0 0 / 25%), 15px 17px 4px rgb(0 0 0 / 40%);
      @media (max-width: 800px) {
        font-size: 3rem;
        line-height: 4rem;
      }
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
  .imgcon {
    position: absolute;
    /* width: auto; */
    /* padding-left: 50%; */
    img {
      width: 50%;
      /* padding: 5rem 0rem 0rem 12rem; */
      /* margin: 6rem 0rem 0rem 13rem; */
    }
    @media (max-width: 800px) {
      /* display: flex;
      flex-direction: column;
      padding-left: 0%;
      width: 100%; */

      img {
        /* padding: 9rem 6rem 3rem 7rem; */
      }
    }
  }
  img:hover {
    transition: all 0.6s ease;
    transform: translate(-2%, -2%) scale(1.05);
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
  @media (max-width: 480px) {
    .name {
      /* margin: 3rem 0 0 3rem; */
    }
  }
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  .imgcon {
    z-index: 2;
    bottom: 10rem;
    img {
      width: 60%;
    }
  }

  @media (max-width: 800px) {
    justify-content: center;
    align-items: flex-end;
    .imgcon {
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: auto;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  background-color: #a276ff;
  border-radius: 25px 25px 0px 0px;
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
