import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.5;

  .edu {
    display: flex;
    flex: 1;

    .card1 {
      display: flex;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 800px) {
        align-items: flex-start;
      }
      .cardbody {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        width: 55%;
        height: 85%;

        background: linear-gradient(
          90deg,
          rgba(247, 99, 1, 1) 0%,
          rgba(236, 1, 247, 1) 55%,
          rgba(69, 144, 252, 1) 100%
        );

        box-shadow: 2px 2px 10px 10px #1b1c35;
        border-radius: 25px;
      }
      .imgCon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0.5;
        img {
          border-radius: 25px 25px 0px 0px;
          width: 100%;
          background-color: white;
        }
      }

      .text {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        flex: 0.5;
        gap: 1rem;
      }
      @media (max-width: 800px) {
        .cardbody {
          width: 75%;
          height: 60%;
          flex-direction: row;
          padding: 1.5rem 1rem 1.5rem 1rem;
        }
        .imgCon {
          flex: 0.5;
          img {
            width: 90%;
            height: 90%;
          }
        }
        h2 {
          font-size: 1.2rem;
        }
        h3 {
          font-size: 1rem;
        }

        .text {
          padding: 0rem;
          gap: 0;
        }
      }
      @media (max-width: 480px) {
        .cardbody {
          height: 55%;
        }
      }
    }
  }
`;
export const Cards = styled.div`
  user-select: none;
  max-width: 300px;
  margin: 15px 10px;
  border: 1px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(
    0deg,
    rgba(40, 44, 52, 1) 0%,
    rgba(17, 0, 32, 0.5) 100%
  );
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: 0.7rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.5s all;

  .main {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 1rem;
    .tokenImage {
      border-radius: 0.5rem;
      max-width: 100%;
      height: 250px;
      object-fit: cover;
    }
    .description {
      margin: 0.5rem 0;
      color: #a89ec9;
    }
  }
  ::before {
    position: fixed;
    content: "";
    box-shadow: 0 0 100px 40px #ffffff08;
    top: -10%;
    left: -100%;
    transform: rotate(-45deg);
    height: 60rem;
    transition: 0.7s all;
  }
  &:hover {
    border: 1px solid #ffffff44;
    box-shadow: 0 7px 50px 10px #000000aa;
    transform: scale(1.015);
    filter: brightness(1.3);
    ::before {
      filter: brightness(0.5);
      top: -100%;
      left: 200%;
    }
  }
`;
