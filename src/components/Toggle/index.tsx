import React from "react";

import { Container, ToggleLabel, ToggleSelector } from "./styles";

const Toggle: React.FC = () => (
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      height={26}
      width={53}
      onChange={() => {}}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
);

export default Toggle;
