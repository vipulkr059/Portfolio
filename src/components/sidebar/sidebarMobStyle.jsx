import styled from "styled-components";

export const Menu = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: block;
  }
  .topbar {
    width: 55px;
    height: 55px;
    right: 2rem;
    top: 15px;
    border-radius: 25%;
    background-color: #f76301;
    color: $mainColor;
    position: fixed;
    z-index: 4;
    transition: all 1s ease;

    .wrapper {
      padding: 16px 13px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .left {
        display: flex;
        align-items: center;

        .logo {
          font-size: 40px;
          font-weight: 700;
          text-decoration: none;
          color: inherit;
          margin-right: 40px;
        }

        .itemContainer {
          display: flex;
          align-items: center;
          margin-left: 30px;

          @include mobile {
            display: none;
          }

          .icon {
            font-size: 18px;
            margin-right: 5px;
          }

          span {
            font-size: 15px;
            font-weight: 500;
          }
        }
      }

      .right {
        .hamburger {
          width: 32px;
          height: 25px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;

          span {
            width: 100%;
            height: 3px;
            background-color: black;
            transform-origin: left;
            transition: all 2s ease;
          }
        }
      }
    }

    &.active {
      background-color: #1b1c35;
      color: white;

      .hamburger {
        span {
          &:first-child {
            background-color: white;
            transform: rotate(45deg);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:last-child {
            background-color: white;
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
  .menu {
    width: 300px;
    height: 100vh;
    background-color: #f76301;
    position: fixed;
    top: 0;
    right: -300px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;

    &.active {
      right: 0;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 30px;
      font-weight: 300;
      color: white;
      width: 60%;

      li {
        margin-bottom: 25px;
        a {
          font-size: 1.5rem;
          color: inherit;
          text-decoration: none;
          line-height: 2rem;
        }
        span {
          padding: 1rem;
        }

        &:hover {
          font-weight: 400;
        }
      }
    }
  }
`;
