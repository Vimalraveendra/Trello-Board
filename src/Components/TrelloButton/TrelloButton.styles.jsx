import styled, { css } from "styled-components";

const ListStyle = css`
  color: #fff;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.13);
`;

const CardStyle = css`
  color: inherit;
  opacity: 0.5;
  background-color: inherit;
`;

const getCardStyles = (props) => {
  return props.list ? ListStyle : CardStyle;
};

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 10px;
  width: 250px;
  padding: 20px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.13);
  }
  ${getCardStyles}
`;
