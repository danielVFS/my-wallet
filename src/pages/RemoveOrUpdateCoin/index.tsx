import React from "react";

import ContentHeader from "../../components/ContentHeader";

import { Container, Content } from "./styles";

const RemoveOrUpdateCoin: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Remover ou Atualizar Moedas" lineColor="#4E41F0">
      </ContentHeader>
      <Content>
        <h1>Remova ou atualize suas moedas</h1>
      </Content>
    </Container>
  );
};

export default RemoveOrUpdateCoin;
