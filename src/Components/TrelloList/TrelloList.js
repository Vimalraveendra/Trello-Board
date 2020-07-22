import React from "react";
import styles from "./TrelloList.module.css";
import TrelloCard from "../TrelloCard/TrelloCard";
import TrelloFormButton from "../TrelloFormButton/TrelloFormButton";

const TrelloLists = ({ title, cardList }) => {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      {cardList.map(({ id, text }) => {
        return <TrelloCard key={id} text={text} />;
      })}
      <TrelloFormButton />
    </div>
  );
};

export default TrelloLists;
