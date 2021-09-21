import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "../../components/navigationBar";
import Icon from "../../components/icon";
const Cart = () => {
  const cartList = useSelector((store) => store.cartReducer);
  // const [listItems, setItems] = useState(cartList);
  const handleCheck = (e) => {
    console.log(e.target.checked);
  };
  return (
    <>
      <NavBar />
      <Container>
        <div className="pageTitle">SHOPPING CART</div>
        <div className="listSection">
          <div className="productTitle">제품</div>
          <div>
            <input type="checkbox" id="cb1" onChange={handleCheck} />
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 275px;
  .pageTitle {
    /* min-width: 1200px; */
    text-align: center;
    font-size: 48px;
    font-weight: 900;
    color: #282828;
    margin-bottom: 72px;
  }
  .listSection {
    /* min-width: 1200px; */

    .productTitle {
      font-size: 24px;
      font-weight: 700;
      border-bottom: 1px solid #f7545460;
      padding-bottom: 16px;
    }
  }
`;
export default Cart;
