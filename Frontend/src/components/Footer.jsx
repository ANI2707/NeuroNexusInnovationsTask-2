import { GitHub, LinkedIn, MailOutline, Room, YouTube } from '@mui/icons-material';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
background-color:#EEEEEE;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
margin-left:6%;
`;
const Logo = styled.h1``;
const Description = styled.p`
margin: 20px 0px;
`;
// const SocialContainer = styled.div`
// display: flex;
// `;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;
const Center = styled.div`
flex: 1;
padding: 20px;
`;
const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;
const Right = styled.div`    
    flex:1;
    padding: 20px;
`;
const ContactItem = styled.div`
margin-bottom:20px;
display: flex;
align-items:center;
`;
const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Quizer</Logo>
                <Description>
                Embark on a journey of knowledge with our engaging quiz app! Test your intellect across a diverse range of topics, from general trivia to specialized subjects. Challenge friends or go solo, as our app seamlessly blends fun and learning. With a user-friendly interface and a variety of quizzes, it's the perfect platform to spark curiosity and expand your horizons                </Description>
                {/* <SocialContainer>
                    <SocialIcon color="55ACEE">
                        <a href=""><LinkedIn /></a>
                    </SocialIcon>
                    <SocialIcon color="222831">
                        <a href=""><GitHub /></a>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <a href=""><YouTube /></a>
                    </SocialIcon>
                </SocialContainer> */}
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Register</ListItem>
                    <ListItem>Login</ListItem>
                    <ListItem>Features</ListItem>
                    <ListItem>Help</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} />
                    India
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} />
                    abc@abc.com
                </ContactItem>
                {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
            </Right>
        </Container>
    )
}

export default Footer