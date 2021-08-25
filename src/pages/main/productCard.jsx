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
      <div className="name tag">{data.name}</div>
      <div>중량 "{data.weight}kg"</div>
      <div className="price tag">{Number(data.price).toLocaleString()}원</div>
    </Contaier>
  );
};

const Contaier = styled.div`
  &:hover {
    cursor: pointer;
    .image {
      box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
    }
  }
  .image {
    border-radius: 8px;
    width: 240px;
    aspect-ratio: 1/1.5;
  }
  .tag {
    margin: 4px 0;
  }
`;

export default ProductCard;
