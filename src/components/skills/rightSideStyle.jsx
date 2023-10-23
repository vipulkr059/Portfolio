import styled from "styled-components";

export const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .badgeContainer {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .badge {
      width: 9rem;
      margin: 1em;
      transition: transform 0.7s ease-in-out;
    }
    .badge:hover {
      transform: rotate(360deg);
    }
    @media (max-width: 800px) {
      .badge {
        width: 5rem;
        margin: 0.5em;
      }
    }
    @media (max-width: 480px) {
      .badge {
        width: 5rem;
        margin: 0.5em;
      }
    }
  }
`;
