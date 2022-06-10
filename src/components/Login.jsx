import React from "react"
import Styled from "styled-components";

const Login = () => {

    return (
    <>
        <Wrap>
            <ContentsWrap>
                <H1>로그인</H1>
                <ID>아이디</ID>
                <IdInput type="text" placeholder="이메일형식으로 입력해주세요" />
                <PW>비밀번호</PW>
                <PwInput type="password" placeholder="패스워드를 입력해주세요"/>
            </ContentsWrap>
                <ButtonWrap>
                    <Button>로그인</Button>
                </ButtonWrap>
        </Wrap>
    </>
        
    )
}


const Wrap = Styled.div`
    margin-top: 200px;
    margin: auto;
`;

const ContentsWrap = Styled.div`
    margin-bottom: 30px;
    margin-top: -300px;
`;

const H1 = Styled.h1`
    font-size: 50px;
    font-family: 'DungGeunMo';
`;

const ID = Styled.p`
    margin-left: -400px;
    font-size: 30px;
    font-weight: bold;
    font-family: 'DungGeunMo';
`;

const PW = Styled.p`
    margin-left: -380px;
    font-size: 30px;
    font-weight: bold;
    font-family: 'DungGeunMo';
`;

const IdInput = Styled.input`
    width: 500px;
    height: 80px;
    border-radius: 15px;
    font-size: 20px;
    border-color: #FFFDE7;
    font-family: 'DungGeunMo';
    
`;
const PwInput = Styled.input`
    width: 500px;
    height: 80px;
    border-radius: 15px;
    font-size: 20px;
    border-color: #FFFDE7;
    font-family: 'DungGeunMo';
    
`;

const ButtonWrap = Styled.div`
    margin-top: 10px;
`;

const Button = Styled.div`
    width: 500px;
    height: 80px;
    background-color: #FDD600;
    border-color: #FDD835;       
    padding-top: 35px;
    border-radius: 15px;
    font-size: 40px;
    font-family: 'DungGeunMo';
    margin: auto;
    box-shadow: 2px 2px 2px 2px gray;
`;

export default Login;