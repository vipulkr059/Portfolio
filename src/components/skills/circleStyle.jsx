import styled from "styled-components";

export const Cir = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  .circleContainer {
    width: 100%;
    .heading {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      padding: 1rem;
      color: white;
    }
    @media (max-width: 800px) {
      .heading {
        font-size: 1.2rem;
      }
    }
  }
`;
