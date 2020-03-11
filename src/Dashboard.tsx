import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import { DashboardItem } from "./components/DashboardItem";
import { DashboardItemStatus } from "./components/DashboardItemStatus";

import MinerLogo from "./img/miner.png";
import GpuLogo from "./img/gpu.png";
import HashingLogo from "./img/hashing.png";
// import AlertLogo from "./img/alert.png";

import * as animationData from "./img/progress.json";

const DashboardContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;

export const Dashboard = () => (
  <DashboardContainer>
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <DashboardItem name="Hashing Power" value="353.4 MH/s" logo={HashingLogo} />
      </Grid>
      <Grid item xs={3}>
        <DashboardItem name="Number of Rigs" value="2" logo={MinerLogo} />
      </Grid>
      <Grid item xs={3}>
        <DashboardItem name="Number of GPUs" value="23" logo={GpuLogo} />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={1}>
        <DashboardItemStatus logoFalse={GpuLogo} logoTrue={MinerLogo} bool={false} />
      </Grid>
    </Grid>
  </DashboardContainer>
);

//   <div className="Dashboard">
//     <button onClick={this.props.toggle}>Toggle Button</button>
//     {this.props.commonState.display ? <div>true</div> : <div>false</div>}
//   </div>
