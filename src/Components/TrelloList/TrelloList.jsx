import React, { useState } from "react";
// import Styles from './Trello.modules.css'
import {
  ListContainer,
  ListTitle,
  ListIcon,
  ListEdit,
} from "./TrelloList.styles";
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
  // handleEditList,
  // index,
  // changeEditMode,
  updateListTitle,
  // isEdit,
  // handleFocus,
}) => {
  // textInput = React.createRef();
  // const textInput = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const handleChange = (e) => {
    const value = e.target.value;
    setListTitle(value);
  };

  const changeEditMode = () => {
    setIsEdit(!isEdit);
  };

  const handleFocus = (e) => {
    e.target.focus();
  };

  const renderEditView = (id) => {
    return (
      <ListEdit>
        <input
          type="text"
          value={listTitle}
          // ref={textInput}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
        />

        <Icon
          onClick={() => updateListTitle(listTitle, id)}
          style={{ color: "green" }}
        >
          check
        </Icon>
        <Icon onClick={changeEditMode} color="secondary">
          close
        </Icon>
      </ListEdit>
    );
  };

  return (
    <Droppable droppableId={String(id)}>
      {(provided) => (
        <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
          <ListTitle>
            {isEdit ? (
              renderEditView(id)
            ) : (
              <h4 onClick={changeEditMode}>{title}</h4>
            )}

            <ListIcon>
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
