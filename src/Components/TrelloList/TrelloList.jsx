import React from "react";
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

class TrelloLists extends React.Component {
  state = {
    isEdit: false,
  };
  // textInput = React.createRef();
  changeEditMode = (e) => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  renderEditView = () => {
    return (
      <ListEdit>
        <input
          type="text"
          value={this.props.title}
          // ref={this.textInput}
          onChange={this.props.focusTextInput}
        />
        <Icon onClick={this.changeEditMode}>close</Icon>
        <Icon onClick={() => this.props.updateListTitle()}>add</Icon>
      </ListEdit>
    );
  };
  render() {
    const {
      title,
      cardList,
      onTextAreaChange,
      id,
      handleAddCard,
      handleDeleteList,
      // handleEditList,
      // index,
    } = this.props;

    return (
      <Droppable droppableId={String(id)}>
        {(provided) => (
          <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
            <ListTitle>
              {this.state.isEdit ? (
                this.renderEditView()
              ) : (
                <h4 onClick={() => this.changeEditMode(title)}>{title}</h4>
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
  }
}

export default TrelloLists;
