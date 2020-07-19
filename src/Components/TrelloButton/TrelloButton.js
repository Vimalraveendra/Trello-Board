import React from "react";
import styles from "./TrelloButton.module.css";

import { Icon } from "@material-ui/core";

const TrelloButton = ({ list, onClickOpenForm }) => {
  // here we conditionally rendering the AddButton
  const buttonText = list ? ` Add another list` : `Add another card`;
  return (
    <div
      onClick={onClickOpenForm}
      className={`${styles.buttonContainer}
      {list ? styles.list : styles.cardList}`}
    >
      <Icon>add</Icon>
      <p>{buttonText}</p>
    </div>
  );
};

export default TrelloButton;
