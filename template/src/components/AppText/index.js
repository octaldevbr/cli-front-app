import styled from "styled-components/native";

const Text = styled.Text`
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme, color }) => theme[color] || color};
    text-align: ${({ align }) => align};
    margin-bottom: 5px;
    margin-top: 0px;
`;
// font-family: "Montserrat-Regular";

export default Text;

Text.defaultProps = {
	selectable: false,
	align: "left",
	color: "TextColor"
}
