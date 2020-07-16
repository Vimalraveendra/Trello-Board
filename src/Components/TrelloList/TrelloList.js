import React from "react";
import styles from "./TrelloList.module.css";
import TrelloCard from "../TrelloCard/TrelloCard";
import TrelloButton from "../TrelloButton/TrelloButton";

const TrelloLists = ({ title, cardList }) => {
  console.log("card", cardList);
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      {cardList.map(({ id, text }) => {
        return <TrelloCard key={id} text={text} />;
      })}
      <TrelloButton />
    </div>
  );
};

export default TrelloLists;
