import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./productCard";
import { getProductList } from "../../Api";
import NavBar from "../../components/navigationBar";
import NameCard from "../../components/nameCard";
const MainPage = () => {
  const [listData, setData] = useState();
  useEffect(() => {
    getProductList().then((res) => setData(res.data.products));
  }, []);
  const _DATA = [
    {
      id: 1,
      name: "3x4 설향",
      thumbnailImage: "https://i.ibb.co/G5qdB9p/20191013-064847.jpg",
      price: 20000,
      weight: "1",
    },
    {
      id: 2,
      name: "3x5 설향",
      thumbnailImage: "https://i.ibb.co/G5qdB9p/20191013-064847.jpg",
      price: 20000,
      weight: "1",
    },
    {
      id: 3,
      name: "4x5 설향",
      thumbnailImage: "https://i.ibb.co/G5qdB9p/20191013-064847.jpg",
      price: 20000,
      weight: "1",
    },
    {
      id: 4,
      name: "4x5 설향",
      thumbnailImage: "https://i.ibb.co/G5qdB9p/20191013-064847.jpg",
      price: 20000,
      weight: "1",
    },
    {
      id: 5,
      name: "4x5 설향",
      thumbnailImage: "https://i.ibb.co/G5qdB9p/20191013-064847.jpg",
      price: 20000,
      weight: "1",
    },
    {
      id: 6,
      name: "4x5 설향",
      thumbnailImage: "https://i.ibb.co/G5qdB9p/20191013-064847.jpg",
      price: 20000,
      weight: "1",
    },
  ];
  return (
    <>
      <NavBar />
      <Container>
        <NameCard />
        <CardList>
          {_DATA.map((el) => (
            <ProductCard key={el.id} data={el} />
          ))}
        </CardList>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  padding: 0 144px;
`;
const CardList = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
  }
  @media only screen and (max-width: 1440px) and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
  }
  row-gap: 36px;
`;
export default MainPage;
