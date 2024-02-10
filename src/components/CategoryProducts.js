import React from "react";
import Items from "./Items";

import useFetchProducts from "../hooks/query/useFetchProducts";
import { useOrders } from "../hooks/zustand/useOrders";
import { UseSearchProduct } from "../hooks/zustand/useSearchProduct";
const CategoryProducts = ({ activeCategory }) => {
  const { addToOrders } = useOrders();

  const { searchValue } = UseSearchProduct();

  const { data: products, isLoading } = useFetchProducts(activeCategory);

  const filterProducts = !isLoading
    ? products.filter((product) =>
        product?.title?.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];
  return (
    <div className="container">
      <h2 className="category-title">{activeCategory}</h2>
      <div className="category-subtitle">
        Shop our new arrivals from established brands
      </div>
      <Items items={filterProducts} onAdd={addToOrders} />
    </div>
  );
};

export default CategoryProducts;
