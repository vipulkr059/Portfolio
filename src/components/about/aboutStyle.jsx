import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;

  div {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
    padding-left: 7rem;
    padding-right: 5rem;
    font-size: 1em;
  }
  .heading {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 5rem;

    .high {
      color: #f76301;
    }
  }
  @media (max-width: 480px) {
    div {
      font-size: 1rem;
      align-items: flex-start;
      padding: 1rem 1.5rem 1.5rem 1.5rem;
    }
    .heading {
      font-size: 3rem;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    width: 100vw;
    div {
      font-size: 1rem;
      padding: 1rem 1.5rem 1rem 1.5rem;
      align-items: center;
      flex: 0.7;
    }
    .heading {
      font-size: 3.5rem;
      flex: 0.3;
    }
  }
`;

export const Container2 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  .heading {
    display: flex;
    flex: 0.5;
    align-items: center;
    justify-content: center;
    font-size: 5rem;

    @media (max-width: 800px) {
      font-size: 4rem;
    }

    .high {
      color: #f76301;
    }
  }
  @media (max-width: 480px) {
    .heading {
      font-size: 3.5rem;
      padding: 0.5rem;
    }
  }
`;
