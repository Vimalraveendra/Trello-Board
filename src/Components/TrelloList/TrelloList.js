import React from "react";
import styles from "./TrelloList.module.css";
import TrelloCard from "../TrelloCard/TrelloCard";
import TrelloForm from "../TrelloForm/TrelloForm";

const TrelloLists = ({ title, cardList }) => {
  console.log("card", cardList);
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      {cardList.map(({ id, text }) => {
        return <TrelloCard key={id} text={text} />;
      })}
      <TrelloForm />
    </div>
  );
};

export default TrelloLists;
