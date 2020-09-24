import React from "react";
import "./App.css";

import TrelloLists from "../Components/TrelloList/TrelloList";
import TrelloFormButton from "../Components/TrelloFormButton/TrelloFormButton";

class App extends React.Component {
  state = {
    listId: 3,
    cardId: 4,
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
            id: 0,
            text: "We created a static list & static card",
          },
          {
            id: 1,
            text: "We created the second card",
          },
          {
            id: 2,
            text: "We created a static list & static card",
          },
          {
            id: 3,
            text: "We created the second card",
          },
        ],
      },
      {
        title: "Done",
        id: 2,
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
    ],
  };

  onTextAreaChange = (e) => {
    const target = e.target.value;
    console.log("tar", target);
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
        id: listId + 1,
      });
    } else {
      return;
    }
  };

  handleAddCard = () => {
    const { text, cardId, cardList, listId } = this.state;
    const newCard = {
      id: cardId,
      text: text,
    };

    const updatedCard = cardList.map((cardList) => {
      if (cardList.id === listId) {
        return [...cardList.cards, newCard];
      }
      console.log("ud", updatedCard);
      this.setState({
        cards: updatedCard,
        text: "",
        id: cardId + 1,
      });
    });
  };
  render() {
    console.log("text", this.state.text);
    return (
      <div className="App">
        <h2>Trello Board</h2>
        <div className="cardList">
          {this.state.cardList.map(({ id, title, cards }) => {
            return (
              <TrelloLists
                key={id}
                title={title}
                cardList={cards}
                onTextAreaChange={this.onTextAreaChange}
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
        </div>
      </div>
    );
  }
}

export default App;
