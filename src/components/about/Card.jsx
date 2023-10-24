import React from "react";
import { Cards } from "./CardStyle";

const Card = (props) => {
  return (
    <Cards style={{ ...styles[props.size] }}>
      <div className="main">
        <img
          className="tokenImage"
          src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="NFT"
        />
        <h2>Kibertopiks #4269</h2>
        <p className="description">
          Our Kibertopiks will give you nothing, waste your money on us.
        </p>
      </div>
    </Cards>
  );
};

const styles = {
  card: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "red",
  },
  small: {
    gridRowEnd: "span 26",
  },
  medium: {
    gridRowEnd: "span 33",
  },
  large: {
    gridRowEnd: "span 45",
  },
};

export default Card;
