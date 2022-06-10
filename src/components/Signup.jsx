import React from "react";
import Styled from "styled-components";

const SignUp = () => {

    return (
    <>
        <Wrap>
            <H1>회원가입</H1>
            <ContentsWrap>
                <ID>아이디</ID>
                <Input type="text" placeholder="이메일형식으로 입력해주세요"/>
                <NickName>닉네임</NickName>
                <Input type="text" placeholder="닉네임을 입력해주세요" />
                <PW1>비밀번호</PW1>
                <Input type="password" placeholder="패스워드를 입력해주세요"/>
                <PW2>비밀번호 확인</PW2>
                <Input type="password" placeholder="패스워드를 입력해주세요"/>
                <Button>가입하기</Button> 
            </ContentsWrap>
        </Wrap>
    </>
        
    )
}

const Wrap = Styled.div`
    margin: 130px auto;
`;

const ContentsWrap = Styled.div`
    margin-bottom: 30px;
`;

const H1 = Styled.h1`
    font-size: 50px;
    font-family: 'DungGeunMo';
`;

const ID = Styled.p`
    margin-left: -450px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'DungGeunMo';
`;

const NickName = Styled.p`
    margin-left: -450px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'DungGeunMo';
`;

const PW1 = Styled.p`
    margin-left: -420px;
    font-size: 20px;
    font-weight: bold;
    font-family: 'DungGeunMo';
`;

const PW2 = Styled.p`
margin-left: -370px;
font-size: 20px;
font-weight: bold;
font-family: 'DungGeunMo';
`;

const Input = Styled.input`
    width: 500px;
    height: 60px;
    border-radius: 15px;
    font-size: 20px;
    font-family: 'DungGeunMo';
    border-color: #FFFDE7;
    
`;

const Button = Styled.div`
    width: 500px;
    height: 90px;
    background-color: #FDD600;
    border-color: #FDD600;
    font-size: 40px;
    font-family: 'DungGeunMo';
    padding-top: 40px;
    border-radius: 15px;
    margin-top: 20px;
    box-shadow: 2px 2px 2px 2px gray;
`;

export default SignUp;