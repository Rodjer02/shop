import React, { Component } from "react";

function Item({ item, onAdd }) {
  return (
    <div className="item">
      <img src="" />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className="add-to-card" onClick={() => onAdd(item)}>
        +
      </div>
    </div>
  );
}

export default Item;
