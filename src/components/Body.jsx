import React, { useState } from "react";
import Charts from "./charts/AllCharts";
import { MdOutlineShoppingCart } from "react-icons/md";
import product1 from "../images/image-product-1.jpg";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";




const Body = ({cost,img,caption,check,notication, count, setCount}) => {
  
  const [sliderNumber, setSliderNumber] = useState(0);

  const handleOpenModal = (index) => {
    setSliderNumber(index);
    
  };
  function AddToCart() {
    cost(120)
    img("image-product-1-thumbnail.jpg")
    caption("Fall Limited Editions Sneakers")
    check("Checkout")
    notication(true)
    setCount(count + 1)
  }

  const shoes = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];

 
  function addChart() {
    setCount(count + 1);
  }
  function removeChart() {
    setCount(count - 1);
  }
  return (
    <div className="products">
      <div className="preproducts">
        <div className="productscontents">
          <div>
            <img className="mainImage" src={shoes[sliderNumber]} alt="charts" />
          </div>
          <div className="thumbs">
            {shoes.map((shoes, index) => (
              <div onClick={() => handleOpenModal(index)}>
                <img
                  src={shoes}
                  key={index}
                  alt="gallery"
                  className="thumb-Nails"
                />
              </div>
            ))}
          </div>
        </div>
        <section>
          <p>SNEAKER COMPANY</p>
          <h1>Fall Limited Editions Sneakers</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            animi inventore amet consequatur minus in quisquam nostrum eum?
            Maxime, iste.
          </h4>
          <div className="selects">
            <h2>$120</h2>
            <div className="discount">50%</div>
          </div>
          <s>$270.55</s>
          <div className="preadd">
            <div className="addtochart">
              <h5 onClick={removeChart}>-</h5>
              <span>{count}</span>
              <h5 onClick={addChart}>+</h5>
            </div>
            <button  onClick={AddToCart}>
              {" "}
              <MdOutlineShoppingCart />
              Add To Chart
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Body;
//   {
//   id:0,
//   image:"image-product-1.jpg",
//   title: "Shoe-Alone",
//   price: "$120"
// },
// {
//   id:1,
//   image:"image-product-2.jpg",
//   title: "Shoe-Alone",
//   price: "$125"
// },
// {
//   id:2,
//   image:"image-product-3.jpg",
//   title: "Shoe-Alone",
//   price: "$130"
// },
// {
//   id:3,
//   image:"image-product-4.jpg",
//   title: "Shoe-Alone",
//   price: "$150"
// },
 //   const [current, setCurrent] = useState(0);
  //   const lenght = slides.lenght;

  //   const nextSlider = () => {
  //     setCurrent(current === length - 1 ? 0 : current + 1);
  //   };
  //   const prevSlider = () => {
  //     setCurrent(current === 0 ? lenght - 1 : current - 1);
  //   };
  //   if (!Array.isArray(slider) || slider.lenght <= 0) {
  //     return null;
  //   }