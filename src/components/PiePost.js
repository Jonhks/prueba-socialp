import React from 'react';
import styled from 'styled-components';


const PiePost = () => {
  return ( 
    <StyledPie>
      <StyledbuttonCancel>Cancel post</StyledbuttonCancel>
      <StyledbuttonPrev>Preview post before publishing</StyledbuttonPrev>
    </StyledPie>
   );
}

const StyledbuttonPrev = styled.button`
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

const StyledbuttonCancel = styled.button`
    text-decoration: none;
    padding: 3px;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: 300;
    font-size: 1.3rem;
    border-radius: 15px;
    border: 3px double #4791f3;
    color: #4791f3;
`

const StyledPie = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
`

export default PiePost;