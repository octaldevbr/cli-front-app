import React from "react";
import { showModal } from "@octaldev/react-modal/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
    Container,
    Button,
    Title,
    Row,
    // Icon,
} from "./styles";

const Home = () => {
    const onPress = () => showModal("About");

    return (
        <Container>
            <Row>
                <Title>This is home</Title>
                <Icon name="home" size={ 28 } color="white"/>
            </Row>
            <Button onPress={ onPress }>Abrir Modal</Button>
        </Container>
    )
}

export default Home;
