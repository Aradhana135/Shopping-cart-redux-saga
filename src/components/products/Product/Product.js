import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useToast,ChakraProvider } from "@chakra-ui/react";
import { addToCart, loadCurrentItem } from "../../../redux/shopping/action";

const Product = ({ productData }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.api.apiData);
  const handleAddToCart = (id) => {
    dispatch(addToCart({ id: id, allProducts: allProducts }));
    toast({
      title: "Data added to cart",
      description: "",
      status: "success",
      position: "top-right",
      duration: 1000,
      isClosable: true,
    });
  };
  const handleCurrentItem = (prodData) => {
    dispatch(loadCurrentItem(prodData));
  };
  return (
    <ChakraProvider>
    <div className={styles.product}>
      <div className={styles.product__image_div}>
        <img className={styles.product__image} src={productData.image} alt="" />
      </div>

      <div className={styles.product__details}>
        <p className={styles.details__title}>{productData.title}</p>
        <p className={styles.details__desc}>{productData.description}</p>
        <p className={styles.details__price}> ₹{productData.price}</p>
      </div>
      <div className={styles.product__buttons}>
        <NavLink to={`/product/${productData.id}`}>
          <button
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
            onClick={(e) => {
              handleCurrentItem(productData);
            }}
          >
            View Item
          </button>
        </NavLink>
        <NavLink>
          <button
            className={`${styles.buttons__btn} ${styles.buttons__add}`}
            onClick={() => handleAddToCart(productData.id)}
          >
            Add To Cart
          </button>
        </NavLink>
      </div>
    </div>
    </ChakraProvider>
  );
};

export default Product;
