import React, { Component } from "react";

import TrelloButton from "../TrelloButton/TrelloButton";
import TrelloForm from "../TrelloForm/TrelloForm";

class TrelloFormButton extends Component {
  state = {
    formOpen: false,
    text: "",
  };

  onClickOpenForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = () => {
    this.setState({ formOpen: false });
  };

  onTextAreaChange = (e) => {
    const target = e.target.value;
    console.log("tar", target);
    this.setState({ text: target });
  };

  render() {
    return this.state.formOpen ? (
      <TrelloForm
        list={this.props.list}
        text={this.state.text}
        closeForm={this.closeForm}
        onTextAreaChange={this.onTextAreaChange}
      />
    ) : (
      <TrelloButton
        list={this.props.list}
        onClickOpenForm={this.onClickOpenForm}
      />
    );
  }
}

export default TrelloFormButton;
