import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: #f6f8f6;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  /* margin: 1.5rem 0; */
  box-shadow: 0 2px 8px #e0e0e0;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
  color: #204034;
`;

const List = styled.ul`
  padding-left: 1.2rem;
  margin: 0;
`;

const ListItem = styled.li`
  color: #444;
  font-size: 1rem;
  margin-bottom: 0.7rem;
`;

const DetailsCard = ({ title, details }) => (
  <CardContainer>
    <Title>{title}</Title>
    <List>
      {details?.map((item, idx) => (
        <ListItem key={idx}>{item}</ListItem>
      ))}
    </List>
  </CardContainer>
);

export default DetailsCard;
