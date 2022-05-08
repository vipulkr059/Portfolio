import styled from "styled-components";

export const Main = styled.div`
  background-color: #1b1c35;
  display: flex;
  flex-direction: column;

  .lower {
    @media (max-width: 800px) {
      flex-direction: column-reverse;
    }
  }
`;
export const Left = styled.div`
  display: flex;
  flex: 1;

  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  .imgContainer {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    .laptop {
      width: 49%;
      height: 65%;
      z-index: 2;
    }
    .spiffy {
      width: 18%;
      height: 25%;
      position: absolute;
      padding-bottom: 1rem;
    }
    @media (max-width: 800px) {
      .laptop {
        height: 85%;
        width: 55%;
      }
      .spiffy {
        height: 14%;
        width: 40%;
        padding: 0.5rem;
      }
    }
  }
  .text {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    .heading {
      font-size: 2rem;
      color: white;
      padding: 1rem;
      color: #f76301;
    }

    .description {
      font-size: 1.5rem;
      line-height: 2rem;
      color: white;
    }
    .buttons {
      display: flex;
      gap: 10rem;
      align-items: center;
      justify-content: center;

      button {
        background: linear-gradient(
          90deg,
          rgba(247, 99, 1, 1) 0%,
          rgba(236, 1, 247, 1) 55%,
          rgba(69, 144, 252, 1) 100%
        );
        border-radius: 50px;
        font-size: 1.5rem;
        padding: 1rem;
        width: 12rem;
        &:hover {
          transition: all 0.6s ease;
          transform: translate(-2%, -2%) scale(1.1);
          transform-origin: center;

          &:after {
            opacity: 1;
            transition: opacity 1s ease;
          }

          &:before {
            opacity: 1;
            transition: opacity 1s linear;
          }
        }
      }
    }
    @media (max-width: 800px) {
      .buttons {
        gap: 3rem;
        padding: 0.5rem;
        button {
          width: 8rem;
        }
      }
      .description {
        font-size: 1.2rem;
      }
      .heading {
        font-size: 1.5rem;

        padding: 0.3rem;
      }
    }
  }
`;
