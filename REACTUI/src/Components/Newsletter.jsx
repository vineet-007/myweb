import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'
const Container = styled.div`
height: 70vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Desc = styled.div`
font-size: 24px;
font-weight: 200;
margin-bottom: 20px;
${mobile({textAlign: "center"})}
`
const InputContainer = styled.div`
width: 50%;
background-color: white;
height: 37px;
justify-content: space-between;
display: flex;
border: 1px solid lightgray;
${mobile({width: "80%"})}
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex:0.7;
border: none;
background-color: teal;
color: white;
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates for your favorite profucts !</Desc>
      <InputContainer>
           <Input placeholder="Your Email"/>
           <Button>
               <Send/>
           </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
