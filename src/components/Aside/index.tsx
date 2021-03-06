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
import { useTheme } from '../../hooks/theme';

import logoImg from "../../assets/logo.svg";

import Toggle from "../Toggle";

import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  ToggleMenu,
  ThemeToggleFooter
} from "./styles";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { toggleTheme, theme } = useTheme();

  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false)
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

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

      <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
         <Toggle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={() => null}
        />
      </ThemeToggleFooter>
    </Container>
  );
};

export default Aside;
