import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/UseFetch";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";    
const Home = () => {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, [data]);

  function loga(e) {
    e.preventDefault()
    console.log('salam.')
  }

  return (
    <>
      <div className="container">
        <div className="products">
          <div className="row">
            {products &&
              products.map((item) => {
                return (
                  <div className={`product col-lg-3 col-md-6`}>
                    <Link to={`detail/${item.id}`}>
                      <div className="product-container">
                        <div className="product-image">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="product-content">
                          <span className="product-category">
                            {item.category}
                          </span>
                          <h6>{item.title}</h6>
                          <span className="product-price">${item.price}</span>
                        </div>
                        <button onClick={(e) => loga(e)}>Add To Basket</button>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
