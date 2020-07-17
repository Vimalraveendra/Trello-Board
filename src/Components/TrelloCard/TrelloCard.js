import React from "react";
import styles from "./TrelloCard.module.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";



const TrelloCard = ({ text }) => {
  return (
    <Card className={styles.cardContainer}>
      <CardContent>
        <Typography>{text}</Typography>
      </CardContent>
    </Card>
  );
};

export default TrelloCard;
