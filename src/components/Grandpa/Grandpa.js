import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Fatehr/Fatehr";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = createContext('ring');

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "Dimond Ring";

  const handleBuyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };
  return (
   <RingContext.Provider value={[ornament, house]}>
        <div className="grandpa">
      <h2>Grandpa</h2>
      <button onClick={() => handleBuyAHouse()}>Buy a house</button>
      <p>House: {house}</p>
      <section style={{ display: "flex" }}>
        {" "}
        <Father house={house} ></Father>
        <Uncle house={house}></Uncle>
        <Aunty house={house}></Aunty>
      </section>
    </div>
   </RingContext.Provider>
  );
};

export default Grandpa;
