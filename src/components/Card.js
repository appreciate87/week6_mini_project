import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Card(props) {
  const navigate = useNavigate();
  const { list } = useSelector((state) => state.postReducer);
  console.log(list)
    const lists = list?.map((value, index)=> {
      console.log(value.postId)
        return <StCard key={index} onClick={()=>(navigate(`/detail/${value.postId}/${index}`))}>
                    <h1>{value.title}</h1>
                    <h1>{value.content}</h1>
                    <h1>{value.postId}</h1>                  
                </StCard>
     })
  return (
    <StWrap>
        {lists}
    </StWrap>
  )
}



const StWrap = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 500px;
    gap: 10px;
`;

const StCard= styled.div`
    width: 100%;
    height: 100%;
    margin: 50px;
    border-radius: 40px;
    background-color: white;
    font-family: 'DungGeunMo';
`;