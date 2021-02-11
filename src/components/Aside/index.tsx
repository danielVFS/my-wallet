import React from "react";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

import { useAuth } from "../../hooks/auth";

import logoImg from "../../assets/logo.svg";

import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
} from "./styles";

const Aside: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container menuIsOpen={false}>
      <Header>
        <LogoImg src={logoImg} alt="Logo My Wallet" />
        <Title>Admin</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink to="/">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink to="/create-coin">
          <MdArrowUpward />
            Cadastrar Moedas
        </MenuItemLink>

        <MenuItemLink to="/remove-or-update-coin">
          <MdArrowDownward />
          Remover ou Atualizar
        </MenuItemLink>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
