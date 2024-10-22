import React from "react";
import styles from "./banner.module.css";

interface Props {
  text: string;
  start: Date;
  end: Date;
}

const DiscountBanner: React.FC<Props> = ({ text, start, end }) => {
  if (new Date() < start || new Date() > end) return null;

  return (
    <div className={styles.discountContainer}>
      <h3 className={styles.discount}>{text}</h3>
    </div>
  );
};

export default DiscountBanner;
