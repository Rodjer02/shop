import React from "react";
import Items from "./Items";

import useFetchProducts from "../hooks/query/useFetchProducts";
import { useOrders } from "../hooks/zustand/useOrders";
import { UseSearchProduct } from "../hooks/zustand/useSearchProduct";

function Products({ activeCategory }) {
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
      <Items items={filterProducts} onAdd={addToOrders} />
    </div>
  );
}

export default Products;
