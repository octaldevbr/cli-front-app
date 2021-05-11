import React from "react";
import {
    ActivityIndicator,
    Container,
} from "./styles";

const Loader = ({ active, size, full, ...rest }) => (active !== true) ? null : (
    <Container full={ full } { ...rest }>
        <ActivityIndicator/>
    </Container>
)

Loader.defaultProps = {
    color: "primary",
    active: true,
    size: "large",
};

export default Loader;
