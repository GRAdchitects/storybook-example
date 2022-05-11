import React from "react";
import styles from "./Title.module.scss";
const title = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default title;
