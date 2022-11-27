import React from "react";
import { Link } from "react-router-dom";
import "../assets/Cart.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const fetchdata = useSelector((state) => state.cartReducer.fetchCart);

  return (
    <div className="cart_wrapper">
      <div className="main-cart-section">
        <h1>Your Cart</h1>
        {fetchdata.map((item, index) => {
                      if(!item.source){
                        item.img = item.img.split('.')
                        item.img = `http://localhost:5006${item.img[1]}.${item.img[2]}
                        `}
          console.log("item in cart", item)
          return (
            <div className="item_wrap" key={index}>
              <div className="items-info">
                <div className="product-img">
                  <img src={item.img} alt="Loading" />
                </div>

                <div className="title">
                  <h2>{item.name}</h2>
                </div>

                <div className="add-minus-quantity">
                  <input type="text" value={1} disabled />
                </div>

                <div className="price">
                  <h3>$ {item.price}</h3>
                </div>

                <div className="remove-item">
                  <button>
                    {" "}
                    <i className="fas fa-trash-alt remove"></i>
                  </button>
                </div>
              </div>

              <hr />
            </div>
          );
        })}
        <div className="card-total">
          <h3>
            Cart Total : <span>$ 134</span>
          </h3>
          <Link to="/payment">
            <button>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
