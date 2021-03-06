import React, { Component } from "react";

import TrelloButton from "../TrelloButton/TrelloButton";
import TrelloForm from "../TrelloForm/TrelloForm";

class TrelloFormButton extends Component {
  state = {
    formOpen: false,
  };

  onClickOpenForm = () => {
    this.setState({ formOpen: true });
  };

  closeForm = () => {
    this.setState({ formOpen: false });
  };
  //  onmousedown event occurs before the onblur event
  // if we use the onClick event instead of onmousedown,
  // the onblur events happens before onclick so we are
  // not able to add the title to the list

  // onTextAreaChange = (e) => {
  //   const target = e.target.value;
  //   console.log("tar", target);
  //   this.setState({ text: target });
  // };

  render() {
    const {
      text,
      list,
      id,
      handleAddCard,
      handleAddList,
      onTextAreaChange,
    } = this.props;

    return this.state.formOpen ? (
      <TrelloForm
        list={list}
        text={text}
        id={id}
        closeForm={this.closeForm}
        onTextAreaChange={onTextAreaChange}
        handleAddList={handleAddList}
        handleAddCard={handleAddCard}
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
