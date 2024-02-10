const URL = "http://localhost:8000/api";
export const getProducts = async (category) => {
  try {
    const response = await fetch(
      `${URL}/products${category !== "all" ? `?category=${category}` : ""}`
    );
    if (!response.ok) {
      throw new Error("Network response wasn`t ok");
    }
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${URL}/products/${id}`);

    if (!response.ok) {
      throw new Error("Network response wasn`t ok");
    }
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
};
