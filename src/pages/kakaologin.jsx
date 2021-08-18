import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import KaKaoLogin from "react-kakao-login";

const kakaologin = () => {
  // const history = useHistory();
  const responseSuccess = (res) => {
    console.log(res);
    localStorage.setItem("token", res.response.access_token);
    const TOKEN = localStorage.getItem("token");
    fetch("/users/kakao", {
      method: "POST",
      headers: {
        authorization: TOKEN,
        "Content-Type": "application/json",
      },
    }).then((response) => console.log(response));
    // .then((response) => console.log(response));
  };

  const responseFail = () => {
    console.log("Fail");
  };
  return (
    <Container>
      <Desc>
        카카오로 로그인하고 <br />
        다양한 상퓸을 만나보세요
      </Desc>
      <KaKaoBtn
        jsKey={"05bf4a21da2d250ca7f636c9c9501e92"}
        onSuccess={(res) => responseSuccess(res)}
        onFailure={responseFail}
        buttonText="Kakao"
      />
    </Container>
  );
};

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Desc = styled.div`
  font-size: 36px;
  line-height: 72px;
  margin-bottom: 16px;
`;
export default kakaologin;
