import React from "react";
import ProductCard from "./productCard";
import styled from "styled-components";
const ItemList = () => {
  const _DATA = [
    {
      id: 1,
      name: "3x4 설향",
      thumbnail: "https://i.ibb.co/G5qdB9p/20191013-064847.jpg",
      price: 20000,
    },
    {
      id: 2,
      name: "3x5 설향",
      thumbnail: "https://i.ibb.co/G5qdB9p/20191013-064847.jpg",
      price: 20000,
    },
    {
      id: 3,
      name: "4x5 설향",
      thumbnail: "https://i.ibb.co/G5qdB9p/20191013-064847.jpg",
      price: 20000,
    },
    {
      id: 4,
      name: "4x5 설향",
      thumbnail: "https://i.ibb.co/G5qdB9p/20191013-064847.jpg",
      price: 20000,
    },
  ];

  return (
    <Container>
      {_DATA.map((el) => (
        <ProductCard key={el.id} data={el} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: 24px;
`;
export default ItemList;
