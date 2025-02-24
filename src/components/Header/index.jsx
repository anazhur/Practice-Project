import React from "react";
import logo from "../../media/logo.png";
import fav from "../../media/basket=heart empty.png";
import cart from "../../media/basket=empty.png";
import { Link } from "react-router-dom";
import s from "./index.module.css";
import { useSelector } from "react-redux";

export default function Header() {
  const cartState = useSelector(store => store.cart);
  const favoriteState = useSelector(store => store.favorites);


  const cartCount = cartState.reduce((acc, el) => acc + el.count, 0);
  const favoriteCount = favoriteState.length;

  return (
    <div className={s.header}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <Link to="/">Main Page</Link>
        <Link to='/categories'>Categories</Link>
        <Link to='/all_products'>All products</Link>
        <Link to="/all_sales">All sales</Link>
      </nav>
      <div>
        <Link to="/favorites">
          <img src={fav} alt="favorites" />
          {
            favoriteCount !== 0 && <span>{ favoriteCount }</span>
          }
        </Link>
        <Link to="/cart">
          <img src={cart} alt="cart" />
          {
            cartCount !== 0 && <span>{ cartCount }</span>
          }
        </Link>
      </div>
    </div>
  );
}
