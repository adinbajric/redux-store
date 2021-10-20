import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.shop.cart);
  const [price, setPrice] = useState(0);
  const [numItems, setNumItems] = useState(0);

  useEffect(() => {
    let item = 0;
    let price = 0;

    cart.forEach((e) => {
      item += e.qty;
      price += e.qty * e.price;
    });

    setPrice(price);
    setNumItems(item);
  }, [cart, price, numItems]);
  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: {numItems} items</span>
          <span>$ {price}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
