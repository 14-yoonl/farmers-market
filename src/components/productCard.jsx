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
      <img src={data.thumbnail} alt="thumbnail" className="image" />
      <div className="name tag">{data.name}</div>
      <div className="price tag">{data.price.toLocaleString()}원</div>
    </Contaier>
  );
};

const Contaier = styled.div`
  margin: 0 8px;
  margin-bottom: 24px;
  .image {
    width: 360px;
    aspect-ratio: 1/1.5;
  }
  .tag {
    margin: 4px 0;
  }
`;

export default ProductCard;
