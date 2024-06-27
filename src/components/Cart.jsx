import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/slices/cart-slice";
export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const total = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <Container className="py-5">
      <h1 className="py-3">Your Cart</h1>
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => {
          dispatch(clear());
        }}
      >
        clear your cart
      </Button>
      <h5>total price is {total.toFixed(2)}$</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>price</th>
            <th>quantity</th>
            <th>img</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}$</td>
              <td>{product.quantity}$</td>
              <td>
                <Image
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "contain",
                  }}
                />
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteFromCart(product));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
