import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../rtk/Reducers/Products-reducer";
import Product from "./Product";
import "./products.css";
export default function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const { products } = useSelector((state) => state);

  return (
    <div className="products">
      {products.map((product) => {
        return <Product key={product.id} props={product} opened={true} />;
      })}
    </div>
  );
}
