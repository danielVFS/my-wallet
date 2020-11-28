import React, { useState, useMemo } from "react";

import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import WalletBox from "../../components/WalletBox";

import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";

import listOfMonths from "../../utils/months";
import formatCurrent from "../../utils/formatCurrent";

import { Container, Content } from "./styles";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch {
      throw new Error("invalid month value.");
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch {
      throw new Error("invalid month value.");
    }
  };

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years.reverse()}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Content>
        <WalletBox
          title="Saldo"
          amount={150}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dolar"
          color="#4E41F0"
        />
        <WalletBox
          title="Entradas"
          amount={5000.0}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#F7931B"
        />
        <WalletBox
          title="Saídas"
          amount={4850.0}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#E44C4E"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
