import React from "react";
import styled from "styled-components";

type Title2Props = {
  title: String;
};

const StyledTitle = styled.h1`
  font-weight: 100;
  font-size: 1.2em;
  color: #9a9a9a;
`;

export const Title2 = ({ title }: Title2Props) => <StyledTitle>{title}</StyledTitle>;
