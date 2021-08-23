import React, { useState } from "react";
import styled from "styled-components";
import Icon from "./icon";

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
        <div>총{(count * 20000).toLocaleString()} 원</div>
      </div>
      <div className="btns">
        <Button style={btnStyle("cart")}>
          <Icon src="cart" fill="white" size="16" />
          <span> 장바구니</span>
        </Button>
        <Button style={btnStyle("direct")}>
          <Icon src="handcart" fill="white" size="16" />
          <span> 바로구매</span>
        </Button>
      </div>
    </Container>
  );
};

const btnStyle = (type) => {
  if (type === "cart") {
    return {
      backgroundColor: "#f75454",
      color: "white",
    };
  } else if (type === "direct") {
    return {
      backgroundColor: "#111111",
      color: "white",
    };
  }
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
  .btns {
    display: flex;
    justify-content: space-evenly;
  }
`;
const Button = styled.div`
  width: 45%;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export default CountButton;
