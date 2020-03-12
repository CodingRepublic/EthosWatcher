import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import { DashboardItem } from "./components/DashboardItem";
import { DashboardTable } from "./components/DashboardTable";

import MinerLogo from "./img/miner.png";
import GpuLogo from "./img/gpu.png";
import HashingLogo from "./img/hashing.png";
import EnergyLogo from "./img/energy.png";
import TempLogo from "./img/temp.png";

import { Lottie } from "@crello/react-lottie";
import animationData from "./img/cpu.json";

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
      <Grid item xs={2}>
        <DashboardItem name="Number of Rigs" value="2" logo={MinerLogo} />
      </Grid>
      <Grid item xs={2}>
        <DashboardItem name="Number of GPUs" value="23" logo={GpuLogo} />
      </Grid>
      <Grid item xs={2}>
        <DashboardItem name="Average Temp" value="23°" logo={TempLogo} />
      </Grid>
      <Grid item xs={2}>
        <DashboardItem name="Watts" value="23" logo={EnergyLogo} />
      </Grid>
      <Grid item xs={1}>
        <Lottie config={{ animationData: animationData, loop: true }} speed={1} width="100px" />
      </Grid>
    </Grid>
    <div style={{ marginTop: "30px" }} />
    <DashboardTable />
  </DashboardContainer>
);

//   <div className="Dashboard">
//     <button onClick={this.props.toggle}>Toggle Button</button>
//     {this.props.commonState.display ? <div>true</div> : <div>false</div>}
//   </div>
