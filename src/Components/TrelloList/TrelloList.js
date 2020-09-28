import React from "react";
// import Styles from './Trello.modules.css'
import { ListContainer } from "./TrelloList.styles";
import TrelloCard from "../TrelloCard/TrelloCard";
import TrelloFormButton from "../TrelloFormButton/TrelloFormButton";
import { Droppable } from "react-beautiful-dnd";

const TrelloLists = ({
  title,
  cardList,
  onTextAreaChange,
  id,
  handleAddCard,
}) => {
  return (
    <Droppable droppableId={String(id)}>
      {(provided) => (
        <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
          <h4>{title}</h4>
          {cardList.map((card, index) => {
            return (
              <TrelloCard
                key={card.id}
                text={card.text}
                id={card.id}
                index={index}
              />
            );
          })}
          <TrelloFormButton
            onTextAreaChange={onTextAreaChange}
            id={id}
            handleAddCard={handleAddCard}
          />
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
};

export default TrelloLists;
