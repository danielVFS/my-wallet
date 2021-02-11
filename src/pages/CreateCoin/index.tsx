import React from "react";
import { Form } from 'react-bootstrap';

import ContentHeader from "../../components/ContentHeader";

import { Container, Content } from "./styles";

const CreateCoin: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Cadastrar Moedas" lineColor="#4E41F0">
      </ContentHeader>
      <Content>
        <Form>
          <Form.Group  controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateCoin;
