import React from "react";
import {
    Container,
    Button,
    Title
} from "./styles";

const About = ({ closeModal }) => {
    return (
        <Container>
            <Title>About</Title>
            <Button onPress={ closeModal }>Fechar Modal</Button>
        </Container>
    )
}

export default About;
