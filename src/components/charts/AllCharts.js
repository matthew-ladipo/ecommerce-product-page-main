import { useState } from "react";
const Charts = ({ cost, image, cap,check,count,showcart }) => {

  function cheCkout () {
    showcart(false)
  }
  return (
    <>
      <div className="charts">
        <p>carts</p>
        <div className="selected">
          <img src={image} alt="cart" />
          <div className="priceTags">
            <h3>{cap}</h3>
            <p>${cost*count}</p>
          </div>
        </div>
        <div className="checkout">
        <p onClick={cheCkout}>{check}</p>
      </div>
      </div>
    </>
  );
};

export default Charts;
