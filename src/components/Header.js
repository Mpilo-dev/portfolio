import * as React from "react";
import styled from "styled-components";
import Mpilo from "../images/mpilo.png";
import DownloadButton from "../elements/DownloadButton";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <img src={Mpilo} alt="Mpilo" />
      <DownloadButton />
    </Container>
  );
};

export default Header;
