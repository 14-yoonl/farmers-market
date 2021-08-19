import React, { useState } from "react";
import styled from "styled-components";
import CountButton from "./countButton";
const SelectTable = ({ data }) => {
  console.log(data);
  const [orderCount, setOrderCount] = useState(0);
  return (
    <Container>
      <img src={data.thumbnailImage} alt="thumbnail" className="image" />
      <div className="body">
        <div className="title">
          <div className="name">{data.name}</div>
          <div className="price">{data.price.toLocaleString()}원</div>
        </div>
        <div className="descSection">
          <p>어쩌구저쩌구 딸기설명 쏼라쏼라</p>
        </div>
        <div className="optionSection">
          <div>수량을 선택해주세요.</div>
          <div>
            <CountButton />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  .image {
    width: 480px;
    aspect-ratio: 1/1.5;
  }
  .body {
    width: 480px;
    margin-left: 48px;
    .title {
      font-size: 36px;
      color: rgba(0, 0, 0, 0.4);
      line-height: 72px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      font-weight: 300;
    }
    .descSection {
      padding: 36px 0;
      color: rgba(0, 0, 0, 0.4);
    }
    .optionSection {
      background-color: rgba(0, 0, 0, 0.05);
      padding: 16px 16px;
    }
  }
`;

export default SelectTable;
