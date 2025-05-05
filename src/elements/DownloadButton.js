import * as React from "react";
import styled from "styled-components";

const Button = styled.button`
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

  /* Hover effect */
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
    <>
      <Button>Download CV</Button>
    </>
  );
};

export default DownloadButton;
