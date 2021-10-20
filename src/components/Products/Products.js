import React from "react";
import styles from "./Products.module.css";
import { useSelector } from "react-redux";
import Product from "./Product/Product";

const Products = () => {
  const shop = useSelector((state) => state.shop.products);
  return (
    <div className={styles.products}>
      {shop.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
