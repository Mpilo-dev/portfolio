import * as React from "react";
import styled from "styled-components";
import { navigate, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";

import Header from "../components/Header";
import OmmiButton from "../elements/OmniButton";
import LaunchButton from "../elements/LaunchButton";
import { AppContainer } from "./index";

import { IoIosArrowBack } from "react-icons/io";
import khumbula from "../images/k.png";
import TeamMpilo from "../images/team_mpilo.png";
import MarryME from "../images/new_logo.png";
import group7 from "../images/Group 7 (1).png";
import Card from "../components/Card";
import DetailsCard from "../components/DetailsCard";
import projectData from "../../data/data";
import ToolsHighlights from "../components/ToolsHighlights";
import { breakpoints } from "../styles/breakpoints";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 15%;
  padding: 0 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${breakpoints.tabletSM}px) {
    padding: 1.5rem 1rem;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: row;

  @media (max-width: ${breakpoints.tabletSM}px) {
    flex-direction: column;
    height: auto;
  }
`;

const CardsContainer = styled.div`
  width: 30%;
  height: auto;
  background: var(--white-primary);
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  gap: 1rem;

  @media (max-width: ${breakpoints.tabletSM}px) {
    width: 100%;
    padding: 1rem;
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    display: ${(props) => (props.$isCardSelected ? "none" : "flex")};
    background-color: inherit;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${breakpoints.tabletSM}px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1rem;
  color: #204034;
  cursor: pointer;
  margin-bottom: 1rem;
  font-weight: 500;
  margin-left: 1.25rem;

  &:hover {
    opacity: 0.8;
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: ${breakpoints.tabletSM}px) {
    flex-direction: row;
    width: 100%;
    padding: 0 0.5rem;
    overflow-x: visible;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    flex-direction: column;
    min-width: 100%;
    padding: 0 0.3rem;
  }
`;

const ClickableCard = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  border: 5px solid transparent;

  ${(props) =>
    props.$isActive &&
    `
    border-color: ${props.$projectColor};
    transform: scale(1.02);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  `}

  &:hover {
    transform: scale(1.02);
  }
`;

const DetailsContainer = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  overflow: visible;

  @media (max-width: ${breakpoints.tabletSM}px) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    display: ${(props) => (props.$isCardSelected ? "flex" : "none")};
  }
`;

const DetailsHeader = styled.div`
  width: 100%;
  height: auto;
`;

const DetailsBody = styled.div`
  width: 100%;
  padding: 0 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: ${breakpoints.tabletSM}px) {
    padding: 0 0.65rem;
  }
`;

const DetailsContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const Tools = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
`;

const FlexRow = styled(FlexContainer)`
  flex-direction: row;
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"};
  gap: ${(props) => props.gap || "0"};
`;

const FlexColumn = styled(FlexContainer)`
  flex-direction: column;
  align-items: ${(props) => props.align || "flex-start"};
  justify-content: ${(props) => props.justify || "flex-start"};
  gap: ${(props) => props.gap || "0"};
`;

const MatchPreview = styled(FlexRow)`
  width: 100%;
  height: 243px;
  position: relative;
  overflow: visible;

  @media (max-width: ${breakpoints.tabletSM}px) {
    height: 180px;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65%;
  background-color: #1c4638;
  opacity: 0.9;
  z-index: 1;
`;

const TeamBadge = styled(FlexColumn).attrs({
  align: "center",
  justify: "center",
})`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  background-color: ${(props) => props.color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 50%;
  left: ${(props) => props.left};
  transform: translateY(-50%);
  z-index: 10;

  @media (max-width: ${breakpoints.tabletSM}px) {
    top: 65%;
  }

  @media (max-width: ${breakpoints.mobileLG}px) {
    width: 130px;
    height: 130px;
    border-radius: 65px;
    left: ${(props) =>
      props.$isLeft ? "calc(50% - 180px)" : "calc(50% + 50px)"};
    top: 50%;
  }

  @media (max-width: ${breakpoints.mobileSM}px) {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    left: ${(props) =>
      props.$isLeft ? "calc(50% - 140px)" : "calc(50% + 40px)"};
    top: 65%;
  }

  img {
    width: 140px;
    height: 140px;

    @media (max-width: ${breakpoints.mobileLG}px) {
      width: 100px;
      height: 100px;
    }

    @media (max-width: ${breakpoints.mobileSM}px) {
      width: 80px;
      height: 80px;
    }
  }
`;

const VSBox = styled(FlexRow).attrs({ justify: "center", align: "center" })`
  background-image: url(https://c.animaapp.com/52VaV51L/img/vector.svg);
  background-size: cover;
  width: 90px;
  height: 28px;
  position: absolute;
  top: calc(65% + 10px);
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;

  @media (max-width: ${breakpoints.tabletSM}px) {
    width: 70px;
    height: 22px;
    top: calc(65% + 5px);
  }
`;

const Text = styled.div`
  color: ${(props) => props.color || "#000000"};
  font-family: ${(props) => props.font || "Roboto, Helvetica"};
  font-size: ${(props) => props.size || "16px"};
  font-weight: ${(props) => props.weight || "400"};
  white-space: ${(props) => (props.nowrap ? "nowrap" : "normal")};
`;

const LoadingText = styled(Text)`
  height: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;

  @media (max-width: ${breakpoints.tabletSM}px) {
    min-height: 200px;
  }
`;

const Title = styled.div`
  padding: 0.25rem 1.3rem;
  font-size: small;
  background: var(--green);
  color: var(--white);
`;

const ProjectsPage = () => {
  const [selectedIdx, setSelectedIdx] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isMobileLG, setIsMobileLG] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIfMobile = () => {
        setIsMobileLG(window.innerWidth <= breakpoints.mobileLG);
      };
      checkIfMobile();
      window.addEventListener("resize", checkIfMobile);
      return () => window.removeEventListener("resize", checkIfMobile);
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const project = params.get("project");
      if (project === "khumbula" && projectData[0]) {
        setSelectedIdx(0);
        setIsLoading(false);
      } else if (project === "marryme" && projectData[1]) {
        setSelectedIdx(1);
        setIsLoading(false);
      }
    }
  }, []);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleCardClick = (index) => {
    setSelectedIdx(index);
    setIsLoading(false);
    const projectSlug = index === 0 ? "khumbula" : "marryme";
    navigate(`/projects?project=${projectSlug}`, { replace: true });
  };

  const selectedProject =
    selectedIdx !== null ? projectData[selectedIdx] : null;

  return (
    <Layout>
      <AppContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <ContentContainer>
          <CardsContainer $isCardSelected={selectedIdx !== null && isMobileLG}>
            <ButtonWrapper>
              <ButtonContainer>
                <Title>My Projects</Title>
              </ButtonContainer>
              <BackButton onClick={handleBackClick}>
                <IoIosArrowBack />
                Back
              </BackButton>
            </ButtonWrapper>

            <CardsWrapper>
              <ClickableCard
                onClick={() => handleCardClick(0)}
                $isActive={selectedIdx === 0}
                $projectColor="#F8D448"
              >
                <Card rightLogo={khumbula} rightName="Khumbula App" />
              </ClickableCard>
              <ClickableCard
                onClick={() => handleCardClick(1)}
                $isActive={selectedIdx === 1}
                $projectColor="#916AE3"
              >
                <Card
                  rightLogo={MarryME}
                  rightName="Marry Me App"
                  rightColor="#916AE3"
                />
              </ClickableCard>
            </CardsWrapper>
          </CardsContainer>
          <DetailsContainer
            $isCardSelected={selectedIdx !== null && isMobileLG}
          >
            {isLoading ? (
              <LoadingText size="1.5rem" weight="500" color="#204034">
                Please select a project to view details
              </LoadingText>
            ) : selectedProject ? (
              <>
                <DetailsHeader>
                  <BackButton
                    onClick={() => setSelectedIdx(null)}
                    style={{
                      display:
                        isMobileLG && selectedIdx !== null ? "flex" : "none",
                      marginBottom: "1rem",
                    }}
                  >
                    <IoIosArrowBack />
                    Back
                  </BackButton>
                  <MatchPreview>
                    <img
                      src="https://c.animaapp.com/52VaV51L/img/rectangle-14.png"
                      alt="Stadium"
                      style={{
                        width: "100%",
                        height: "65%",
                        objectFit: "cover",
                        position: "relative",
                      }}
                    />
                    <ImageOverlay />
                    <TeamBadge color="#1c4638" left="120px" $isLeft={true}>
                      <img src={TeamMpilo} alt="Mpilo Ndlovu fc" />
                    </TeamBadge>
                    <TeamBadge
                      color={selectedIdx === 0 ? "#F8D448" : "#916AE3"}
                      left="calc(100% - 300px)"
                      $isLeft={false}
                    >
                      <img
                        src={
                          selectedIdx === 0
                            ? "https://c.animaapp.com/52VaV51L/img/thumbnail-1-1@1.5x.png"
                            : MarryME
                        }
                        alt={selectedIdx === 0 ? "Khumbula" : "Marry Me"}
                      />
                    </TeamBadge>
                    <VSBox>
                      <Text color="#fff">VS</Text>
                    </VSBox>
                    <LaunchButton
                      bgColor={selectedIdx === 0 ? "#F8D448" : "#916AE3"}
                    />
                  </MatchPreview>
                </DetailsHeader>
                <DetailsBody>
                  <DetailsContent>
                    <DetailsCard
                      title={selectedProject.title}
                      details={selectedProject.details}
                    />
                  </DetailsContent>
                  <Tools>
                    <ToolsHighlights
                      tools={selectedProject.tools}
                      screenshots={selectedProject.screenshots}
                      projectColor={selectedIdx === 0 ? "#F8D448" : "#916AE3"}
                    />
                  </Tools>
                </DetailsBody>
              </>
            ) : (
              <LoadingText size="1.5rem" weight="500" color="#204034">
                Project data not available
              </LoadingText>
            )}
          </DetailsContainer>
        </ContentContainer>
      </AppContainer>
    </Layout>
  );
};

export default ProjectsPage;

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
      <title>Projects - {title}</title>
      <meta
        name="description"
        content="Explore my projects including Khumbula App and Marry Me App. View details, tools used, and screenshots of my development work."
      />
      <link rel="icon" type="image/png" href={group7} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}/projects`} />
      <meta property="og:title" content={`Projects - ${title}`} />
      <meta
        property="og:description"
        content="Explore my projects including Khumbula App and Marry Me App. View details, tools used, and screenshots of my development work."
      />
      <meta property="og:image" content={`${siteUrl}/images/team-mpilo.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${siteUrl}/projects`} />
      <meta property="twitter:title" content={`Projects - ${title}`} />
      <meta
        property="twitter:description"
        content="Explore my projects including Khumbula App and Marry Me App. View details, tools used, and screenshots of my development work."
      />
      <meta
        property="twitter:image"
        content={`${siteUrl}/images/team-mpilo.png`}
      />
    </>
  );
};
