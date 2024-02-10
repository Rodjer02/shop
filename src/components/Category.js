import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { UseSearchProduct } from "../hooks/zustand/useSearchProduct";

function Category({ setActiveCategory }) {
  const [categories, setCategories] = useState(["all"]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then(
        (result) => {
          setCategories([...categories, ...result]);
        },
        (error) => {
          console.log(error.message);
        }
      );
  }, []);

  return (
    <div className="container">
      <div className="category-list">
        {categories.map((category, key) => (
          <button
            className="category-btn hover"
            key={key}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Category;
