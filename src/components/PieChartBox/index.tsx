import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import {
  Container,
  SubtitleContainer,
  Subtitle,
  SideLeft,
  SideRight,
} from "./styles";

interface IPiechartProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartBox: React.FC<IPiechartProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <SubtitleContainer>
        {data.map((indicator) => (
          <Subtitle key={indicator.name} color={indicator.color}>
            <div>{indicator.percent}%</div>
            <span>{indicator.name}</span>
          </Subtitle>
        ))}
      </SubtitleContainer>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="percent">
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default PieChartBox;
