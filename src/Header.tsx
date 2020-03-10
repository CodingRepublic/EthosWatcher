import React from "react";
import styled from "styled-components";

import { TypingText } from "./components/TypingText";

const StyledHeader = styled.div`
  padding: 25px 0;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Header = () => (
  <StyledHeader>
    <TypingText title={"DASHBOARD"} />
  </StyledHeader>
);
