import "./home.css";
import firstImage from "../../images/carousel-1.jpg";
import secondImage from "../../images/carousel-2.jpg";
import thirdImage from "../../images/carousel-3.jpg";
import fourthImage from "../../images/carousel-4.jpg";
import lamp from "../../images/lamp.jpg";
import bed from "../../images/comfy-bed.jpg";

function Home() {
  return (
    <div>
      <div className="top-content">
        <div className="container">
          <div className="first-content">
            <div className="left-side">
              <h1>
                We are changing <br /> the way people <br /> shop
              </h1>
              <p className="subtitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                Tempore repellat explicabo enim soluta temporibus <br />
                asperiores aut obcaecati perferendis porro nobis.
              </p>
              <p className="product-link">OUR PRODUCTS</p>
            </div>
            <div className="right-side">
              <div className="carousel">
                <img src={firstImage} alt="" />
              </div>
              <div className="carousel">
                <img src={secondImage} alt="" />
              </div>
              <div className="carousel">
                <img src={thirdImage} alt="" />
              </div>
              <div className="carousel">
                <img src={fourthImage} alt="" />
              </div>
            </div>
          </div>
          <div className="featured">
            <div className="container">
              <div className="feature">
                <h2>Featured Products</h2>
                <hr className="line" />
              </div>
              <div className="products">
                <div className="product">
                  <div className="img">
                    <img src={lamp} alt="" />
                  </div>
                  <div className="product-name">
                    <h2>Avant-Garde Lamp</h2>
                  </div>
                  <div className="product-price">
                    <p>$179.99</p>
                  </div>
                </div>
                <div className="product">
                  <div className="img">
                    <img
                      src="https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                    />
                  </div>
                  <div className="product-name">
                    <h2>Coffee Table</h2>
                  </div>
                  <div className="product-price">
                    <p>$179.99</p>
                  </div>
                </div>
                <div className="product">
                  <div className="img">
                    <img src={bed} alt="" />
                  </div>
                  <div className="product-name">
                    <h2>Comfy Bed</h2>
                  </div>
                  <div className="product-price">
                    <p>$129.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
