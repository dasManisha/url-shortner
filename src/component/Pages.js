
import React,{useState} from 'react'
// import {Wrapper} from './Pages.styles'
import styled from 'styled-components'

const Pages = ({setInputValue}) => {
 
  const [value, setValue] = useState("");

  const handleClick = ()=> {
    setInputValue(value);
    setValue("");
  }


  return (
    <Wrapper>
    <TitleSection>
    <Title>Shorten your <Long>Long </Long>
      URLs like never before</Title>
    </TitleSection>
    <SubTitle>copy your long boring url Paste it below. Then you get it right? </SubTitle>
  
  <Div>
  <span>Your long Url</span>
   <SearchInput type='search' placeholder='https://yoursite.com/this-is-a-very-large-url'
   value={value}
   onChange={(e) => setValue(e.target.value)}
   ></SearchInput>
   <Button onClick={handleClick}>Shorten URL</Button>
  </Div>
   
    </Wrapper>
  )
}


const Wrapper = styled.div`
text-align: center;
font-size: 1.5rem;
padding:10px;

`
const TitleSection =  styled.div`
display:flex;
justify-content: center;
align-items: center;
`
const Title = styled.h1`
color: orange;
`
const Long = styled.span`
color: white;
font-size: 600;
font-size: 3.25rem;

`
const SubTitle = styled.div`
color: white ;
`
const Div = styled.div`
text-align: center;
gap:16px;
color: white;
margin-top: 50px;
`

const SearchInput = styled.input`
width:50%;
margin: 50px;
font-size: 1rem;
padding: 10px 0px 10px 0px;
border-radius:8px;
border: none;
outline: none;
text-align: center;
`

const Button = styled.button`
font-size: 1rem;
line-height: 2.25;
background-color: orange;
color:white;
padding: 10px 10px 10px 10px;
border-radius: 8px;
border: none;

:active{
  background-color: lightcoral;
}
`
export default Pages