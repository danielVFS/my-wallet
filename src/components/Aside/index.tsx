import React, { useState } from "react";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu
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
  ToggleMenu
} from "./styles";

const Aside: React.FC = () => {
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false)

  const { signOut } = useAuth();

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened)
  }

  return (
    <Container menuIsOpen={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose/> : <MdMenu/>}
        </ToggleMenu>

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
