import React from 'react'

import styled from 'styled-components'


const Detail = () => {
  
  return (
    <>
    <Boxfather>
    <Boxdown>   
      <Boxslice>
      <Box>Title</Box>
      <Faker/>      
      </Boxslice>
      <NewBox>
        <SpahBox></SpahBox>
        <Button1>등록</Button1>
        <Button2>수정</Button2>
        <Good>👍</Good>
        <Coment>Coment</Coment>
        <SpahBox2></SpahBox2>
        <Button3>등록</Button3>
        <Button4>수정</Button4>
        <Button5>삭제</Button5>
      </NewBox>
    </Boxdown>
  </Boxfather>
  <PostsTitle>posts</PostsTitle>
  <Posts></Posts>
  </>
  
  )
}





const Boxfather = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const NewBox = styled.div`
  background-color: #FDD600;
  width: 1100px;
  height: 700px;
`


const Box = styled.div`
  flex: 3;
  background-color: #FDD600;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-family: 'DungGeunMo';
  font-weight: bold;
`;

const SpahBox = styled.div`
  background-color: white;
  margin-top: 100px;
  margin-left: 80px;
  width: 900px;
  height: 250px;
  border-radius: 30px;
  border-color: #FDD600;
  font-size: 40px;
  font-family: 'DungGeunMo';
  position: absolute;
  
`

const Coment = styled.p`
  position: absolute;
  margin-top: 450px;
  margin-left: 80px;
  font-size: 30px;
  font-weight: bold;
  font-family: 'DungGeunMo';
`

const SpahBox2 = styled.input`
  background-color: white;
  margin-top: 500px;
  margin-left: 80px;
  width: 900px;
  height: 100px;
  border-radius: 30px;
  border-color: #FDD600;
  font-size: 40px;
  font-family: 'DungGeunMo';
  
`

const Boxdown = styled.div`
  
  margin-top: 100px;
  
`;

const Boxslice = styled.div`
  background-color: white;
  display: flex;
  width: 1100px;
  height: 100px;
  /* border: 1px solid #000; */
  
`;

const Faker = styled.div`
  background-color: white;
  flex: 7;
`
const Good = styled.div`
  margin-left: 80px;
  margin-top: 360px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'DungGeunMo';
  position: absolute;
  font-size: 25px;
`

const Button1 = styled.div`
  margin-left: 850px;
  margin-top: 360px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'DungGeunMo';
  position: absolute;
  
`
const Button2 = styled.div`
  margin-left: 920px;
  margin-top: 360px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'DungGeunMo';
  position: absolute;
  
`

const Button3 = styled.div`
  margin-left: 780px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'DungGeunMo';
  position: absolute;
  
`
const Button4 = styled.div`
  margin-left: 850px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'DungGeunMo';
  position: absolute;
  
`
const Button5 = styled.div`
  margin-left: 920px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'DungGeunMo';
  position: absolute;
  
`
const Posts = styled.div`
  background-color: #FDD600;
  margin-top: 100px;
  margin-left: 400px;
  width: 1100px;
  height: 550px;
  border-radius: 30px;
  border-color: #FDD600;
  font-size: 40px;
  font-family: 'DungGeunMo';
  position: relative;
  
`

const PostsTitle = styled.div`
  margin-top: 40px;
  margin-left: 410px;
  font-size: 30px;
  font-weight: bold;
  font-family: 'DungGeunMo';
  position: absolute;
`

export default Detail