import React, { Component } from "react";
import { Link } from "react-router-dom";

function Item({ item, onAdd }) {
  return (
    <div className="item">
      <div className="item-img">
        <img src={item.image} />
      </div>
      <div className="item-info">
        <Link to={`/product/${item._id}`} className="item-title">
          {item.title}
        </Link>
        <div className="info-bottom">
          <b className="price">{item.price}$</b>
          <div className="add-to-card hover" onClick={() => onAdd(item)}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
