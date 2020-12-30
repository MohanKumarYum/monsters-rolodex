import React from "react";
import "./card.styles.css";

export const Card = ({monster}) => {
  return (
      // console.log(`From Card`,props),
    <div className="card-container">
      <img
        alt="monsters"
        src={`https://robohash.org/${monster.id}?set=set2&size=220x220`}
      />
      <h2 key={monster.id}>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
};
