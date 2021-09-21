import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Icon from "../../components/icon";
import { addCart } from "../../store/actions";
import { postCartItem } from "../../Api";
import axios from "axios";
const CountButton = ({ data }) => {
  console.log("data", data);
  const [count, setCount] = useState(1);
  const token = localStorage.getItem("token");
  console.log("token>>>>", token);

  const dispatch = useDispatch();
  const handleProductCount = () => {
    if (count <= 1) {
      return alert("최소 주문 가능 수량은 1개 이상입니다.");
    } else {
      setCount(count - 1);
    }
  };

  const handleAddCartItem = () => {
    const body = {
      productId: data.id,
      quantity: count,
    };
    axios("http://172.30.1.52:8000/orders/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      data: body,
    });
    // postCartItem(token, body).then((res) => console.log(">>>>>>>>", res));
    // console.log("hi");
  };
  const obj = Object.assign(data, { count });

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
        <div>₩ {(count * 20000).toLocaleString()}</div>
      </div>
      <div className="btns">
        <Button
          style={btnStyle("cart")}
          onClick={() => {
            dispatch(addCart(obj));
            handleAddCartItem();
          }}
        >
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
      marginRight: "8px",
    };
  } else if (type === "direct") {
    return {
      backgroundColor: "#111111",
      color: "white",
      marginLeft: "8px",
    };
  }
};
const Container = styled.div`
  .countSection {
    margin: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 16px 8px 0 8px; */
  }
  .countBtn {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: white;
    .count {
      width: 48px;
      padding: 4px;
      text-align: center;
      margin: 0 4px;
    }
  }
  .btns {
    display: flex;
    justify-content: space-between;
  }
`;
const Button = styled.div`
  width: 50%;
  padding: 16px;
  text-align: center;
  border-radius: 8px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export default CountButton;
