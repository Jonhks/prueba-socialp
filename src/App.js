import styled from 'styled-components';
import Post from './components/Post'
import ImgPost from './components/ImgPost'
import PiePost from './components/PiePost'


function App() {
  return (
    <StyledApp>
      <StyledContainer>
        <Post />
        <ImgPost />
        <PiePost />
      </StyledContainer>
    </StyledApp>
  );
}


const StyledApp = styled.main`
  display: flex; 
  justify-content: center;
  align-items: center;
  height: 100vh;
  `

const StyledContainer = styled.section`
  padding: 1%;
  width: 60vw;
  height: 80vh;
  box-shadow: 0 7px 10px rgba(0, 0, 0, .7);
  display: flex;
  flex-wrap: wrap;
`

export default App;
