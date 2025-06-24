import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { breakpoints } from "../styles/breakpoints";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/Header";
import OmmiButton from "../elements/OmniButton";

import MyImage from "../images/mpilo-image.png";
import FullName from "../images/mpilo-ndlovu.png";
import TeamMpilo from "../images/team-mpilo.png";
import group7 from "../images/Group 7 (1).png";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 15%;
  padding: 0 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white-primary);

  display: flex;
  @media (max-width: ${breakpoints.tabletSM}px) {
    padding: 0 1rem;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 85%;
  background: var(--white);
  display: flex;
  @media (max-width: ${breakpoints.tabletSM}px) {
    flex-direction: column;
  }
`;

const ProfileContainer = styled.div`
  width: 50%;
  height: 100%;
  background: var(--white);

  display: flex;
  flex-direction: column;

  position: relative;

  @media (max-width: ${breakpoints.tabletSM}px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white-primary);
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const DetailsContainer = styled.div`
  width: 100%;
  height: 30%;
  border-top: 1px solid var(--black);

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 0.5rem;
    color: var(--green);
    font-size: smaller;
  }
`;

const TextImage = styled.img`
  margin-top: 3.5rem;
`;

const Role = styled.div`
  margin-top: 1rem;
  padding: 0.25rem 1.3rem;
  font-size: small;
  background: var(--green);
  color: var(--white);
`;

const Text = styled.p`
  margin-top: 0.5rem;
  color: var(--green);
  font-size: smaller;
`;

const QuestionImage = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: 1px solid var(--black);
  background: var(--white-primary);
  padding: 0.5rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;

  margin-top: 2.5rem;
`;

const AboutContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 2.5rem 4.5rem;
  border-top-left-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  background: var(--green);
  text-align: justify;

  @media (max-width: ${breakpoints.tabletSM}px) {
    width: 100%;
    height: auto;

    border-top-left-radius: 0;
    padding: 2.5rem 4rem;
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    padding: 2.5rem 2.65rem;
  }
`;

const AboutText = styled.p`
  font-size: 0.95rem;
  color: var(--white);
  margin-bottom: 1rem;
`;

const IndexPage = () => {
  return (
    <Layout>
      <AppContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        <ContentContainer>
          <ProfileContainer>
            <ImageContainer>
              <Image src={MyImage} alt="Mpilo Ndlovu" />
            </ImageContainer>

            <DetailsContainer>
              <QuestionImage>
                <Image src={TeamMpilo} alt="Team Mpilo logo" />
              </QuestionImage>
              <TextImage src={FullName} alt="Mpilo Ndlovu" />
              <Role>Junior fullstack developer</Role>
              <Text>/Football coach</Text>
              <ButtonContainer>
                <OmmiButton text="Projects" to="/projects" />
                <OmmiButton text="Contact" to="/contact" />
              </ButtonContainer>
            </DetailsContainer>
          </ProfileContainer>
          <AboutContainer>
            <AboutText>
              I’m a software developer and a licensed soccer coach (CAF D
              License) with a unique journey into tech—sparked by my cousin’s
              introduction to the field. Since then, I’ve been on a mission to
              merge my two greatest passions: technology and soccer.
            </AboutText>
            <AboutText>
              I believe in the power of innovation to revolutionize sports.
              Whether it’s developing apps to optimize training, building
              platforms to connect players and coaches globally, or exploring
              data-driven strategies for the game, I’m passionate about
              leveraging tech to elevate soccer. But my vision doesn’t stop
              there—I see technology as a catalyst for empowerment, growth, and
              opportunity in every sphere of life.
            </AboutText>
            <AboutText>
              My foundation in tech was forged at Umuzi, where I honed my skills
              before diving into internships with Purple Cosmos and BBD through
              the Umuzi internship program. These experiences sharpened my
              ability to create impactful solutions while reinforcing my belief
              in tech as a force for good.
            </AboutText>
            <AboutText>
              Join me on this exciting journey as I continue in the world of
              technology, creating innovative solutions that inspire, educate,
              and empower. Let's kickstart the future together!
            </AboutText>
          </AboutContainer>
        </ContentContainer>
      </AppContainer>
    </Layout>
  );
};

export default IndexPage;

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
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/team-mpilo.png`} />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="525" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}/team-mpilo.png`} />
    </>
  );
};
