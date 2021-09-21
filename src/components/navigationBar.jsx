import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Icon from "./icon";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const cartCount = useSelector((store) => store.cartReducer);
  const token = localStorage.getItem("token");
  const history = useHistory();
  const [isLogin, setLogin] = useState(token);

  const goToRoute = (path) => {
    history.push(`/${path}`);
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
        <>
          <Navmenu>
            <Icon src="user" fill="#757575" size="24" />
            <div>마이페이지</div>
          </Navmenu>
          <Navmenu onClick={() => goToRoute("cart")}>
            <Icon src="cart" fill="#757575" size="24" />
            <div>장바구니</div>
            {cartCount.length > 0 ? (
              <div className="cartCount">{cartCount.length}</div>
            ) : null}
          </Navmenu>
          <Navmenu onClick={logOut}>
            <Icon src="log_in" fill="#757575" size="24" />
            <div>로그아웃</div>
          </Navmenu>
        </>
      ) : (
        <>
          <Navmenu onClick={() => goToRoute("login")}>
            <Icon src="log_in" fill="#757575" size="24" />
            <div>로그인</div>
          </Navmenu>
          <Navmenu onClick={() => goToRoute("cart")}>
            <Icon src="cart" fill="#757575" size="24" />
            <div>장바구니</div>
            {cartCount.length > 0 ? (
              <div className="cartCount">{cartCount.length}</div>
            ) : null}
          </Navmenu>
        </>
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
  background-color: #f7545420;
  justify-content: flex-end;
  padding: 16px 144px;
  color: #757575;
  font-weight: 500;
  margin-bottom: 72px;
`;
const Navmenu = styled.span`
  text-align: center;
  position: relative;
  margin: 0 10px;

  &:hover {
    cursor: pointer;
  }
  .cartCount {
    width: 16px;
    height: 16px;
    font-size: 10px;
    color: white;
    font-weight: 400;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    right: 5px;
    top: -5px;
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
