import React, { Component } from "react";
import Item from "./Item";

function Items({ items }) {
  return (
    <main>
      {items.map((el) => (
        <Item key={el.id} item={el} />
      ))}
    </main>
  );
}

export default Items;
