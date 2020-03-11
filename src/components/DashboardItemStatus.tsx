import React from "react";
import styled from "styled-components";

type DashboardItemStatusProps = {
  bool: boolean;
  logoTrue: string;
  logoFalse: string;
};

const StyledDiv = styled.div`
  height: 60px;
  background-color: #27293d;
  border: 1px solid #27293d;
  border-radius: 5px;
  box-shadow: 2px 2px 1px 1px rgba(15, 16, 24, 0.2);

  padding: 15px;
`;

export const DashboardItemStatus = ({ bool, logoTrue, logoFalse }: DashboardItemStatusProps) => (
  <StyledDiv>
    {bool ? (
      <img style={{ margin: "0 auto", width: "60px", display: "block" }} src={logoTrue} alt="Logo" />
    ) : (
      <img style={{ margin: "0 auto", width: "60px", display: "block" }} src={logoFalse} alt="Logo" />
    )}
  </StyledDiv>
);
