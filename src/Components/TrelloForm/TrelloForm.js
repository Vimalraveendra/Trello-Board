import React from "react";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import TextareaAutosize from "react-textarea-autosize";

import styles from "./TrelloForm.module.css";

const TrelloForm = ({
  list,
  closeForm,
  text,
  onTextAreaChange,
  handleAddList,
  handleAddCard,
  id,
}) => {
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
          onBlur={closeForm}
          value={text}
          onChange={onTextAreaChange}
        />
      </Card>
      <div className={styles.buttonGroup}>
        <Button
          variant="contained"
          className={styles.buttonAdd}
          onMouseDown={list ? handleAddList : () => handleAddCard(id)}
        >
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

export default TrelloForm;
