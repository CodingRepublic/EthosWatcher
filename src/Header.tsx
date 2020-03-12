import React from "react";
import styled from "styled-components";

type HeaderPropsProps = {
  title: string;
  logoUp: string;
  logoDown: string;
  isUp: boolean;
};

const HeaderContainer = styled.div`
  padding: 25px 0;
  padding-left: 25px;
  padding-right: 25px;
  font-weight: 100;
  font-size: 1.2em;
  display: flex;
`;

export const Header = ({ title, logoUp, logoDown, isUp }: HeaderPropsProps) => (
  <HeaderContainer>
    <div style={{ marginTop: "auto", marginBottom: "auto" }}>{title}</div>
    <div>
      {isUp ? (
        <img style={{ width: "2em", paddingLeft: "10px" }} src={logoUp} alt="Logo" />
      ) : (
        <img style={{ width: "2em", paddingLeft: "10px" }} src={logoDown} alt="Logo" />
      )}
    </div>
  </HeaderContainer>
);
