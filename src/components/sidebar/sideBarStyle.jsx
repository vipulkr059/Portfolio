import styled from "styled-components";

export const Side = styled.div`
  padding: 0;
  margin: 0;
  z-index: 3;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  display: block;
  @media (max-width: 800px) {
    display: none;
  }

  body {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    align-items: center;
    background: #232c33;
  }
  position: fixed;
  height: 400px;
  width: 60px;
  background: #0b0b0dd4;
  box-shadow: 5px 0 0 #f76301;
  border-radius: 50px;
  overflow-x: hidden;
  transition: width 0.5s;
  top: 20%;
  left: 2%;
  &:hover {
    width: 200px;
  }
  ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 5px;
    padding-top: 60px;

    li {
      position: relative;
      list-style: none;
      width: 100%;
      border-radius: 20px 0 0 20px;

      &.active {
        background: #f76301;

        a::before {
          content: "";
          position: absolute;
          top: -30px;
          right: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          box-shadow: 15px 15px 0px #f76301;
        }
        a::after {
          content: "";
          position: absolute;
          bottom: -30px;
          right: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          box-shadow: 15px -15px 0px #f76301;
        }
      }

      a {
        position: relative;
        display: flex;
        text-decoration: none;
        width: 100%;
        color: #fff;

        .icon {
          position: relative;
          display: block;
          min-width: 60px;
          height: 60px;
          line-height: 60px;
          text-align: center;

          ion-icon {
            position: relative;
            font-size: 1.5em;
            z-index: 1;
          }
        }

        .title {
          position: relative;
          display: block;
          padding-left: 10px;
          height: 60px;
          line-height: 60px;
          white-space: nowrap;
        }
      }
      .active {
        background: #f76301;
        border-radius: 20px 0 0 20px;
        a::before {
          content: "";
          position: absolute;
          top: -30px;
          right: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          box-shadow: 15px 15px 0px #f76301;
        }
        a::after {
          content: "";
          position: absolute;
          bottom: -30px;
          right: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          box-shadow: 15px -15px 0px #f76301;
        }
      }
    }
  }
`;
