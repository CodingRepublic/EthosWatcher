import React from "react";
import styled from "styled-components";

import { TypingText } from "./components/TypingText";

const StyledHeader = styled.div`
  padding: 15px 0;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = () => (
  <StyledHeader>
    <TypingText title={"DASHBOARD"} />
  </StyledHeader>
);
