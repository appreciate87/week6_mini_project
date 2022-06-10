import React from "react";
import Styled from "styled-components";


const Main = () => {

    return (
        <>
            <KingWrap>
                <Title>
                    <H1><J>J</J>avascript<H1>                
                    </H1><J>S</J>tudy</H1>
                </Title>
                <CardsWrap>
                    <Cards>상급</Cards>
                    <Cards>중급</Cards>
                    <Cards>하급</Cards>
                </CardsWrap>
            </KingWrap>
        </>
        
    )
}


const KingWrap = Styled.div`
    display: column;        
    margin: 90px auto;
`;
const Title = Styled.div`
    margin: auto;
    margin-top: 2px;
`;

const H1 = Styled.h1`
    margin-left: 50px;
    
    font-size: 60px;
`;

const J = Styled.span`
    color: #FDD835;
`;

const CardsWrap = Styled.div`
    margin: auto;
    width: 100vw;
    height: 70vh;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: space-between;
`;

const Cards = Styled.div`
    background-color: #FDD600;
    width: 500px;
    height: 300px;
    margin: 10px auto;
    border-radius: 20px;
    font-size: 30px;
    font-weight: bold;
    
    
    
`;


export default Main;