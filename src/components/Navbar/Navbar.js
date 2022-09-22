import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";

import { useState, useEffect } from "react";

const Navbar = () => {
  const cartData = useSelector((state) => state.shop.products);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let value = 0;

    if (cartData) {
      cartData.forEach((elm) => {
        value += elm.qty;
        console.log("value:", value);
      });
    }
    setCounter(value);
  }, [cartData]);
  return (
    <div className={styles.navbar}>
      <NavLink to="/">
        <h2 className={styles.navbar__logo}> Ecart </h2>
      </NavLink>
      <NavLink to="/cart">
        <div className={styles.navbar__cart}>
          {/* <h3 className={styles.cart__title}>Cart</h3> */}
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.GGkHOaPknQlAlAup3ykoFQHaHa&pid=Api&P=0"
            className={styles.Cart_img}
            alt="Paris"
          ></img>
          <i></i>
          <div className={styles.cart__counter}>{counter}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
