import React from "react";

import Card from "@material-ui/core/Card";
// import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
// import TextareaAutosize from "react-textarea-autosize";

// import styles from "./TrelloForm.module.css";
import {
  CardTextArea,
  ButtonGroup,
  ButtonAdd,
  ButtonClose,
} from "./TrelloForm.styles";

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
  const buttonAddTitle = list ? `Add List` : `Add Card`;
  console.log("test", text);

  return (
    <div>
      <Card>
        <CardTextArea
          placeholder={placeholder}
          autoFocus
          onBlur={closeForm}
          value={text}
          onChange={onTextAreaChange}
        />
      </Card>
      <ButtonGroup>
        <ButtonAdd
          variant="contained"
          onMouseDown={list ? () => handleAddList() : () => handleAddCard(id)}
        >
          {buttonAddTitle}
        </ButtonAdd>
        <ButtonClose
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          close
        </ButtonClose>
      </ButtonGroup>
    </div>
  );
};

export default TrelloForm;
