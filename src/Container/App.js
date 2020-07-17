import React from "react";
import "./App.css";

import TrelloLists from "../Components/TrelloList/TrelloList";

class App extends React.Component {
  state = {
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Trello Board</h2>
          <div className="cardList">
            {this.state.cardList.map(({ id, title, cards }) => {
              return <TrelloLists key={id} title={title} cardList={cards} />;
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
