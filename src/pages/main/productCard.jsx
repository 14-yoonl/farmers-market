import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
const ProductCard = ({ data }) => {
  const history = useHistory();
  const productId = data.id;
  const goToDetail = () => {
    history.push({ pathname: `/detail/${productId}`, state: { data } });
  };
  return (
    <Contaier onClick={goToDetail}>
      <img src={data.thumbnailImage} alt="thumbnail" className="image" />
      <div className="name">
        <div>{data.name}</div>
        <div>/ "{data.weight}kg"</div>
      </div>
      <div className="price ">₩ {Number(data.price).toLocaleString()}</div>
    </Contaier>
  );
};

const Contaier = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .name {
    display: flex;
    margin: 16px 0 8px 0;
    font-size: 16px;
    color: #757575;
  }
  .price {
    font-size: 16px;
  }
  .image {
    border-radius: 8px;
    width: 240px;
    aspect-ratio: 1/1.25;
  }
`;

export default ProductCard;
