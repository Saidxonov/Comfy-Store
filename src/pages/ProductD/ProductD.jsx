import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductD.css";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartSlice";

function ProductD() {
  const [product, setProduct] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(function () {
    axios
      .get(
        `
https://strapi-store-server.onrender.com/api/products/${id}`
      )
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          setProduct(response.data.data);
          if (setSelectedColor(response.data?.data?.attributes?.colors[0])) {
            setSelectedColor(response.data.data.attributes.colors[0]);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleAddCart() {
    let data = {
      id: product.id,
      count: count,
      color: selectedColor,
      product: product,
    };
    dispatch(add(data));
  }

  return (
    <div>
      <div className="product-page">
        <div className="container">
          <div className="link-home">
            <p>Home {">"} Products</p>
          </div>
          {product.id && (
            <>
              <div className="product-wrapper">
                <div className="products-img">
                  <img src={product.attributes.image} alt="" />
                </div>
                <div className="product-info">
                  <div className="product-page-name">
                    <h2>{product.attributes.title}</h2>
                  </div>
                  <div className="product-company">
                    <p>{product.attributes.company}</p>
                  </div>
                  <div className="product-page-price">
                    <p>${product.attributes.price}</p>
                  </div>
                  <div className="product-description">
                    <p>{product.attributes.description}</p>
                  </div>
                  <div className="colors">
                    <p>colors</p>
                    <div className="flex gap-1 mt-4">
                      {product.attributes?.colors?.length &&
                        product.attributes.colors.map((color, index) => {
                          return (
                            <span
                              key={index}
                              style={{
                                backgroundColor: color,
                                border:
                                  selectedColor == color
                                    ? "2px solid #463AA1"
                                    : "none",
                              }}
                              onClick={() => {
                                setSelectedColor(color);
                              }}
                              className={`inline-block rounded-full w-[20px] h-[20px] cursor-pointer`}
                            ></span>
                          );
                        })}
                    </div>
                  </div>
                  <div className="amount">
                    <p>Amount</p>
                    <select
                      id="amount-select"
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                    >
                      <option className="cursor-pointer" value="1">
                        1
                      </option>
                      <option className="cursor-pointer" value="2">
                        2
                      </option>
                      <option className="cursor-pointer" value="3">
                        3
                      </option>
                      <option className="cursor-pointer" value="4">
                        4
                      </option>
                    </select>
                  </div>
                  <div className="add">
                    <button onClick={handleAddCart}>ADD TO BAG</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductD;
