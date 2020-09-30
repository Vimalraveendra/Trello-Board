import React from "react";
// import Styles from './Trello.modules.css'
import { ListContainer, ListTitle, ListIcon } from "./TrelloList.styles";
import TrelloCard from "../TrelloCard/TrelloCard";
import TrelloFormButton from "../TrelloFormButton/TrelloFormButton";
import { Droppable } from "react-beautiful-dnd";
import { Icon } from "@material-ui/core";

const TrelloLists = ({
  title,
  cardList,
  onTextAreaChange,
  id,
  handleAddCard,
  handleDeleteList,
  index,
}) => {
  return (
    <Droppable droppableId={String(id)}>
      {(provided) => (
        <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
          <ListTitle>
            <h4>{title}</h4>
            <ListIcon>
              <Icon>edit</Icon>
              <Icon onClick={() => handleDeleteList(id)}>close</Icon>
            </ListIcon>
          </ListTitle>
          {cardList.map(({ id, text }, index) => {
            return <TrelloCard key={id} text={text} id={id} index={index} />;
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
