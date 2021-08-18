import React, { useState } from "react";
import styled from "styled-components";
import Icon from "./icon";
import Button from "./button";
const CountButton = () => {
  const [count, setCount] = useState(1);

  const handleProductCount = () => {
    if (count <= 1) {
      return alert("최소 주문 가능 수량은 1개 이상입니다.");
    } else {
      setCount(count - 1);
    }
  };
  return (
    <Container>
      <div className="countSection">
        <div className="countBtn">
          <div onClick={handleProductCount}>
            <Icon src="minus" size="20" />
          </div>
          <div className="count">{count}</div>
          <div onClick={() => setCount(count + 1)}>
            <Icon src="add" size="20" />
          </div>
        </div>
        <div>
          총<strong>{(count * 20000).toLocaleString()}</strong> 원
        </div>
      </div>
      {count > 0 ? <Button label="장바구니" /> : null}
    </Container>
  );
};

const Container = styled.div`
  .countSection {
    margin: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 8px 0 8px;
    border-top: 1px dashed rgba(0, 0, 0, 0.2);
  }

  .countBtn {
    display: flex;
    align-items: center;
    padding: 0 4px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: white;
    .count {
      width: 56px;
      padding: 4px;
      text-align: center;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      border-right: 1px solid rgba(0, 0, 0, 0.2);
      margin: 0 4px;
    }
  }
`;

export default CountButton;
