import { MdOutlineShoppingCart } from "react-icons/md";
import img from "../images/image-avatar.png";
import Charts from "./charts/AllCharts";
import { useState } from "react";

const Header = ({ cost, image, cap, check, note, count  }) => {
  const [show, setShowChart] = useState(false);
  function popCart() {
    setShowChart((prev) => !prev);
  }
  const topics = ["colection", "Men", "Women", "Contact", "About"];

  return (
    <>
      <div className="presneakers">
        <h1>Sneakers</h1>
        <div className="sneakers">
          <div className="paragraphBF">
            {topics.map((items) => (
              <p className="Fparagraph">{items}</p>
            ))}
          </div>
        </div>
        <div className="left">
          <p
            onClick={popCart}
            className=""
            // style={{ backgroundColor: show === true ? " #e09335" : "#fff" }}
          >
            <MdOutlineShoppingCart />
            {note && <span>{count}</span>}
          </p>
          <img src={img} alt="image-avatar" />
        </div>
      </div>
      {show && <Charts cost={cost} image={image} cap={cap} check={check} count={count} showcart={setShowChart} />}
    </>
  );
};

export default Header;
