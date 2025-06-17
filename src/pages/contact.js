import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { breakpoints } from "../styles/breakpoints";
import Header from "../components/Header";
import OmmiButton from "../elements/OmniButton";
import MpiloCard from "../images/mpilo-card.jpg"; // Import the new image
import { AppContainer } from "./index";
import { HeaderContainer } from "./projects";

const ContentContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--white);
  position: relative;
`;

const CardImage = styled.img`
  // New styled component for the card image
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    // Adjust breakpoint as needed
    max-width: 95%;
    max-height: 95%;
  }
`;

const BackButtonContainer = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

const ContactPage = () => {
  return (
    <Layout>
      <AppContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <ContentContainer>
          <BackButtonContainer>
            <OmmiButton text="Back" to="/" />
          </BackButtonContainer>
          <CardImage src={MpiloCard} alt="Mpilo Ndlovu Contact Card" />
        </ContentContainer>
      </AppContainer>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => (
  <>
    <title>Contact - Mpilo Ndlovu</title>
  </>
);
