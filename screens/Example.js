import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function ExampleScreen() {
	const [count, setCount] = useState(0);

	return (
		<View style={styles.container}>
			<Text>Count Machine</Text>
			<Text style={{fontSize: 20}}>{count}</Text>
			<TouchableOpacity onPress={() => setCount(count + 1)}>
				<Text style={{padding: 15, backgroundColor: 'red', color: 'white', borderRadius: 20}}>Increase</Text>
			</TouchableOpacity>
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
		backgroundColor: "#e3fdff",
	},
});
