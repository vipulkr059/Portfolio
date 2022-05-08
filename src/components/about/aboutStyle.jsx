import styled from "styled-components";
import bg from "../../assets/bg.png";
export const AboutContainer = styled.div`
  background: #1b1c35;
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
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    width: 100vw;
  }
  div {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
    padding-left: 7rem;
    padding-right: 5rem;
    font-size: 1.5rem;
    @media (max-width: 800px) {
      font-size: 1.2rem;
      padding-left: 2rem;
      padding-right: 1rem;
      align-items: center;
      flex: 0.7;
    }
  }
  .heading {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 5rem;

    @media (max-width: 800px) {
      font-size: 4rem;
      flex: 0.3;
    }
    .high {
      color: #f76301;
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
`;
