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
    <Section>
      <SelectTable data={data} />
      <Tab />
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  padding: 0 72px;
`;
export default DetailPage;
