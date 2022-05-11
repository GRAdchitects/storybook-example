import React from "react";
import styles from "./Buttons.module.scss";
const Button = ({ primary, onClick = () => console.log("ad") }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      test {primary && "primary button"}
    </button>
  );
};

export default Button;
