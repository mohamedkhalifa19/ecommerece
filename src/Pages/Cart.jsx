import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../rtk/Reducers/cart-reducer";
import { Button, Table } from "react-bootstrap";
import CurvedHeading from "../Componenets/CurvedHeading";
export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);
  let totalPrice = 0;
  cart.forEach((cartEl) => {
    totalPrice += cartEl.price * cartEl.quantity;
  });
  dispatch(getProducts());
  const deleteProduct = (id) => {
    dispatch(getProducts(cart.filter((product) => product.id !== id)));
  };
  return (
    <div className="cart">
      {cart.length && (
        <div>
          <CurvedHeading title="Cart Page" />
          <Table striped bordered hover variant="dark" responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>1</td>
                  <td>
                    <img
                      src={product.image}
                      style={{
                        width: "85px",
                        height: "85px",
                        objectFit: "contain",
                      }}
                      alt="Product-img"
                    />
                  </td>
                  <td>{product.title.split(" ").slice(0, 3)}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Button
                      className="bg-danger btn-lg"
                      onClick={() => {
                        deleteProduct(product.id);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <p className="p-3 text-light fw-bold">
            Total Price : {totalPrice.toFixed(1)}
          </p>
        </div>
      )}
      {!cart.length && (
        <div>
          <h1 className="cart-message">Empty Card</h1>
        </div>
      )}
    </div>
  );
}
