import React from "react";
import {
    AppRegistry,
    YellowBox,
    StatusBar,
    View,
} from "react-native";
import { name as appName } from "./app.json";
import { Routes, Splash } from "./src/pages";

const App = () => (
	<View style={{ flex: 1 }}>
		<StatusBar barStyle="light-content" backgroundColor="#FFF" />
		<Routes />
	</View>
);

YellowBox.ignoreWarnings([
	"cycle",
	"deprecated",
	"Debugger",
	"Remote",
]);

AppRegistry.registerComponent(appName, () => App);
