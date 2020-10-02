import React from "react";
// import Styles from './TrelloCard.modules.css'
import { CardContainer, CardTitle, CardIcon, Card } from "./TrelloCard.styles";

// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Draggable } from "react-beautiful-dnd";
// import { Icon } from "@material-ui/core";

const TrelloCard = ({ text, id, index }) => {
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
              <CardIcon style={{ fontsize: 15 }}>edit</CardIcon>
            </CardTitle>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default TrelloCard;
