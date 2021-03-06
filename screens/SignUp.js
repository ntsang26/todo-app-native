import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	TextInput,
	Image,
	TouchableOpacity,
	StatusBar,
	useWindowDimensions,
	Alert,
} from "react-native";
import React from "react";
import { Actions } from "react-native-router-flux";

export default function SignUp({ navigation }) {
	const image = {
		uri: "https://images.unsplash.com/photo-1595206133361-b1fe343e5e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
	};
	const windowHeight = useWindowDimensions().height;

	return (
		<View style={{ ...styles.container, minHeight: Math.round(windowHeight) }}>
			<StatusBar barStyle="default" />
			<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.image}
				imageStyle={{ borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}
			/>
			<Text style={styles.loginText}>Sign Up</Text>
			<View style={styles.loginContainer}>
				<View style={styles.formInput}>
					<Image
						source={require("../src/assets/img/user.png")}
						style={styles.inputIcon}
					/>
					<TextInput
						placeholder="Username"
						placeholderTextColor={"#666"}
						style={styles.input}
					/>
				</View>
				<View style={{ ...styles.formInput, marginTop: 20 }}>
					<Image
						source={require("../src/assets/img/password.png")}
						style={styles.inputIcon}
					/>
					<TextInput
						placeholder="Password"
						placeholderTextColor={"#666"}
						style={styles.input}
						secureTextEntry={true}
					/>
				</View>
				<View style={{ ...styles.formInput, marginTop: 20 }}>
					<Image
						source={require("../src/assets/img/password.png")}
						style={styles.inputIcon}
					/>
					<TextInput
						placeholder="Confirm password"
						placeholderTextColor={"#666"}
						style={styles.input}
						secureTextEntry={true}
					/>
				</View>
				<TouchableOpacity
					style={styles.loginBtn}
					onPress={() => {
						Actions.login();
						Alert.alert(
							"Thành công!",
							"Bạn đã đăng ký thành công. Vui lòng đăng nhập để tiếp tục!",
						);
					}}
				>
					<Text style={styles.loginBtnText}>Sign Up</Text>
				</TouchableOpacity>
				<View style={styles.socialLogin}>
					<TouchableOpacity onPress={() => navigation.navigate("Login")}>
						<Text style={styles.signUpText}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	image: {
		height: 250,
	},
	loginText: {
		textAlign: "center",
		marginVertical: 40,
		fontSize: 30,
		fontWeight: "700",
	},
	loginContainer: {
		flex: 1,
		paddingHorizontal: 30,
	},
	input: {
		paddingLeft: 50,
		paddingVertical: 15,
		borderWidth: 2,
		borderColor: "#eee",
		fontWeight: "700",
	},
	inputIcon: {
		width: 20,
		height: 20,
		position: "absolute",
		top: 20,
		left: 20,
	},
	forgotText: {
		textAlign: "center",
		marginTop: 15,
		marginBottom: 40,
		fontWeight: "700",
		fontSize: 13,
		color: "#ff3f34",
	},
	loginBtn: {
		backgroundColor: "#ff3f34",
		paddingVertical: 15,
		borderRadius: 30,
		marginBottom: 10,
		marginTop: 30,
	},
	loginBtnText: {
		textAlign: "center",
		textTransform: "uppercase",
		fontSize: 17,
		fontWeight: "700",
		color: "#fff",
	},
	socialLogin: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	signUpText: {
		fontWeight: "700",
		color: "#333",
		fontSize: 15,
		textDecorationLine: "underline",
	},
});
