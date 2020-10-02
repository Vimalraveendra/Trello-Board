import React, { useState } from "react";
// import Styles from './TrelloCard.modules.css'
import { CardContainer, CardTitle, CardIcon, Card } from "./TrelloCard.styles";

// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Draggable } from "react-beautiful-dnd";
// import { Icon } from "@material-ui/core";

import TrelloForm from "../TrelloForm/TrelloForm";

const TrelloCard = ({ text, id, index }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [cardText, setCardText] = useState(text);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const onTextAreaChange = (e) => {
    setCardText(e.target.value);
  };
  const closeForm = () => {
    setIsEdit(!isEdit);
  };

  const renderEditForm = () => {
    return (
      <TrelloForm
        text={cardText}
        onChange={onTextAreaChange}
        closeForm={closeForm}
      />
    );
  };
  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {(provided) => (
          <CardContainer
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Card>
              <CardTitle>
                <Typography>{text}</Typography>
                <CardIcon style={{ fontSize: 20 }} onClick={handleEdit}>
                  edit
                </CardIcon>
              </CardTitle>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    );
  };

  return isEdit ? renderEditForm() : renderCard();
};

export default TrelloCard;
