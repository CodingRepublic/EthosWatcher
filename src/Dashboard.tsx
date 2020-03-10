import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import { TypingText } from "./components/TypingText";
import { Title2 } from "./components/Title2";

const Card = styled.div`
  background-color: #27293d;
  border: 1px solid #27293d;
  border-radius: 5px;
  padding: 10px;
  font-weight: 200;
`;

const DashboardContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

export const Dashboard = () => (
  <DashboardContainer>
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Card>
          <TypingText title="Number of rigs" />
          <Title2 title="hello" />
        </Card>
      </Grid>
    </Grid>
  </DashboardContainer>
);

//   <div className="Dashboard">
//     <button onClick={this.props.toggle}>Toggle Button</button>
//     {this.props.commonState.display ? <div>true</div> : <div>false</div>}
//   </div>
