import React from "react";
import styled from "styled-components";

import { Lottie } from "@crello/react-lottie";
import * as animationData from "./img/progress.json";

const HeaderContainer = styled.div`
  padding: 25px 0;
  padding-left: 25px;
  padding-right: 25px;
  font-weight: 100;
  font-size: 1.2em;
`;

export const Header = () => <HeaderContainer>DASHBOARD</HeaderContainer>;
