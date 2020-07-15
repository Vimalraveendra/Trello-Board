import React from "react";
import styles from "./TrelloList.module.css";

const TrelloLists = ({ title }) => {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
    </div>
  );
};

export default TrelloLists;
