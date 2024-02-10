import { useState } from "react";
import Category from "../components/Category";
import Products from "../components/Products";
import { FaSearch } from "react-icons/fa";
import { UseSearchProduct } from "../hooks/zustand/useSearchProduct";
import CategoryProducts from "../components/CategoryProducts";
import About from "../components/About";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="presentation">
          <p>New tren</p>
          <h2>Always be original</h2>
          <Link to={"/products"} class="product-add-to-card hover">
            SHOP NOW
          </Link>
        </div>
      </div>
      <CategoryProducts activeCategory={"men's clothing"} />
      <CategoryProducts activeCategory={"women's clothing"} />
      {/* <Category setActiveCategory={setActiveCategory} />
      <Products activeCategory={activeCategory} /> */}
      <About />
    </>
  );
};

export default HomePage;
