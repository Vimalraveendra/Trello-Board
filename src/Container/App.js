import React from "react";

import { DragDropContext } from "react-beautiful-dnd";

import MainList from "../Components/MainList/MainList";
import Data from "../Data/Data";

class App extends React.Component {
  state = {
    listId: 3,
    cardId: 8,
    text: "",
    isEdit: false,
    cardList: Data,
    value: "",
  };

  onTextAreaChange = (e) => {
    const target = e.target.value;

    this.setState({ text: target });
  };
  handleAddList = () => {
    const { text, listId } = this.state;

    if (text) {
      const newList = {
        title: text,
        cards: [],
        id: listId,
      };

      const updatedItems = [...this.state.cardList, newList];
      this.setState({
        cardList: updatedItems,
        text: "",
        listId: listId + 1,
      });
    } else {
      return;
    }
  };

  handleAddCard = (id) => {
    const { text, cardId, cardList } = this.state;
    if (text) {
      const newCard = {
        id: cardId,
        text: text,
      };

      const updatedCard = cardList.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            cards: [...card.cards, newCard],
          };
        } else {
          return card;
        }
      });

      this.setState({
        cardList: updatedCard,
        text: "",
        cardId: cardId + 1,
      });
    } else {
      return;
    }
  };

  handleDeleteList = (id) => {
    const newState = [...this.state.cardList];
    const updatedList = newState.filter((list) => list.id !== id);

    this.setState({ cardList: updatedList });
  };

  updateListTitle = (listTitle, id) => {
    const newState = [...this.state.cardList];
    // const list = newState[id];

    // list.title = listTitle;

    const updatedTitle = newState.map((item) =>
      item.id === id
        ? (item = { title: listTitle, id: id, cards: item.cards })
        : item
    );
    // const updatedTitle = { ...newState, [id]: list };
    // return updatedTitle;

    this.setState({
      isEdit: false,
      cardList: updatedTitle,
    });
  };

  changeEditMode = (e) => {
    console.log(e.target);

    this.setState({ isEdit: !this.state.isEdit });
  };

  handleFocus = (textInput) => {
    console.log("e", textInput);
    textInput.current.focus();
  };

  onDragEnd = (result) => {
    const { destination, source } = result;
    const newState = [...this.state.cardList];

    // dropped outside the list
    if (!destination) {
      return;
    }

    //  dragging list around
    if (source.droppableId === "all-lists") {
      const list = newState.splice(source.index, 1);
      newState.splice(destination.index, 0, ...list);
      this.setState({ cardList: newState });
    }
    // card dropped inside the same list
    if (source.droppableId === destination.droppableId) {
      const list = newState.find(
        (list) => source.droppableId === list.id.toString()
      );

      if (list !== undefined) {
        // removing the card from the cardList
        const card = list.cards.splice(source.index, 1);
        // inserting the card into the proper position of cardList
        list.cards.splice(destination.index, 0, ...card);
      }
    }
    // card dropped inside other list
    if (destination.droppableId !== source.droppableId) {
      // find the list where drag happened
      const listStart = newState.find(
        (list) => source.droppableId === list.id.toString()
      );
      // pull out the card from the list
      const card = listStart.cards.splice(source.index, 1);
      // find the list where drag ended.
      const listEnd = newState.find(
        (list) => destination.droppableId === list.id.toString()
      );
      //  insert the card into that list
      listEnd.cards.splice(destination.index, 0, ...card);
    }
  };
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h2>Trello Board</h2>
          <MainList
            cardList={this.state.cardList}
            onTextAreaChange={this.onTextAreaChange}
            handleAddCard={this.handleAddCard}
            handleAddList={this.handleAddList}
            handleDeleteList={this.handleDeleteList}
            handleEditList={this.handleEditList}
            updateListTitle={this.updateListTitle}
            focusTextInput={this.focusTextInput}
            isEdit={this.state.isEdit}
            changeEditMode={this.changeEditMode}
            handleFocus={this.handleFocus}
          />
        </div>
      </DragDropContext>
    );
  }
}

export default App;
