import { useState } from "react";
import Category from "../components/Category";
import Products from "../components/Products";
import { FaSearch } from "react-icons/fa";
import { UseSearchProduct } from "../hooks/zustand/useSearchProduct";

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("");

  const { setSearchValue } = UseSearchProduct();
  const [value, setValue] = useState("");
  const handleClick = (event) => {
    event.preventDefault();
    setSearchValue(value);
  };
  return (
    <div className="container">
      <div className="mobile-search">
        <label>
          <input
            placeholder="Search..."
            className="search-product"
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
          <button onClick={handleClick} className="search-button hover">
            <FaSearch color="#fff" />
          </button>
        </label>
      </div>
      <Category setActiveCategory={setActiveCategory} />
      <Products activeCategory={activeCategory} />
    </div>
  );
};

export default ProductsPage;
