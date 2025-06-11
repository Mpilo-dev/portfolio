import * as React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import Layout from "../components/Layout";

import Header from "../components/Header";
import OmmiButton from "../elements/OmniButton";
import LaunchButton from "../elements/LaunchButton";
import { AppContainer } from "./index";

import { IoIosArrowBack } from "react-icons/io";
import khumbula from "../images/k.png";
import MarryME from "../images/Group 14.png";
import group7 from "../images/Group 7 (1).png";
import Card from "../components/Card";
import DetailsCard from "../components/DetailsCard";
import projectData from "../../data/data";
import ToolsHighlights from "../components/ToolsHighlights";
import ShowcaseCard from "../components/ShowcaseCard";
import khumbulaLogo from "../images/k.png";
import Rectangle from "../images/Rectangle 15.png";
import { breakpoints } from "../styles/breakpoints";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 15%;
  padding: 0 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  display: flex;
  @media (max-width: ${breakpoints.tabletSM}px) {
    padding: 0 1rem;
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
    overflow-y: auto;
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
    height: auto;
    min-height: fit-content;
    overflow-x: auto;
    overflow-y: visible;
    padding: 1rem;
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
    justify-content: flex-start;
    min-width: max-content;
    padding: 0 0.5rem;
    height: auto;
  }
`;

const ClickableCard = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  border: 5px solid transparent;

  ${(props) =>
    props.isActive &&
    `
    border-color: ${props.projectColor};
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
    overflow: visible;
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
    width: 130px;
    height: 130px;
    border-radius: 65px;
    left: ${(props) =>
      props.isLeft ? "calc(50% - 180px)" : "calc(50% + 50px)"};
  }

  img {
    width: 140px;
    height: 140px;

    @media (max-width: ${breakpoints.tabletSM}px) {
      width: 100px;
      height: 100px;
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

const ProjectsPage = () => {
  const [selectedIdx, setSelectedIdx] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleCardClick = (index) => {
    setSelectedIdx(index);
    setIsLoading(false);
    // Update URL based on selected project
    const projectSlug = index === 0 ? "khumbula" : "marryme";
    navigate(`/projects?project=${projectSlug}`, { replace: true });
  };

  // Handle initial URL state
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const project = params.get("project");
      if (project === "khumbula") {
        setSelectedIdx(0);
        setIsLoading(false);
      } else if (project === "marryme") {
        setSelectedIdx(1);
        setIsLoading(false);
      }
    }
  }, []);

  return (
    <Layout>
      <AppContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <ContentContainer>
          <CardsContainer>
            <ButtonWrapper>
              <ButtonContainer>
                <OmmiButton text="My Projects" />
              </ButtonContainer>
              <BackButton onClick={handleBackClick}>
                <IoIosArrowBack />
                Back
              </BackButton>
            </ButtonWrapper>

            <CardsWrapper>
              <ClickableCard
                onClick={() => handleCardClick(0)}
                isActive={selectedIdx === 0}
                projectColor="#F8D448"
              >
                <Card rightLogo={khumbula} rightName="Khumbula App" />
              </ClickableCard>
              <ClickableCard
                onClick={() => handleCardClick(1)}
                isActive={selectedIdx === 1}
                projectColor="#916AE3"
              >
                <Card
                  rightLogo={MarryME}
                  rightName="Marry Me App"
                  rightColor="#916AE3"
                />
              </ClickableCard>
            </CardsWrapper>
          </CardsContainer>
          <DetailsContainer>
            {isLoading ? (
              <LoadingText size="1.5rem" weight="500" color="#204034">
                Please select a project to view details
              </LoadingText>
            ) : (
              <>
                <DetailsHeader>
                  <MatchPreview>
                    <img
                      src="https://c.animaapp.com/52VaV51L/img/rectangle-14.png"
                      alt="Stadium"
                      style={{
                        width: "100%",
                        height: "65%",
                        objectFit: "cover",
                      }}
                    />
                    <TeamBadge color="#1c4638" left="120px" isLeft={true}>
                      <img
                        src="https://c.animaapp.com/52VaV51L/img/group-7.png"
                        alt="Mamelodi Sundowns"
                      />
                    </TeamBadge>
                    <TeamBadge
                      color={selectedIdx === 0 ? "#F8D448" : "#916AE3"}
                      left="calc(100% - 300px)"
                      isLeft={false}
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
                      title={projectData[selectedIdx].title}
                      details={projectData[selectedIdx].details}
                    />
                  </DetailsContent>
                  <Tools>
                    <ToolsHighlights
                      tools={projectData[selectedIdx].tools}
                      screenshots={projectData[selectedIdx].screenshots}
                    />
                  </Tools>
                </DetailsBody>
              </>
            )}
          </DetailsContainer>
        </ContentContainer>
      </AppContainer>
    </Layout>
  );
};

export default ProjectsPage;

export const Head = () => (
  <>
    <title>Projects</title>
    <link rel="icon" type="image/png" href={group7} />
  </>
);
