import React             from "react";
import { ThemeProvider } from "styled-components/native";
import theme             from "../helpers/theme";
import * as Pages        from "./";
import * as Modals       from "../modals";
import {
    ModalProvider,
    Modal
} from "@octaldev/react-modal/native";
import {
    RouterProvider,
    Route,
} from "@octaldev/react-router";

const Routes = () => {
	return (
		<ThemeProvider theme={ theme }>
            <ModalProvider>
                <Modal name="About" component={ Modals.About }/>
            </ModalProvider>

			<RouterProvider initial="Home">
	            <Route path="Home" component={ Pages.Home }/>
	        </RouterProvider>
		</ThemeProvider>
	);
};

export default Routes
