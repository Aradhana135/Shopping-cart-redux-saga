import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";

import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartData = useSelector((state) => state.shop.products);
  const [totalQty, settotalQty] = useState(0);
  const [totalPrice, settotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    let price = 0;
    if (cartData) {
      cartData.forEach((ele) => {
        total = Math.round(ele.qty + total);

        price = Math.round(ele.price * ele.qty + price);
      });
      settotalPrice(price);
      settotalQty(total);
    }
  }, [cartData]);

  return cartData.length !== 0 ? (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cartData.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalQty} items)</span>
          <p className={styles.summary__total__price}> ₹ {totalPrice}</p>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  ) : (
    <div className={styles.cart__empty}><h1  >Cart is Empty</h1></div>
  );
};

export default Cart;
