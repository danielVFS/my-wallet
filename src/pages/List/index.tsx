import { CONNREFUSED } from "dns";
import React from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinanceCard from "../../components/HistoryFinanceCard";

import { Container, Content, Filters } from "./styles";

const List: React.FC = () => {
  const months = [
    {
      value: 7,
      label: "Julho",
    },
    {
      value: 8,
      label: "Agosto",
    },
    {
      value: 9,
      label: "Setembro",
    },
  ];

  const years = [
    {
      value: 2018,
      label: 2018,
    },
    {
      value: 2019,
      label: 2019,
    },
    {
      value: 2020,
      label: 2020,
    },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#F7931B">
        <SelectInput options={months} />
        <SelectInput options={years.reverse()} />
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </Filters>

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
