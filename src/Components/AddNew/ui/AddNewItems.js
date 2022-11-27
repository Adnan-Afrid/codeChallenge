import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import "../assets/AddNewItems.css";
import allActions from "../../../redux/actions";
import { Link } from "react-router-dom";

const AddNew = () => {
  const dipatch = useDispatch();
  const [sale, setSale] = useState({ name: "", price: "", img: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSale({ ...sale, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(sale.name == "" || sale.price == "" || sale.img == "")
    {
     return alert("Please all Fields!");
    }
    dipatch(allActions.addNewItem({name:sale.name, price:sale.price, img:sale.img}));
    setSale({ name: "", price: "", img: "" });
  };

  return (
    <div className="head_wrap">
      <h3>Welcome & Put Your Items on Sale Here</h3>
      <div className="addnew_wrap">
        <form onSubmit={handleSubmit}>
          <label className="itemname_label">Name:</label>
          <input
            type="text"
             name='name'
            value={sale.name}
            onChange={handleChange}
            placeholder="e.g CD-Rack"
            className="nameinput"
          />
          <br />
          <label className="price_label">Price:</label>
          <input
             name='price'
            value={sale.price}
            onChange={handleChange}
            type="number"
            className="priceinput"
          />
          <br />
          <label>Image:</label>
          <input
             name='img'
            value={sale.img}
            onChange={handleChange}
            type="text"
            placeholder="http://image.png"
            className="imginput"
          />
          <div>
              <button type="submit" className="confirmbtn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNew;
