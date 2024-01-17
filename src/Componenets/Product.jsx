import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk/Reducers/cart-reducer";
export default function Product(props) {
  const dispatch = useDispatch();
  const { id, category, image, description, price } = props.props;
  return (
    <Card style={{ width: "18rem" }} className="">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {!props.opened && <Card.Text>{price}$</Card.Text>}
        {props.opened && (
          <Link
            variant="primary"
            className="bg-primary"
            to={`/productDetails/${id}`}
          >
            Details
          </Link>
        )}
      </Card.Body>
      {!props.opened && (
        <Button
          variant="primary align-self-center w-50 p-2"
          onClick={() => {
            dispatch(addToCart(props.props));
          }}
        >
          Add To Cart
        </Button>
      )}
    </Card>
  );
}
