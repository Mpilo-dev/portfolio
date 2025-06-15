import * as React from "react";
import styled from "styled-components";
import MpiloLogo from "../images/team-mpilo.png";

const MatchCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.5rem 0.75rem;
  overflow: hidden;
  box-shadow: 0 2px 8px #e0e0e0;
  position: relative;
  background: ${({ rightColor }) =>
    `linear-gradient(-70deg, ${
      rightColor || "#f7d34a"
    } 0% 48%, #204034 52% 100%)`};
`;

const Left = styled.div`
  flex: 1.1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
`;

const Right = styled.div`
  flex: 1.1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: transparent;
`;

const VSContainer = styled.div`
  background: #204034;
  color: #fff;
  padding: 0.2rem 1.2rem;
  border-radius: 0.3rem;
  /* font-weight: bold; */
  font-size: 0.65rem;
  margin: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  object-fit: contain;
  margin-bottom: 0.3rem;
`;

const TeamName = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
`;

const AppName = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-top: 1rem;
`;

const Card = ({ rightLogo, rightName, rightColor }) => (
  <MatchCard rightColor={rightColor}>
    <Left>
      <Logo src={MpiloLogo} alt="Mpilo Ndlovu FC" />
      <TeamName>Mpilo Ndlovu FC</TeamName>
    </Left>
    <VSContainer>VS</VSContainer>
    <Right>
      <Logo src={rightLogo} alt={rightName} />
      <AppName>{rightName}</AppName>
    </Right>
  </MatchCard>
);

export default Card;
