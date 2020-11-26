import { CONNREFUSED } from "dns";
import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content } from "./styles";

const List: React.FC = () => {
  const options = [
    {
      value: "Daniel",
      label: "Daniel",
    },
    {
      value: "Vitor",
      label: "Vitor",
    },
    {
      value: "Bruna",
      label: "Maria",
    },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#F7931B">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="24/11/2020"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  );
};

export default List;
