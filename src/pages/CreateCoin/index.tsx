import React from "react";

import ContentHeader from "../../components/ContentHeader";

import { Container, Content } from "./styles";

const CreateCoin: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Cadastrar Moedas" lineColor="#4E41F0">
      </ContentHeader>
      <Content>
        <h1>Cadastre suas moedas</h1>
      </Content>
    </Container>
  );
};

export default CreateCoin;
