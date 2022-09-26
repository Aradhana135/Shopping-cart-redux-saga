import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
import { removeFromCart, adjustQty } from "../../../redux/shopping/action";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
  CloseButton,
  Button
} from "@chakra-ui/react";
const CartItem = ({ item }) => {
  const [qtyvalue, setQtyValue] = useState(item.qty);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
    
    console.log("id", id);
  };
  const handleQty = (e) => {
    console.log(e);
    setQtyValue(e.target.value);
    dispatch(adjustQty(item.id, e.target.value));
  };

  const handleIncrementClick = (e) => {
    e.preventDefault();
    dispatch(adjustQty(item.id, item.qty + 1));
  };

  const handleDecrementClick = (e) => {
    e.preventDefault();
    dispatch(adjustQty(item.id, item.qty - 1));
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__price}> ₹ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <NumberInput defaultValue={item.qty}>
            <NumberInputField
              className={styles.cartItem__qty}
              id="qty"
              name="qty"
              value={item.qty}
              onChange={handleQty}
            />
            <NumberInputStepper>
              <NumberIncrementStepper onClick={handleIncrementClick} />
              <NumberDecrementStepper onClick={handleDecrementClick} />
            </NumberInputStepper>
          </NumberInput>
        </div>
        <Popover>
  <PopoverTrigger>
  <button
          className={styles.actions__deleteItemBtn}
         
        >
          {/* <i class="fas fa-trash-alt fa-3x"> */}{" "}
          <DeleteIcon className={styles.delete_btn} /> {/* </i> */}
        </button>
  </PopoverTrigger>
  <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Remove Item </PopoverHeader>
          <PopoverBody>
            Are you sure you want to remove this item from cart ?
            <PopoverFooter className={styles.delete_popup}>
            {/* <PopoverCloseButton > Cancel  </PopoverCloseButton > */}
           
            <Button  onClick={() => handleDelete(item.id)}> Remove  </Button>
            </PopoverFooter>
          </PopoverBody>
        </PopoverContent>
      </Popover>
        
      </div>
    </div>
  );
};

export default CartItem;
