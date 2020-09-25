import React from "react";
import styles from "./TrelloCard.module.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Draggable } from "react-beautiful-dnd";

const TrelloCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Card className={styles.cardContainer}>
            <CardContent>
              <Typography>{text}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
