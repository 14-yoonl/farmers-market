import React from "react";
import styled from "styled-components";
const CountButton = () => {
  return (
    <Container>
      <div className="countBtn">hi</div>
      <div>total-price</div>
    </Container>
  );
};

const Container = styled.div`
  margin: 16px 0;
  background-color: red;
  display: flex;
  justify-content: space-between;
  padding: 16px 8px;
  .countBtn {
    background-color: white;
  }
`;

export default CountButton;
