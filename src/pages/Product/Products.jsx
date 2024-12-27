import "./Products.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Product() {
  const [res, setRes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products`)
      .then((response) => {
        if (response.status === 200) {
          const products = response.data.data;
          setRes(products);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleClick(id) {
    navigate(`/products/${id}`);
  }

  return (
    <>
      <div className="products">
        <div className="container">
          <div className="products-list">
            {res.length > 0 ? (
              res.map(function (value, index) {
                return (
                  <div
                    onClick={() => {
                      handleClick(value.id);
                    }}
                    key={index}
                    className="card"
                  >
                    <div className="product-image">
                      <img src={value.attributes.image} alt="" />
                    </div>
                    <div className="product-title">
                      <h2>{value.attributes.title}</h2>
                      <p>${value.attributes.price}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
