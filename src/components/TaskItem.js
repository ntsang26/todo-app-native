import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles, COLOR } from "../assets/styles";
import { taskActionTypes } from "../../actions/actionTypes";

export default function TaskItem({ task, dispatch }) {
	return (
		<View style={styles.taskItem}>
			<TouchableOpacity
				onPress={() => {
					dispatch({
						type: taskActionTypes.TOGGLE_ONE_TASK,
						taskId: task.taskId,
						completed: !task.completed,
					});
				}}
			>
				{task.completed ? (
					<Image
						source={require("../assets/img/check_circle.png")}
						style={styles.addingBtnIcon}
					/>
				) : (
					<Image
						source={require("../assets/img/uncheck_circle.png")}
						style={styles.addingBtnIcon}
					/>
				)}
			</TouchableOpacity>
			<Text
				style={{
					...styles.taskName,
					textDecorationLine: task.completed ? "line-through" : "none",
					color: task.completed ? "#999" : COLOR.mainColor,
				}}
			>
				{task.taskName}
			</Text>
			<TouchableOpacity
				style={styles.deleteBtn}
				onPress={() => {
					dispatch({
						type: taskActionTypes.DELETE_ONE_TASK,
						taskId: task.taskId,
					});
				}}
			>
				<Image
					source={require("../assets/img/remove_circle.png")}
					style={styles.deleteBtnIcon}
				/>
			</TouchableOpacity>
		</View>
	);
}
