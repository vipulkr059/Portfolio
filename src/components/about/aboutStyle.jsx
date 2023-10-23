import styled from "styled-components";
import bg from "../../assets/bg.png";
export const AboutContainer = styled.div`
  background: linear-gradient(180deg, #111132, #0c0c1d);
  display: flex;
  flex-direction: column;
  color: white;

  /* .upper {
    flex: 0.5;
    z-index: 2;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 90%;
      font-size: 3rem;
      padding-left: 8rem;
      padding-top: 6rem;
    }
    .heading {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-top: 10rem;
      font-size: 5rem;

      .high {
        color: #f76301;
      }
    }
    .rect {
    }
  }
  .lower {
    z-index: 2;
    flex: 0.5;
    div {
      display: flex;
      align-items: center;
      width: 90%;
      font-size: 3rem;
      justify-content: center;
      padding-left: 4rem;
      padding-top: 11rem;
    }

    .heading {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-top: 10rem;
      font-size: 5rem;

      .high {
        color: #f76301;
      }
    } 
  }*/

  /* .rect {
    position: absolute;
    background-color: #a276ff;
    width: 100%;
    height: 55%;
    top: 45%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px; */
`;

export const Rect = styled.div`
  position: absolute;
  background-color: #a276ff;
  width: 100%;
  height: 55%;
  top: 45%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;

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
    font-size: 1.5rem;
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
    }
    .heading {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    width: 100vw;
    div {
      font-size: 1.2rem;
      padding-left: 2rem;
      padding-right: 1rem;
      align-items: center;
      flex: 0.7;
    }
    .heading {
      font-size: 4rem;
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
