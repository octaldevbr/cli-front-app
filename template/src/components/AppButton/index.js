import React from "react";
import { Vibration } from "react-native";
import {
	TouchableOpacity,
	Label,
} from "./styles";

const Button = ({ labelStyle, children, ...rest }) => {
	const onPress = () => {
		rest.onPress();
		Vibration.vibrate(10);
	}

	return (
		<TouchableOpacity { ...rest } onPress={ onPress }>
			{(["string", "number"].includes(typeof children)) ? (
				<Label style={ labelStyle } selectable={ false }>{ children }</Label>
			) : (
				children
			)}
		</TouchableOpacity>
	);
}

export default Button;

Button.defaultProps = {
	onPress: () => null
}
