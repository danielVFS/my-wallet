import React from "react";

import logoImg from "../../assets/logo.svg";

import Input from "../../components/Input";

import { Container, Logo, Form, FormTitle } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha carteira" />
        <h2>Minha Carteira</h2>
      </Logo>

      <Form onSubmit={() => {}}>
        <FormTitle>Entrar</FormTitle>

        <Input required type="email" placeholder="E-mail" />
        <Input required type="password" placeholder="Senha" />

        <button type="submit">Acesar</button>
      </Form>
    </Container>
  );
};

export default SignIn;
