import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
display: flex;
${mobile({flexDirection: "column"})}
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
margin:20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
display: flex;
align-items: center;
justify-content: center;
margin-right: 15px;
background-color: #${props=>props.color};
`
const Center = styled.div`
flex:1;
padding: 20px;
${mobile({display: "none"})}
`
const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 
`
const Right = styled.div`
flex:1;
padding: 20px;
${mobile({backgroundColor: "fff8f8"})}
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>VINEET.</Logo>
            <Desc>This was the solution to the problem I faced, I had mistakenly created an infinite loop by basically
                 nesting the parent component in the parent component itself </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                    </SocialIcon>  
                    <SocialIcon color="E4405F">
                    <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                    <Twitter/>
                    </SocialIcon >
                    <SocialIcon color="E60023">
                    <Pinterest/>
                    </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight: "10px"}}/>622 Dixie Path, South Lodon</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/>+1 234 56 78</ContactItem>
            <ContactItem><MailOutline style={{marginRight: "10px"}}/>contact@vineet.dev</ContactItem>
            <Payment src=" https://tse2.mm.bing.net/th?id=OIP.qxhLRiJE_zS2crkLTfTKVQHaBi&pid=Api&P=0&w=488&h=101"/>
        </Right>
    </Container>
  )
}

export default Footer
