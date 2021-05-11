import styled from "styled-components/native";
import Text from "../AppText";

export const TouchableOpacity = styled.TouchableOpacity`
    height: 50px;
    width: 100%;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.primary };

    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;
`;

export const Label = styled(Text)`
    font-size: 15px;
    line-height: 18px;
    margin: 5px;
    width: 100%;
    text-align: center;
	color: ${({ theme }) => theme.white };
`;
