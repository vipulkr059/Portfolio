import styled from "styled-components";

export const Main = styled.div`
  background-color: #1b1c35;
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #1b1c35;
  color: white;
  .heading {
    font-family: "Bangers";
    font-style: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
    font-size: 5rem;

    .high {
      color: #f76301;
    }
  }
  div {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    justify-content: center;
    padding-left: 3.5rem;
    padding-top: 1rem;
    padding-right: 1rem;
    font-family: "Montserrat", sans-serif;
  }
  @media (max-width: 800px) {
    flex-direction: columns;

    .heading {
      font-size: 4rem;
      padding-top: 1rem;
    }

    div {
      font-size: 1.2rem;
      padding: 0.5rem;
    }
  }
  @media (max-width: 480px) {
    .heading {
      font-size: 3.5rem;
      padding-top: 0.5rem;
    }
    div {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }
`;

export const Right = styled.div`
  background: #1b1c35;
  height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  gap: 1.5rem;

  @media (max-width: 800px) {
    gap: 1rem;
  }
`;
