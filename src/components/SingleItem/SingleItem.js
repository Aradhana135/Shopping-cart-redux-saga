import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SingleItem.module.css";
import { useNavigate } from "react-router-dom";
import { useToast, ChakraProvider } from "@chakra-ui/react";
import { addToCart } from "../../redux/shopping/action";
const SingleItem = () => {
  const navigate = useNavigate();
  const allProducts = useSelector((state) => state.api.apiData);
  const currentItem = useSelector((state) => state.shop.currentItem);
  const dispatch = useDispatch();
  const toast = useToast();
  const handleAddToCart = (id) => {
    dispatch(addToCart({ id: id, allProducts: allProducts }));
    console.log(id);
    toast({
      title: "Data added to cart",
      description: "",
      status: "success",
      position: "top-right",
      duration: 1000,
      isClosable: true,
    });
  };
  console.log(currentItem);
  return (
    <ChakraProvider>
      <div className={styles.singleItem}>
        <img
          className={styles.singleItem__image}
          src={currentItem.image}
          alt=""
        />
        <div className={styles.singleItem__details}>
          <p className={styles.details__title}>{currentItem.title}</p>
          <p className={styles.details__description}>
            {currentItem.description}
          </p>
          <p className={styles.details__price}> ₹ {currentItem.price}</p>

          <button
            className={`${styles.buttons__btn} ${styles.details__addBtn}`}
            onClick={() => navigate("/")}
          >
            Back
          </button>
          <button
            className={`${styles.buttons__btn} ${styles.details__addBtn}`}
            onClick={() => handleAddToCart(currentItem.id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
     </ChakraProvider>
  );
};

export default SingleItem;
