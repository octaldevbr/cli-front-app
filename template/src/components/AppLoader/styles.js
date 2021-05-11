import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    ${({ full }) => full ? "width: 100%;" : "" }
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs(({ color, size, ...props }) => ({
    ...props,
    color: props.theme[color] || color,
    size: Platform.OS === "ios" ? 30 : size,
}))``;
