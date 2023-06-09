import React, { useState } from "react";
import Order from "./Order";

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} />
      ))}
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Вы ещё не добавили товары для покупки</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <Header>
      <div>
        <span className="logo">Car sale</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Офис</li>
        </ul>
        {/* <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          classNames={`shop-cart-button ${cartOpen && "active"}`}
        /> */}

        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </Header>
  );
}
