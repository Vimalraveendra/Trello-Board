import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";
import Button from "@material-ui/core/Button";

export const CardTextArea = styled(TextareaAutosize)`
  resize: none;
  width: 272px;
  overflow: hidden;
  outline: none;
  border: none;
`;

export const ButtonGroup = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const ButtonAdd = styled(Button)`
  color: white !important;
  background: green !important;
`;
export const ButtonClose = styled(Button)`
  margin-left: 10px !important;
`;
