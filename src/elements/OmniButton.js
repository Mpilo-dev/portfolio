import * as React from "react";
import styled from "styled-components";

const SkewedButton = styled.button`
  outline: none;
  border: none;
  text-decoration: none;
  display: inline;
  background: var(--green);
  color: var(--white);
  font-size: smaller;
  padding: 0.35rem 1.5rem;
  text-align: center;
  cursor: pointer;
  transform: skewX(-30deg);

  /* Hover effect */
  &:hover {
    transform: scale(1);
  }

  /* Click effect */
  &:active {
    background: lightgreen;
  }
`;

const OmmiButton = ({ text }) => {
  return (
    <>
      <SkewedButton>{text}</SkewedButton>
    </>
  );
};

export default OmmiButton;
