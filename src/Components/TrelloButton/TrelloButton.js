import React, { Component } from "react";
import { Icon } from "@material-ui/core";

import styles from "./TrelloButton.module.css";

class TrelloButton extends Component {
  // here we conditionally rendering the AddButton
  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? ` Add another list` : `Add another card`;
    return (
      <div
        className={`${styles.buttonContainer}
          {list ? styles.list : styles.cardList}`}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };
  render() {
    return <div>{this.renderAddButton()}</div>;
  }
}

export default TrelloButton;
