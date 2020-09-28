import styled from "styled-components";

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
   `;

  
  .list {
    color: #fff;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.13);
  }
  
  .cardList {
    color: inherit;
    opacity: 0.5;
    background-color: inherit;
  }
  