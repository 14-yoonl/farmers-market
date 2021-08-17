import React from "react";
import NavigationBar from "../components/navigationBar";
import NameCard from "../components/nameCard";
import styled from "styled-components";
import ItemList from "../components/itemList";

const MainPage = () => {
  return (
    <div>
      <NavigationBar />
      <Section>
        <NameCard />
        <ItemList />
      </Section>
    </div>
  );
};

const Section = styled.div`
  display: flex;
  margin: 72px 144px;
`;
export default MainPage;
