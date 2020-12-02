import React from "react";

import logoImg from "../../assets/logo.svg";

import { Container, Logo, Form, FormTitle } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha carteira" />
        <h2>Minha Carteira</h2>
      </Logo>

      <Form>
        <FormTitle>Entrar</FormTitle>

        <input type="text"></input>
        <input type="text"></input>

        <button type="submit">Acesar</button>
      </Form>
    </Container>
  );
};

export default SignIn;
