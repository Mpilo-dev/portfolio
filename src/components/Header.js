import * as React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import Mpilo from "../images/mpilo.png";
import DownloadButton from "../elements/DownloadButton";

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <Container>
      <Logo src={Mpilo} alt="Mpilo" onClick={() => navigate("/")} />
      <DownloadButton />
    </Container>
  );
};

export default Header;
