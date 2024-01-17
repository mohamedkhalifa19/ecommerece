import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { cartLength } from "../rtk/Reducers/cart-reducer";
import { useEffect, useState } from "react";

export default function MyNavbar() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);
  const [carts, setCarts] = useState(0);
  useEffect(() => {
    setCarts(dispatch(cartLength(cart)).payload.length);
  }, [cart, dispatch]);
  return (
    <Navbar expand="lg" className="bg-dark ">
      <Container>
        <Navbar.Brand
          href="/"
          className="fw-bold text-warning"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Ecommerece{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="/cart"
              onClick={(e) => {
                e.preventDefault();
                navigate("/cart");
              }}
            >
              Cart <Badge bg="warning">{carts}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
