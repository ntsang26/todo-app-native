import { StyleSheet } from "react-native";

export const COLOR = {
	mainColor: "#6c5ce7",
	textColor: "#333",
};

export const styles = StyleSheet.create({
	parentContainer: {
		flex: 1,
		backgroundColor: "white",
	},
	headerContainer: {
		height: 180,
		width: "100%",
		backgroundColor: COLOR.mainColor,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	headerImage: {
		height: 100,
		width: 100,
		borderRadius: 9999,
		backgroundColor: "#a29bfe",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	addingTaskContainer: {
		flexDirection: "row",
		paddingHorizontal: 20,
		marginTop: 15,
		alignItems: "center",
	},
	addingInput: {
		borderWidth: 0.95,
		borderRadius: 10,
		height: 40,
		flex: 1,
		paddingLeft: 15,
	},
	addingBtn: {
		marginLeft: 15,
	},
	addingBtnIcon: {
		width: 30,
		height: 30,
	},
	titleBodyContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		marginTop: 20,
	},
	titleBodyText: {
		color: COLOR.mainColor,
		fontWeight: "bold",
		fontSize: 16,
	},
	taskContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 10,
	},
	taskItem: {
		height: 50,
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		borderWidth: 0.75,
		borderRadius: 10,
		backgroundColor: "white",
	},
	taskName: {
		marginLeft: 20,
		fontSize: 18,
		fontWeight: "600",
		color: COLOR.mainColor,
	},
	deleteBtn: {
		height: 50,
		width: 50,
		position: "absolute",
		right: "3%",
		alignItems: "center",
		justifyContent: "center",
	},
	deleteBtnIcon: {
		width: 20,
		height: 20,
	},
	editBtn: {
		position: "absolute",
		top: "50%",
		right: 40,
		transform: [{ translateY: -13 }],
	},
	editBtnIcon: {
		width: 25,
		height: 25,
	},
	modalEdit: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		paddingHorizontal: 30,
		paddingVertical: 50,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	closeModalBtn: {
		position: "absolute",
		top: 12,
		right: 14,
	},
	closeModalBtnIcon: {
		width: 15,
		height: 15,
	},
	editTaskInput: {
		borderWidth: 1,
		height: 40,
		width: 200,
		paddingHorizontal: 20,
		borderTopLeftRadius: 15,
		borderBottomLeftRadius: 15,
		borderColor: "#27ae60",
	},
	doneBtn: {
		marginLeft: 0,
		backgroundColor: "#27ae60",
		paddingHorizontal: 25,
		paddingVertical: 6.7,
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
	},
});
