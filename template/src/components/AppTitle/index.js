import styled from "styled-components/native";

const Title = styled.Text`
    font-size: 30px;
    line-height: 30px;
    color: ${({ theme, color }) => theme[color] || color };
    text-align: ${({ align }) => align };
    margin-bottom: ${({ marginOff }) => !marginOff ? 15 : 0 }px;
    font-weight: 700;
`;

export default Title;

Title.defaultProps = {
    color: "primary",
    align: "left",
    marginOff: false,
}
