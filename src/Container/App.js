import React from "react";
import "./App.css";

import TrelloLists from "../Components/TrelloList/TrelloList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Trello Board</h2>
        <TrelloLists title={"Trello List"} />
      </header>
    </div>
  );
}

export default App;
