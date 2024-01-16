import Body from "./Body";
import Header from "./Header";
import react, { useState } from "react";

const Main = () => {
  const [showCart, setShowCart] = useState(false);
  const [count, setCount] = useState(0);

  
 
  const [cost, setCost] = useState("");
  const [image, setimage] = useState("");
  const [caption, setCaption] = useState("");
  const [check, setCheckOut] = useState("");
  const [notification, setnotification] = useState(false);

  return (
    <>
      <div className="main">
        <Header
          cost={cost}
          image={image}
          cap={caption}
          check={check}
          count={count}
          note={notification}
        />
      </div>
      <Body
        showCart={showCart}
        setShowCart={setShowCart}
        cost={setCost}
        img={setimage}
        caption={setCaption}
        check={setCheckOut}
        notication={setnotification}
        count={count}
        setCount={setCount}
      />
    </>
  );
};

export default Main;
