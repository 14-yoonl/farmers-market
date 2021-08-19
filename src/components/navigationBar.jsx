import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const token = localStorage.getItem("token");
  const history = useHistory();
  const [isLogin, setLogin] = useState(token);

  const goToLogin = () => {
    history.push("/login");
  };
  const logOut = () => {
    alert("로그아웃 되었습니다.");
    setLogin();
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <Container>
      {/* 로그인되어있지않을때 */}
      {isLogin ? (
        <div>
          <Navmenu>마이페이지</Navmenu>
          <Navmenu>|</Navmenu>
          <Navmenu>장바구니</Navmenu>
          <Navmenu>|</Navmenu>
          <Navmenu onClick={logOut}>로그아웃</Navmenu>
        </div>
      ) : (
        <div>
          <Navmenu onClick={goToLogin}>로그인</Navmenu>
          <Navmenu>|</Navmenu>
          <Navmenu>장바구니</Navmenu>
        </div>
      )}
      {/* 리덕스로 유저 정보 관리하면 유저 프로필 사진 가져오기 */}
      {/* <ProfileImg>
        <img src="" alt=""/>
      </ProfileImg> */}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
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
const ProfileImg = styled.div`
  position: absolute;
  top: 8px;
  right: 72px;
  width: 48px;
  aspect-ratio: 1/1;
  background-color: skyblue;
  border-radius: 50%;
`;
export default Navigation;
