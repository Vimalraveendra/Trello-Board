import React from "react";
import TrelloLists from "../TrelloList/TrelloList";
import TrelloFormButton from "../TrelloFormButton/TrelloFormButton";

import { CardList } from "./MainList.styles";

const MainList = ({
  cardList,
  text,
  onTextAreaChange,
  handleAddCard,
  handleAddList,
  handleDeleteList,
  handleEditList,
  updateListTitle,
  focusTextInput,
}) => {
  return (
    <CardList>
      {cardList.map(({ id, title, cards }, index) => {
        return (
          <TrelloLists
            key={id}
            title={title}
            id={id}
            cardList={cards}
            onTextAreaChange={onTextAreaChange}
            handleAddCard={handleAddCard}
            index={index}
            handleDeleteList={handleDeleteList}
            handleEditList={handleEditList}
            updateListTitle={updateListTitle}
            focusTextInput={focusTextInput}
          />
        );
      })}

      <TrelloFormButton
        list
        handleAddList={handleAddList}
        text={text}
        onTextAreaChange={onTextAreaChange}
        handleAddCard={handleAddCard}
      />
    </CardList>
  );
};

export default MainList;
