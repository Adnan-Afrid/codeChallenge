import React from "react";
import Loader from "react-js-loader";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../assets/Cards.css";
import { useDispatch, useSelector } from "react-redux";
import allActions from "../../../redux/actions";

const Card = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.PostReducers);
  const all = allProducts.productItems.data;
  useEffect(() => {
    dispatch(allActions.itemAction.fetchPosts());
  }, [dispatch]);
  
  const handleCart = (id) =>{
    dispatch(allActions.cartActions.fetchCart(id));
  }

  return (
    <div className="container">
      <div className="row mb-5">
        {all != null ? (
          all.map((item, index) => {
            return (
              <div className="col-lg-4 card_wrap" key={index}>
                <div className="image_wrap">
                  <img src={item.img} className="img-fluid" alt="loading" />
                </div>
                <div className="card_content">
                  <h3>${item.price}</h3>
                  <h3>{item.name}</h3>
                  <button
                    type="button"
                    onClick={() =>  handleCart(item.id)}
                    className="cart-btn"
                  >
                    Add to Cart<i className="fas fa-shopping-cart"></i>
                  </button>
                  <span>
                    <button className="details_btn">
                      <Link to={`/details?id=${item.id}`}>Details</Link>
                    </button>
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className={"row"}>
            <div className={"item"}>
              <Loader
                type="spinner-cub"
                bgColor={"#ed7a23"}
                color={"#ed7a23"}
                size={100}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;