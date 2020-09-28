import React from "react";
import "./App.styles.jsx";

import TrelloLists from "../Components/TrelloList/TrelloList";
import TrelloFormButton from "../Components/TrelloFormButton/TrelloFormButton";
import { DragDropContext } from "react-beautiful-dnd";
import { CardList } from "./App.styles";

class App extends React.Component {
  state = {
    listId: 3,
    cardId: 8,
    text: "",
    cardList: [
      {
        title: "To Do List ",
        id: 0,
        cards: [
          {
            id: 0,
            text: "We created a static list & static card",
          },
          {
            id: 1,
            text: "We created the second card",
          },
        ],
      },
      {
        title: "Doing",
        id: 1,
        cards: [
          {
            id: 2,
            text: "We created a static list & static card",
          },
          {
            id: 3,
            text: "We created the second card",
          },
          {
            id: 4,
            text: "We created a static list & static card",
          },
          {
            id: 5,
            text: "We created the second card",
          },
        ],
      },
      {
        title: "Done",
        id: 2,
        cards: [
          {
            id: 6,
            text: "We created a static list & static card",
          },
          {
            id: 7,
            text: "We created the second card",
          },
        ],
      },
    ],
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

  reorder = () => {};

  onDragEnd = (result) => {
    const { destination, source } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    // dropped inside the same list
    if (destination.droppableId === source.droppableId) {
      const newState = [...this.state.cardList];
      const list = newState.find(
        (list) => source.droppableId === list.id.toString()
      );
      // removing the item from the list
      const card = list.cards.splice(source.index, 1);
      // inserting the item into the proper position of list
      list.cards.splice(destination.index, 0, ...card);
    }
  };
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h2>Trello Board</h2>
          <CardList>
            {this.state.cardList.map(({ id, title, cards }) => {
              return (
                <TrelloLists
                  key={id}
                  title={title}
                  id={id}
                  cardList={cards}
                  onTextAreaChange={this.onTextAreaChange}
                  handleAddCard={this.handleAddCard}
                />
              );
            })}
            <TrelloFormButton
              list
              handleAddList={this.handleAddList}
              text={this.state.text}
              onTextAreaChange={this.onTextAreaChange}
              handleAddCard={this.handleAddCard}
            />
          </CardList>
        </div>
      </DragDropContext>
    );
  }
}

export default App;
