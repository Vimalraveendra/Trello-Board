import styled from "styled-components";

export const ListContainer = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  width: 20rem;
  padding: 10px;
  height: 100%;
  margin-right: 8px;
`;

export const ListTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ListIcon = styled.div`
  color: rgba(0, 0, 0, 0.3);
  &:hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const ListEdit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5;
`;
