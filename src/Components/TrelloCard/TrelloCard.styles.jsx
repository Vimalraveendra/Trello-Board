import styled from "styled-components";

import { Icon } from "@material-ui/core";

export const CardContainer = styled.div`
  margin-bottom: 8px;
  max-width: 100%;
`;
export const Card = styled.div`
  background-color: #fff;
  padding: 8px;
  border-radius: 5px;
`;
export const CardTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardIcon = styled(Icon)`
  display: none;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;
