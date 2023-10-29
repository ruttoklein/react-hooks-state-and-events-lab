import React from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);
  
  const toggleCart = () => {
    setInCart(!inCart);
  };
  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
        {/* Step 3: Conditionally set the button text based on inCart state */}
        <button className="add" onClick={toggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
      
    </li>
  );
}

export default Item;
