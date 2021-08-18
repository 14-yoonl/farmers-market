import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();
  const [isLogin, setLogin] = useState(false);

  const goToLogin = () => {
    history.push("/login");
  };
  return (
    <Container>
      {/* 로그인되어있지않을때 */}
      {isLogin ? (
        <div>
          <Navmenu>마이페이지</Navmenu>
          <Navmenu>장바구니</Navmenu>
        </div>
      ) : (
        <div>
          <Navmenu onClick={goToLogin}>로그인</Navmenu>
          <Navmenu>|</Navmenu>
          <Navmenu>회원가입</Navmenu>
          <Navmenu>|</Navmenu>
          <Navmenu>장바구니</Navmenu>
        </div>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: flex-end;
  padding: 24px 144px;
  color: white;
`;
const Navmenu = styled.span`
  margin: 0 8px;

  &:hover {
    cursor: pointer;
  }
`;
export default Navigation;
