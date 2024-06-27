import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/product-slice";
// /////////////////////////
//   dispatches
// /////////////////////////
import { addToCart } from "../rtk/slices/cart-slice";
export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  return (
    <>
      <Container className="py-5">
        <Row className="py-5">
          {products.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{
                    width: "90%",
                    margin: "10px auto",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price} $</Card.Text>
                  <Button variant="primary" onClick={() => { dispatch(addToCart(product)) }}>Add To Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
