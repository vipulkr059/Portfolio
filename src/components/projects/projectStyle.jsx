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
    @media (max-width: 480px) {
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
    @media (max-width: 480px) {
      .heading {
        font-size: 1.2rem;
        padding: 0.3rem;
      }
      .description {
        font-size: 1rem;
      }
      .buttons {
        gap: 3rem;

        button {
          width: 7rem;
          font-size: 1.2rem;
        }
      }
    }
  }
  .lower {
    @media (max-width: 800px) {
      flex-direction: column-reverse;
    }
  }
`;

export const Button = styled.button`
  background-color: rgb(247 99 1);
  border-radius: 100px;
  box-shadow: rgba(27, 28, 53, 0.2) 0 -25px 18px -14px inset,
    rgba(27, 28, 53, 0.15) 0 1px 2px, rgba(27, 28, 53, 0.15) 0 2px 4px,
    rgba(27, 28, 53, 0.15) 0 4px 8px, rgba(27, 28, 53, 0.15) 0 8px 16px,
    rgba(27, 28, 53, 0.15) 0 16px 32px;
  color: white;
  cursor: pointer;
  display: inline-block;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 20px;
  user-select: none;
  letter-spacing: 1px;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    box-shadow: rgb(27, 28, 53, 0.35) 0 -25px 18px -14px inset,
      rgba(27, 28, 53, 0.25) 0 1px 2px, rgba(27, 28, 53, 0.25) 0 2px 4px,
      rgba(27, 28, 53, 0.25) 0 4px 8px, rgba(27, 28, 53, 0.25) 0 8px 16px,
      rgba(27, 28, 53, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
  @media (min-width: 640px) {
    font-size: 1.5rem /* 24px */;
    line-height: 2rem /* 32px */;
  }
`;

export const Eclips = styled.div`
  background: radial-gradient(circle at -16% -16%, hotpink, slateblue);
  display: grid;
  height: 1px;
  width: 1px;
  ::before {
    animation: anim 30s infinite;
    background: radial-gradient(circle at 0% 0%, hotpink, slateblue);
    border-radius: 30% 70% 53% 47% / 26% 46% 54% 74%;
    box-shadow: 0 -2vmin 4vmin LightPink inset, 0 1vmin 4vmin MediumPurple inset,
      0 -2vmin 7vmin purple inset;
    content: "";
    filter: drop-shadow(0 0 3vmin Thistle) drop-shadow(0 5vmin 4vmin Orchid)
      drop-shadow(2vmin -2vmin 15vmin MediumSlateBlue)
      drop-shadow(0 0 7vmin MediumOrchid);
    height: 50vmin;
    position: absolute;
    width: 50vmin;
  }

  @keyframes anim {
    0%,
    100% {
      border-radius: 30% 70% 70% 30% / 30% 52% 48% 70%;
      box-shadow: 0 -2vmin 4vmin LightPink inset,
        0 -4vmin 4vmin MediumPurple inset, 0 -2vmin 7vmin purple inset;
    }

    10% {
      border-radius: 50% 50% 20% 80% / 25% 80% 20% 75%;
    }

    20% {
      border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
    }

    30% {
      border-radius: 39% 61% 47% 53% / 37% 40% 60% 63%;
      box-shadow: 0 -4vmin 8vmin hotpink inset,
        -1vmin -2vmin 6vmin LightPink inset,
        -1vmin -2vmin 4vmin MediumPurple inset, 1vmin 4vmin 8vmin purple inset;
    }

    40% {
      border-radius: 39% 61% 82% 18% / 74% 40% 60% 26%;
    }

    50% {
      border-radius: 100%;
      box-shadow: 0 4vmin 16vmin hotpink inset, 0 2vmin 5vmin LightPink inset,
        0 4vmin 4vmin MediumPurple inset, 0 6vmin 8vmin purple inset;
    }

    60% {
      border-radius: 50% 50% 53% 47% / 72% 69% 31% 28%;
    }

    70% {
      border-radius: 50% 50% 53% 47% / 26% 22% 78% 74%;
      box-shadow: 1vmin 1vmin 8vmin LightPink inset,
        2vmin -1vmin 4vmin MediumPurple inset, -1vmin -1vmin 16vmin purple inset;
    }

    80% {
      border-radius: 50% 50% 53% 47% / 26% 69% 31% 74%;
    }

    90% {
      border-radius: 20% 80% 20% 80% / 20% 80% 20% 80%;
    }
  }
`;
