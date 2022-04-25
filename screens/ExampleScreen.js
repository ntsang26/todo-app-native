import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ExampleScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.topLeft}>
				<Text style={styles.topText}>Top Left</Text>
			</View>
			<View style={styles.center}>
				<Text style={styles.centerText}>Center</Text>
			</View>
			<View style={styles.bottomRight}>
				<Text style={styles.bottomText}>Bottom Right</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#e3fdff",
	},
	topLeft: {
		width: "100%",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "red",
		marginTop: 20,
		padding: 10,
	},
	topText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#62b5cd",
	},
	center: {
		width: 200,
		height: 200,
		borderRadius: 9999,
		backgroundColor: "#2dff57",
		justifyContent: "center",
		alignItems: "center",
	},
	centerText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#62b5cd",
	},
	bottomRight: {
		width: "100%",
		backgroundColor: "#58adc2",
		borderRadius: 10,
		marginBottom: 20,
		padding: 10,
		alignItems: 'flex-end'
	},
  bottomText: {
    fontSize: 20,
		fontWeight: "bold",
		color: "#fff",
  }
});
