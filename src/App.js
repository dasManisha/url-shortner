import './App.css';
import { useState } from 'react';
import LinkResult from './component/LinkResult';
import Pages from './component/Pages'
// import styled from 'styled-components';
import BackgroundAnimate from './component/BackgroundAnimate'

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <Pages setInputValue={setInputValue}/>
      <LinkResult inputValue={inputValue}/>
      <BackgroundAnimate/>
    </div>
  );
}

// const Div = styled.div`
// background-color: #1d2951;
// height: 100vh;
// `
export default App;
