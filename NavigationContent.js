import React from "react";
import Login from "./screens/Login";
import Main from "./screens/Main";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";
import { Router, Scene, Stack } from "react-native-router-flux";

export default function NavigationContent() {
	return (
		<Router>
			<Stack key="root" hideNavBar={true}>
				<Scene key="welcome" component={Welcome} initial={true} ></Scene>
				<Scene key="login" component={Login}></Scene>
				<Scene key="signUp" component={SignUp}></Scene>
				<Scene key="main" component={Main}></Scene>
			</Stack>
		</Router>
	);
}
