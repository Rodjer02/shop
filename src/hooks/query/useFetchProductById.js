import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../lib/product";
export const useFetchProductById = (id) => {
  return useQuery({
    queryFn: () => getProductById(id),
    queryKey: ["product", id],
  });
};
