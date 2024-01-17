import { Route, Routes } from "react-router-dom";
import About from "./About";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Products from "../Componenets/Products";
import CurvedHeading from "../Componenets/CurvedHeading";
import Slider from "../Componenets/Slider";

export default function Home() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <CurvedHeading title="Products" />
              <Products />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
