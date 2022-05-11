import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../assets/styles";
import { Actions } from "react-native-router-flux";

export default function Header({ navigation }) {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.headerImage}>
				<Image
					source={require("../assets/img/avatar.png")}
					style={{ width: 60, height: 60 }}
				/>
			</View>
			<View style={{ marginLeft: 20 }}>
				<Text style={{ color: "white" }}>Let's start your day with</Text>
				<Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
					BOG Simple To Do App
				</Text>
				<TouchableOpacity
					onPress={() => {
						Actions.login();
					}}
				>
					<Text
						style={{
							fontStyle: "italic",
							textDecorationLine: "underline",
							fontSize: 16,
						}}
					>
						Logout
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
