import React from "react";
import styles from "./SingleItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.shop.currentItem);
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__description}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>

        <button
          onClick={() => dispatch(addToCart(item.id))}
          className={styles.details__addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
