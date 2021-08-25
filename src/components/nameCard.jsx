import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const NameCard = () => {
  const history = useHistory();
  return (
    <Container>
      <div className="nametag" onClick={() => history.push("/")}>
        솔 정 농 원
      </div>
      <div className="tabs">
        {/* 클릭한 탭 아래 보더 효과 or 글자색 변경 추가하기 */}
        <div>전체상품</div>
        <div>공지사항</div>
        <div>1:1질문</div>
      </div>
      <div className="info">
        {/* 클릭한 탭 아래 보더 효과 or 글자색 변경 추가하기 */}
        <div className="tel">
          tel. <br /> 010-8538-4256
        </div>
        <div className="address">
          address. <br /> 경상북도 청도군 청도읍 유호리 460-1
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  border-top: 2px solid #f7545480;
  width: 15%;
  min-width: 240px;
  .nametag {
    padding: 36px 0;
    font-size: 32px;
    font-weight: 600;
    &:hover {
      cursor: pointer;
    }
  }
  .tabs {
    color: rgba(0, 0, 0, 0.5);
    font-size: 16px;
    border-top: 1px solid #f7545480;
    padding: 36px 0;
    div {
      margin: 16px 0;
    }
  }
  .info {
    border-top: 1px solid #f7545480;
    padding: 36px 0;
    color: rgba(0, 0, 0, 0.5);
    .tel,
    .address {
      margin-bottom: 16px;
      line-height: 24px;
    }
  }
`;

export default NameCard;
