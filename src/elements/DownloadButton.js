import * as React from "react";
import styled from "styled-components";
import cvFile from "../assets/dummy.pdf";

const Button = styled.a`
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: inline;
  background-color: var(--black);
  color: var(--white);
  font-size: 0.6rem;
  padding: 0.5rem 1rem;
  text-align: center;
  border-radius: 0.75rem;

  &:hover {
    background-color: darkgray;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }

  /* Click effect */
  &:active {
    transform: scale(1.2);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
`;

const DownloadButton = () => {
  return (
    <Button
      href={cvFile}
      download="dummy.pdf"
      onClick={(e) => e.stopPropagation()}
    >
      Download CV
    </Button>
  );
};

export default DownloadButton;
