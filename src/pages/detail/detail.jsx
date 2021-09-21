import React from "react";
import NavigationBar from "../../components/navigationBar";
import NameCard from "../../components/nameCard";
import SelectTable from "../../components/selectTable";
import Tab from "../../components/tabComponent";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <>
      <NavigationBar />
      <Container>
        <NameCard />
        <Section>
          <SelectTable data={data} />
          <Tab />
        </Section>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0 144px;
`;

const Section = styled.div`
  width: 100%;
`;
export default DetailPage;
