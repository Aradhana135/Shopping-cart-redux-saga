import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";

import { useState, useEffect, useRef } from "react";
import { Button, Input } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import Cart from "../Cart/Cart";
const Navbar = () => {
  const cartData = useSelector((state) => state.shop.products);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

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
    <>
      <div className={styles.navbar}>
        <NavLink to="/">
          <h2 className={styles.navbar__logo}>
            <u>E-Cart</u>{" "}
          </h2>
        </NavLink>
        <button ref={btnRef} colorScheme="teal" onClick={onOpen} classNam={styles.navbar__cart_btn}>
          <div className={styles.navbar__cart}>
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.GGkHOaPknQlAlAup3ykoFQHaHa&pid=Api&P=0"
              className={styles.Cart_img}
              alt="Paris"
            ></img>
            <i></i>
            <div className={styles.cart__counter}>{counter}</div>
          </div>
        </button>
        <Drawer
          className={styles.Drawer_main}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="lg"
        >
          <DrawerOverlay />
          <DrawerContent overflow="scroll">
            <DrawerCloseButton />
            <Cart />
            <DrawerFooter></DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
