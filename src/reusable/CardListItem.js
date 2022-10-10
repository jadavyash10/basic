import React from "react";

export const characters = [
  {
    id: 1,
    name: "Wonder Woman",
    alterEgo: "Diana Prince",
    alignment: "hero",
  },
  {
    id: 2,
    name: "Poison Ivy",
    alterEgo: "Pamela Lillian Isley",
    alignment: "villain",
  },
  {
    id: 3,
    name: "Black Canary",
    alterEgo: "Dinah Drake",
    alignment: "hero",
  },
  {
    id: 4,
    name: "Catwoman",
    alterEgo: "Selina Kyle",
    alignment: "villain",
  },
];

const CardListItem = (props) => {
  return (
    <>
      <div
        className="card-container"
        style={{
          width: "50%",
          border: "solid 3px #d3d3d3",
          margin: "10px auto",
        }}
      >
        <p>
          <strong>{props.character.name}</strong>
        </p>
        <p>{props.character.alterEgo}</p>
        <p>{props.character.alignment}</p>
      </div>
    </>
  );
};

export default CardListItem;
