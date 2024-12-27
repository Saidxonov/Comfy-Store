import React, { useEffect } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { remove, update, clear } from "../../redux/cartSlice";
import axios from "axios";

function Cart() {
  const { id } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1 className="text-9xl text-center">Hello World</h1>
    </div>
  );
}

export default Cart;
