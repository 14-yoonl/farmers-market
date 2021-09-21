import React from "react";
import styled from "styled-components";

const DetailQnA = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="box red">hi3</div>
        <div className="box blue">hi3</div>
        <div className="box green">hi3</div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  background-color: purple;
  padding: 48px;
  overflow: scroll;
  .wrapper {
    display: flex;

    width: 100vw;
  }
  .box {
    width: 30%;

    /* aspect-ratio: 1/1; */
  }
  .red {
    width: 40%;
    background-color: red;
  }
  .green {
    background-color: green;
  }
  .blue {
    background-color: blue;
  }
`;

export default DetailQnA;
