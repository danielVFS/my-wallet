import styled, { css } from "styled-components";
import { Link, LinkProps } from "react-router-dom";

interface IContainerProps {
  menuIsOpen: boolean
}

export const Container = styled.div<IContainerProps>`
  grid-area: AS;

  background-color: ${(props) => props.theme.colors.secondary};
  padding-left: 20px;

  border-right: 1px solid ${(props) => props.theme.colors.gray};

  position: relative;

  @media(max-width: 600px) {
    padding-left: 7px;
    padding-right: 15px;
    position: fixed;
    z-index: 2;

    width: 200px;

    height: ${props => props.menuIsOpen ? '100vh' : '70px'};
    overflow: hidden;

    ${props => !props.menuIsOpen && css`
      border: none;
      border-bottom: 1px solid ${props => props.theme.colors.gray};
    `};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 70px;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;

  @media(max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  margin-right: 5px;
  margin-left: 20px;
  margin-top: 10px;
  font-size: 20px;

  @media(max-width: 600px) {
    display: block;
  }

`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
`;

export const MenuItemLink = styled(Link) <LinkProps>`
  text-decoration: none;
  color: ${(props) => props.theme.colors.info};

  margin: 7px 0;
  display: flex;
  align-items: center;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const MenuItemButton = styled.button`
  font-size: 16px;
  color: ${(props) => props.theme.colors.info};

  border: none;
  background: none;

  margin: 7px 0;
  display: flex;
  align-items: center;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;

export const ToggleMenu = styled.button`
  width: 40px;
  height: 40px;

  border-radius: 5px;
  font-size: 22px;
  background-color: ${props => props.theme.colors.warning};
  color: ${props => props.theme.colors.black};

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  justify-content: center;
  align-items: center;

  display: none;
  @media(max-width: 600px) {
    display: block;
  }
`;
