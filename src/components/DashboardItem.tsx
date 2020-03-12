import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

type DashboardItemProps = {
  name: string;
  value: string;
  colorValue: string;
  logo: string;
};

const StyledDiv = styled.div`
  background-color: #27293d;
  border: 1px solid #27293d;
  border-radius: 5px;
  box-shadow: 2px 2px 1px 1px rgba(15, 16, 24, 0.2);
  padding: 15px;

  text-align: right;
`;

const StyledName = styled.h1`
  font-weight: 200;
  font-size: 0.8em;
  color: #9a9a9a;
`;

const StyledValue = styled.h1`
  font-weight: 100;
  font-size: 1.5em;
  padding-top: 10px;
  color: ${props => props.color};
`;

export const DashboardItem = ({ name, value, colorValue, logo }: DashboardItemProps) => (
  <StyledDiv>
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <img style={{ width: "60px" }} src={logo} alt="Logo" />
      </Grid>
      <Grid item xs={9}>
        <StyledName>{name}</StyledName>
        <StyledValue color={colorValue}>{value}</StyledValue>
      </Grid>
    </Grid>
  </StyledDiv>
);
