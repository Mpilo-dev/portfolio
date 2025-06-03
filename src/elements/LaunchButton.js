import * as React from "react";
import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

const LaunchButton = styled.button`
  position: absolute;
  top: calc(65% + 50px);
  left: 50%;
  transform: translateX(-50%);
  background: ${(props) => props.bgColor || "#F8D448"};
  color: ${(props) => (props.bgColor === "#F8D448" ? "#000000" : "white")};
  border: none;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 20;

  @media (max-width: ${breakpoints.tabletSM}px) {
    padding: 6px 18px;
    font-size: 12px;
    border-radius: 16px;
    top: calc(65% + 40px);
  }

  &:hover {
    background: ${(props) =>
      props.bgColor === "#F8D448" ? "#e6c23f" : "#a28ad9"};
    transform: translateX(-50%) scale(1.05);
  }
`;

const StyledLaunchButton = ({ bgColor, onClick }) => {
  const handleClick = () => {
    if (bgColor === "#F8D448") {
      window.open("https://www.khumbula.site", "_blank");
    } else if (bgColor === "#916AE3") {
      window.open("https://www.marry-me.online", "_blank");
    }
  };

  return (
    <LaunchButton bgColor={bgColor} onClick={handleClick}>
      Launch App
    </LaunchButton>
  );
};

export default StyledLaunchButton;
