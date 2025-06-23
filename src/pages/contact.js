import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import { breakpoints } from "../styles/breakpoints";
import Header from "../components/Header";
import OmmiButton from "../elements/OmniButton";
import MpiloCard from "../images/mpilo-card.jpg"; // Import the new image
import group7 from "../images/Group 7 (1).png";
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

export const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const { title, description, siteUrl } = data.site.siteMetadata;

  return (
    <>
      <title>Contact - {title}</title>
      <meta
        name="description"
        content="Get in touch with Mpilo Ndlovu. Contact information and business card for collaboration opportunities."
      />
      <link rel="icon" type="image/png" href={group7} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/contact`} />
      <meta property="og:title" content={`Contact - ${title}`} />
      <meta
        property="og:description"
        content="Get in touch with Mpilo Ndlovu. Contact information and business card for collaboration opportunities."
      />
      <meta property="og:image" content={`${siteUrl}/team-mpilo.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${siteUrl}/contact`} />
      <meta property="twitter:title" content={`Contact - ${title}`} />
      <meta
        property="twitter:description"
        content="Get in touch with Mpilo Ndlovu. Contact information and business card for collaboration opportunities."
      />
      <meta property="twitter:image" content={`${siteUrl}/team-mpilo.png`} />
    </>
  );
};
