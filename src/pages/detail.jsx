import React from "react";
import NavigationBar from "../components/navigationBar";
import NameCard from "../components/nameCard";
import SelectTable from "../components/selectTable";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  return (
    <div>
      <NavigationBar />
      <Section>
        <NameCard />
        <SelectTable data={data} />
      </Section>
    </div>
  );
};

const Section = styled.div`
  display: flex;
  width: 100%;
  padding: 72px 144px;
`;
export default DetailPage;
