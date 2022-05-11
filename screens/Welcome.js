import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { COLOR } from "../src/assets/styles";
import { Actions } from "react-native-router-flux";

export default function Welcome({ navigation }) {
	useEffect(() => {
		setTimeout(() => Actions.login(), 1800);
	}, []);

	return (
		<View style={styles.container}>
			<Image
				source={require("../src/assets/img/avatar.png")}
				style={styles.splashLogo}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLOR.mainColor,
	},
	splashLogo: {
		width: 150,
		height: 150,
	},
});
