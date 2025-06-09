import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Rating from "./Rating";

const BACKEND_URL = "http://localhost:8000";

function Product({ product }) {
  return (
    <Card className="mt-4 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image ? `${BACKEND_URL}${product.image}` : '/images/placeholder.jpg'}
          variant="top"
          className="img-fluid"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color="#f8e825"
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">$ {product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;

