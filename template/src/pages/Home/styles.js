import React  from "react";
import styled from "styled-components/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
    AppButton,
    AppTitle,
} from "../../components/";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.black };
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Title = styled(AppTitle)`
    margin-bottom: 0px;
    margin-right: 10px;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

export const Button = styled(AppButton)`
    width: 90%;
`;
