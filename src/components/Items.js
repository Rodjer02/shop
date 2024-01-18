import React, { Component } from "react";
import Item from "./Item";

function Items({ items, onAdd }) {
  return (
    <main>
      {items.map((el) => (
        <Item key={el.id} item={el} onAdd={onAdd} />
      ))}
    </main>
  );
}

export default Items;
