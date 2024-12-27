import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="mt-10">
      <h1 className="container text-4xl mt-">Shopping Cart</h1>
      <div className="container">
        <div className="itemInfo mt-5">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={index}
                className="border-top w-full h-[200px] justify-between  p-5 items-center flex"
              >
                <div className="image flex items-center gap-3">
                  <img
                    src={item.product.attributes.image}
                    className="w-[150px] object-cover rounded-lg h-[150px]"
                    alt=""
                  />
                  <div className="title">
                    <h2 className="text-xl">{item.product.attributes.title}</h2>
                  </div>
                </div>

                <p>Price: ${item.product.attributes.price}</p>
                <p
                  style={{ backgroundColor: item.color }}
                  className="w-[20px] h-[20px] rounded-full cursor-pointer"
                ></p>
                <p className="flex flex-col">
                  Amount <span className="ml-3">{item.count}</span>
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-4xl mt-5 text-black opacity-25">
              Your cart is empty
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
