import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

function App() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "first product",
      img: "first product img",
      desc: "Lorem ippsum ",
      category: "chairs",
      price: "49.99",
    },
    {
      id: 2,
      title: "second product",
      img: "first product img",
      desc: "Lorem ippsum ",
      category: "chairs",
      price: "49.99",
    },
    {
      id: 3,
      title: "third product",
      img: "first product img",
      desc: "Lorem ippsum ",
      category: "chairs",
      price: "49.99",
    },
    {
      id: 4,
      title: "four product",
      img: "first product img",
      desc: "Lorem ippsum ",
      category: "chairs",
      price: "49.99",
    },
    {
      id: 5,
      title: "fife product",
      img: "first product img",
      desc: "Lorem ippsum ",
      category: "chairs",
      price: "49.99",
    },
  ]);
  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  return (
    <div className="App">
      <Header orders={orders} />

      <Items items={products} onAdd={addToOrder} />

      <Footer />
    </div>
  );
}

export default App;
