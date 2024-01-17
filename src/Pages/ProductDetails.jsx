import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../Componenets/Product";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="productDetails">
      <Product props={product} opened={false} />
    </div>
  );
}
