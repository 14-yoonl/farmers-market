import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Icon from "../components/icon";
import styled from "styled-components";
const { Kakao } = window;
const Login = () => {
  const history = useHistory();
  const kakaoLoginHandler = () => {
    Kakao.Auth.login({
      success: (authObj) => {
        axios("http://172.30.1.22:8000/users/kakao", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: authObj.access_token,
          },
        }).then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.accessToken);
          if (res.status === 200 && res.data.accessToken) {
            alert(`${res.data.username}님 안녕하세요`);
            history.push("/");
          }
        });
      },
    });
  };
  return (
    <Container>
      <div className="loginCard">
        <div className="hooking">
          솔정농원과 <br /> 함께하는 <br /> 방법
        </div>
        <KakaoButton onClick={kakaoLoginHandler}>
          <Icon src="kakao" size="32" />
          <div className="btnText">카카오 로그인 하기</div>
        </KakaoButton>
        <UnSignedUserBtn onClick={() => history.push("/")}>
          <Icon src="truck" size="32" />
          <div className="btnText">비회원으로 둘러보기</div>
        </UnSignedUserBtn>
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  height: 100vh;
  .loginCard {
    padding: 48px 32px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background-color: white;
    .hooking {
      font-size: 48px;
      line-height: 72px;
      font-weight: 600;
      margin-bottom: 24px;
    }
  }
`;
const KakaoButton = styled.div`
  margin: 16px 0;
  border-radius: 4px;
  background-color: #ffe812;
  padding: 16px;
  width: 272px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  .btnText {
    margin: 0 4px;
  }
`;

const UnSignedUserBtn = styled.div`
  border-radius: 4px;
  background-color: #cccccc;
  padding: 16px;
  width: 272px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  .btnText {
    margin: 0 4px;
  }
`;
export default Login;
