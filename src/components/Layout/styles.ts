import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto; //2 Columns
  grid-template-rows: 70px auto; //2 Rows

  /*
    * AS: Aside
    * MH: MainHeader
    * CT: Content
  */
  grid-template-areas:
    "AS MH"
    "AS CT";

  height: 100vh;
`;
