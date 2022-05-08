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
    }
  }
`;
