import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { breakpoints } from "../styles/breakpoints";

import Header from "../components/Header";
import OmmiButton from "../elements/OmniButton";

import Snepe from "../images/snepe.png";
import FullName from "../images/mpilo-ndlovu.png";
import Question from "../images/question.png";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
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

const ContentContainer = styled.div`
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
  height: 50%;
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
  padding: 1.2rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
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
              <Image src={Snepe} alt="Yenzo" />
            </ImageContainer>

            <DetailsContainer>
              <QuestionImage>
                <Image src={Question} alt="Question Mark" />
              </QuestionImage>
              <TextImage src={FullName} alt="Mpilo Ndlovu" />
              <Role>Junior fullstack developer</Role>
              <Text>Football coach</Text>
              <ButtonContainer>
                <OmmiButton text="Projects" />
                <OmmiButton text="Contact" />
              </ButtonContainer>
            </DetailsContainer>
          </ProfileContainer>
          <AboutContainer>
            <AboutText>
              I'm a software developer and a licensed coach with a Caf D
              license. My journey into the world of technology was unique—it all
              started with my cousin introducing me to the wonders. Since then,
              I've been on a mission to merge my two passions: technology and
              soccer.
            </AboutText>
            <AboutText>
              I believe in the power of innovation to transform the world of
              sports. From developing apps to enhance training sessions to
              creating platforms that connect players and coaches worldwide, I'm
              constantly exploring new ways to leverage technology in the realm
              of soccer.
            </AboutText>
            <AboutText>
              But my ambitions extend beyond the soccer field. I see technology
              as a tool for empowerment and growth in all aspects of life.
              Whether it's building educational apps for young athletes or
              designing platforms to facilitate community engagement, I'm driven
              by a desire to make a meaningful impact through my work.
            </AboutText>
            <AboutText>
              While soccer remains at the heart of my endeavors, my interests in
              technology are diverse. From AI-driven analytics to virtual
              reality training simulations, I'm always eager to explore the
              latest advancements and push the boundaries of what's possible.
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

export const Head = () => <title>Home Page</title>;
