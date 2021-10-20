import React, { useState } from "react";
import styles from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  adjustItemQty,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState(product.qty);
  const handleChangeQty = (e) => {
    setInput(e.target.value);
    dispatch(adjustItemQty(product.id, e.target.value));
  };
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={product.image}
        alt={product.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>$ {product.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            onChange={handleChangeQty}
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
          />
        </div>
        <button
          onClick={() => dispatch(removeFromCart(product.id))}
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
