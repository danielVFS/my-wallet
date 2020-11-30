import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import {
  Container,
  SubtitleContainer,
  Subtitle,
  SideLeft,
  SideRight,
} from "./styles";

const PieChartBox: React.FC = () => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <SubtitleContainer>
        <Subtitle color="#F7931B">
          <div>5%</div>
          <span>Entradas</span>
        </Subtitle>
      </SubtitleContainer>
    </SideLeft>
    <SideRight></SideRight>
  </Container>
);

export default PieChartBox;
