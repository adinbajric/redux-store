import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.shop.cart);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let num = 0;
    cart.map((item) => (num += item.qty));
    setCounter(num);
  }, [cart]);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{counter}</div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
