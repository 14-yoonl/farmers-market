import React, { useState } from "react";
import DetailDesc from "../pages/detail/detailDesc";
import DetailQnA from "../pages/detail/detailQnA";
import DetailReview from "../pages/detail/detailReview";
import styled from "styled-components";

const TabComponent = () => {
  const menuList = {
    0: <DetailDesc />,
    1: <DetailQnA />,
    2: <DetailReview />,
  };
  const [tabIndex, setIndex] = useState(0);
  return (
    <Container>
      <div className="menuBar">
        <ul className="tabs">
          <li
            className={tabIndex === 0 ? "active" : ""}
            onClick={() => setIndex(0)}
          >
            상세 정보
          </li>
          <li
            className={tabIndex === 1 ? "active" : ""}
            onClick={() => setIndex(1)}
          >
            QnA
          </li>
          <li
            className={tabIndex === 2 ? "active" : ""}
            onClick={() => setIndex(2)}
          >
            제품 리뷰
          </li>
        </ul>
      </div>
      <div className="contentArea">{menuList[tabIndex]}</div>
    </Container>
  );
};

const Container = styled.div`
  .menuBar {
    width: 100%;
    margin: 1rem 0;
    background-color: rgba(0, 0, 0, 0.1);
    justify-content: space-between;
  }
  .tabs {
    display: flex;
    justify-content: space-between;
    li {
      width: 33%;
      font-size: 1rem;
      text-align: center;
      font-weight: 700;
      display: inline-block;
      padding: 1rem;
      &:hover {
        cursor: pointer;
      }
      &.active {
        background-color: black;
        color: white;
      }
    }
  }

  .tabs li.active {
  }
`;
export default TabComponent;
