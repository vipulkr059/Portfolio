import React from "react";
import Card from "./Card";

const Tiles = () => {
  return (
    <div style={styles.pin_container}>
      <Card size="small" />
      <Card size="medium" />
      <Card size="large" />
      <Card size="small" />
      <Card size="large" />
      <Card size="large" />
      <Card size="medium" />
      <Card size="small" />
    </div>
  );
};

const styles = {
  pin_container: {
    margin: "0",
    padding: "0",
    width: "80vw",
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
  },
};

export default Tiles;
