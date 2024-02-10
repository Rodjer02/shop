import { useParams } from "react-router-dom";
import { useFetchProductById } from "../hooks/query/useFetchProductById";
import { useOrders } from "../hooks/zustand/useOrders";

const ProductPage = () => {
  const { addToOrders } = useOrders();
  const { id } = useParams();
  const { data, isLoading } = useFetchProductById(id);
  if (isLoading) return null;
  console.log(data);
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={data.image} />
      </div>
      <div className="product-body">
        <h2 className="product-title">{data.title}</h2>
        <div className="product-desc">{data.description}</div>
        <div className="product-body-bottom">
          <b className="price">Price: {data.price}$</b>
          <div
            className="product-add-to-card hover"
            onClick={() => addToOrders(data)}
          >
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
