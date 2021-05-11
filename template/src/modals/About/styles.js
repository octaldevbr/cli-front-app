import React  from "react";
import styled from "styled-components/native";
import {
    AppButton,
    AppTitle,
} from "../../components/";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.white };
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 6px;
    width: 70%;
    height: 150px;
`;

export const Title = styled(AppTitle)`
    margin: 0px;
    margin-top: 10px;
`;

export const Button = styled(AppButton)`
    margin: 0px;
    margin-bottom: 0px;
    width: 100%;
`;
