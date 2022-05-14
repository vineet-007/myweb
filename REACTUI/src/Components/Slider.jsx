import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { useState } from 'react';
import styled from 'styled-components'
import {sliderItems} from "../data"
import { mobile } from '../responsive';

const Container = styled.div`
width: 100%;
height: 100vh;
overflow: hidden;
display: flex;
position: relative;
${mobile({display: "none"})}
`
const Arrow = styled.div`
top: 0;
bottom: 0;
margin: auto;
position: absolute;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.5;
z-index: 2;
`;
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw)
`
const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
flex: 1;
height: 100%;
width: 100%;
`
const Image = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`
const Title = styled.h1`
font-size: 60px;
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-width: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if(direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
            <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop now</Button>
            </InfoContainer>
            </Slide>
            ))}
            
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>

      
    </Container>
  )
}

export default Slider
