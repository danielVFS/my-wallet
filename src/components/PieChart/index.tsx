import React from "react";
//import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import {
  Container,
  SubtitleContainer,
  Subtitle,
  SideLeft,
  SideRight,
} from "./styles";

const PieChart: React.FC = () => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <SubtitleContainer>
        <Subtitle color="#F7931B">
          <div>5%</div>
          <span>Entradas</span>
        </Subtitle>
        <Subtitle color="#E44C4E">
          <div>95%</div>
          <span>Saídas</span>
        </Subtitle>
      </SubtitleContainer>
    </SideLeft>
    <SideRight></SideRight>
  </Container>
);

export default PieChart;
