import React from "react";
import Brother from "../Brother/Brother";
import Myself from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Fatehr = ({ house }) => {
  return (
    <div>
      <h3>father</h3>
      <p>House: {house}</p>
      <div style={{ display: "flex" }}>
        {" "}
        <Myself house={house} ></Myself>
        <Brother house={house}></Brother>
        <Sister house={house}></Sister>
      </div>
    </div>
  );
};

export default Fatehr;
