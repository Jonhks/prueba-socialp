import React from 'react';
import styled from 'styled-components';
import Img from '../img/image.png'


const ImgPost = () => {
  return ( 
    <StyledContainer>
      <StyledFigure>
        <StyledFigcaption>Bakery day</StyledFigcaption>
        <StyledImg src={Img} alt="Fotografia"/>
      </StyledFigure>
      <StyledDivInput>
        <StyledInput 
          type="text"
          placeholder="Write your postmessage"
        />
        <StyledButton>Edit image</StyledButton>
      </StyledDivInput>
      <StyledCount>
        <StyledEmoti>😀</StyledEmoti>
        <p>0/<StyledSpan>250</StyledSpan></p>
      </StyledCount>
    </StyledContainer>
   );
}

const StyledSpan = styled.span`
  color: #1d8cd6;
`

const StyledEmoti = styled.p`
  margin-right: 3%;
`

const StyledCount = styled.div`
  width: 65%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 2%;
`

const StyledButton = styled.button`
  margin: 2%;
  text-decoration: none;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 300;
  font-size: 1.3rem;
  border-radius: 15px;
  border: 3px double #4791f3;
  background-color: #4791f3;
  color: white;
`

const StyledInput = styled.input`
  width: 50%;
  padding: 1%;
  border-radius: 5%;
  border-inline: none;
  border: 2px solid #646464;
  margin: 3% 0 3% 0;
`

const StyledDivInput = styled.div`
  width: 100%;
  height: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

const StyledFigcaption = styled.figcaption`
  margin: 1%;
`

const StyledImg = styled.img`
  width: 100%;
`

const StyledFigure = styled.figure`
  width: 70%;
  box-shadow: 0 7px 10px rgba(0, 0, 0, .7);
  margin: 3%;
`

const StyledContainer = styled.div`
  width: 60%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2%;
  box-shadow: 0 3px 5px rgba(0, 0, 0, .7);
`
 
export default ImgPost;