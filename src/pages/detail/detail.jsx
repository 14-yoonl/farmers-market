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
    <div>
      <Section>
        <div style={{ display: "flex" }}>
          <SelectTable data={data} />
        </div>
        <Tab />
      </Section>
    </div>
  );
};

const Section = styled.div`
  width: 100%;
  padding: 72px 144px;
`;
export default DetailPage;
