import { View, Text } from "react-native";
import React from "react";
import Login from "./screens/Login";
import Main from "./screens/Main";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function NavigationContent() {
	return (
		<Stack.Navigator
			initialRouteName="Welcome"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="Welcome" component={Welcome} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Main" component={Main} />
			<Stack.Screen name="SignUp" component={SignUp} />
		</Stack.Navigator>
	);
}
