import cardListActionTypes from "./CardList.types";

export const handleAddList = ({ text, listId }) => ({
  type: cardListActionTypes.HANDLE_ADD_LIST,
  payload: { text, listId },
});

export const handleDeleteList = (id) => ({
  type: cardListActionTypes.HANDLE_DELETE_LIST,
  payload: id,
});

export const handleListTitle = ({ listTitle, id }) => ({
  type: cardListActionTypes.HANDLE_UPDATE_LIST_TITLE,
  payload: { listTitle, id },
});
