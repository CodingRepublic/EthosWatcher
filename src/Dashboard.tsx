import React from "react";
import styled from "styled-components";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const Card = styled.div`
  background-color: #27293d;
  border: 1px solid #27293d;
  border-radius: 5px;
  padding: 10px;
`;

const DashboardContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

export const Dashboard = () => (
  <DashboardContainer>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>xs=12</Card>
      </Grid>
      <Grid item xs={6}>
        <Card>xs=12</Card>
      </Grid>
      <Grid item xs={6}>
        <Card>xs=12</Card>
      </Grid>
      <Grid item xs={3}>
        <Card>xs=12</Card>
      </Grid>
      <Grid item xs={3}>
        <Card>xs=12</Card>
      </Grid>
      <Grid item xs={3}>
        <Card>xs=12</Card>
      </Grid>
      <Grid item xs={3}>
        <Card>xs=12</Card>
      </Grid>
    </Grid>
  </DashboardContainer>
);

//   <div className="Dashboard">
//     <button onClick={this.props.toggle}>Toggle Button</button>
//     {this.props.commonState.display ? <div>true</div> : <div>false</div>}
//   </div>
