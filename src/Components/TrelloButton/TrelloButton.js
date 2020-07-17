import React, { Component } from "react";
import { Icon } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import TextareaAutosize from "react-textarea-autosize";

import styles from "./TrelloButton.module.css";

class TrelloButton extends Component {
  state = {
    formOpen: false,
    text: "",
  };

  onClickOpenForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = () => {
    this.setState({ formOpen: false });
  };

  onTextAreaChange = (e) => {
    const target = e.target.value;
    console.log("tar", target);
    this.setState({ text: target });
  };
  // here we conditionally rendering the AddButton
  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? ` Add another list` : `Add another card`;
    return (
      <div
        onClick={this.onClickOpenForm}
        className={`${styles.buttonContainer}
          {list ? styles.list : styles.cardList}`}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    );
  };

  renderForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? `Enter list title...`
      : `Enter a title for this card`;
    const buttonTitle = list ? `Add List` : `Add Card`;
    return (
      <div>
        <Card className={styles.cardContainer}>
          <TextareaAutosize
            className={styles.textArea}
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.onTextAreaChange}
          />
        </Card>
        <div className={styles.buttonGroup}>
          <Button variant="contained" className={styles.buttonAdd}>
            {buttonTitle}
          </Button>
          <Button
            variant="contained"
            className={styles.buttonClose}
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            close
          </Button>
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

export default TrelloButton;
