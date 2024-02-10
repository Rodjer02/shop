import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../lib/product";

const useFetchProducts = (category) => {
  return useQuery({
    queryFn: () => getProducts(category),
    queryKey: ["products", category],
  });
};

export default useFetchProducts;

//["products", category], () => getProducts(category)
