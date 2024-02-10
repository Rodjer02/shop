import React, { Component } from "react";
import Item from "./Item";

function Items({ items, onAdd }) {
  return (
    <main className="item-list">
      {items.map((el, key) => (
        <Item key={key} item={el} onAdd={onAdd} />
      ))}
    </main>
  );
}

export default Items;
