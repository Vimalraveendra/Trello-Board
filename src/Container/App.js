import React from "react";
import "./App.css";

import TrelloLists from "../Components/TrelloList/TrelloList";

class App extends React.Component {
  state = {
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
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Trello Board</h2>
          <TrelloLists title={"Trello List"} cardList={this.state.cards} />
        </header>
      </div>
    );
  }
}

export default App;
