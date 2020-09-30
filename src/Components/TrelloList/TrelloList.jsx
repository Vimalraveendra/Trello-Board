import React, { useRef } from "react";
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
  changeEditMode,
  updateListTitle,
  isEdit,
}) => {
  // textInput = React.createRef();
  const textInput = useRef(null);

  const renderEditView = (id) => {
    return (
      <ListEdit>
        <input
          type="text"
          defaultValue={title}
          ref={textInput}
          // onChange={this.props.focusTextInput}
        />

        <Icon
          onClick={() => updateListTitle(textInput, id)}
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
