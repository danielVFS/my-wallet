import React, { InputHTMLAttributes } from "react";

import logoImg from "../../assets/logo.svg";

import { Container } from "./styles";

type IINputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IINputProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default Input;
