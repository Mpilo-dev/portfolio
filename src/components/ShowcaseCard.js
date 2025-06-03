import React from "react";
import styled from "styled-components";
import MNLogo from "../images/team-mpilo.png";

const ShowcaseContainer = styled.div`
  width: 100%;
  height: 243px;
  position: relative;
  background: url(${({ bgImage }) => bgImage || "none"}) center/cover no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 1rem 1rem 0 0;
`;

const LogosRow = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  gap: 2.5rem;
`;

const LogoCircle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: ${({ bg }) => bg || "#204034"};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px #0002;
  border: 6px solid #fff;
`;

const LogoImg = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
`;

const LaunchButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: -22px;
  transform: translateX(-50%);
  background: #f7c948;
  color: #204034;
  border: none;
  border-radius: 1.2rem;
  padding: 0.4rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 2px 8px #0001;
  cursor: pointer;
`;

const ShowcaseCard = ({
  bgImage,
  rightLogo,
  rightBg = "#f7d34a",
  onLaunch,
}) => (
  <ShowcaseContainer bgImage={bgImage}>
    <LogosRow>
      <LogoCircle bg="#204034">
        <LogoImg src={MNLogo} alt="MN FC" />
      </LogoCircle>
      <LogoCircle bg={rightBg}>
        <LogoImg src={rightLogo} alt="App Logo" />
      </LogoCircle>
    </LogosRow>
    <LaunchButton onClick={onLaunch}>Launch app</LaunchButton>
  </ShowcaseContainer>
);

export default ShowcaseCard;
