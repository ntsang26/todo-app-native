import {
	View,
	Text,
	TouchableOpacity,
	Image,
	// Modal,
	// TextInput,
} from "react-native";
import React, { useState } from "react";
import { styles, COLOR } from "../assets/styles";
import { taskActionTypes } from "../../actions/actionTypes";
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler } from 'react-native-reanimated'

export default function TaskItem({ task, dispatch }) {
	// const [modalVisibled, setModalVisibled] = useState(false);

	// const toggleModal = () => {
	// 	setModalVisibled(true);
	// };



	return (
		// <PanGestureHandler onGestureEvent={panGesture}>
			<Animated.View style={styles.taskItem}>
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
				{/* <TouchableOpacity
					style={styles.editBtn}
					onPress={() => {
						// dispatch({
						// 	type: taskActionTypes.DELETE_ONE_TASK,
						// 	taskId: task.taskId,
						// });
						toggleModal();
					}}
				>
					<Image
						source={require("../assets/img/edit.png")}
						style={styles.editBtnIcon}
					/>
				</TouchableOpacity> */}
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
				{/* Modal Edit Todo */}
				{/* <Modal
					visible={modalVisibled}
					animationType="fade"
					transparent={true}
					onRequestClose={() => {
						setModalVisibled(!modalVisibled);
					}}
				>
					<View style={styles.modalEdit}>
						<View style={styles.modalView}>
							<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
								<TextInput value={task.taskName} style={styles.editTaskInput} />
								<TouchableOpacity style={styles.doneBtn}>
									<Text style={{fontSize: 20, color: 'white'}}>&#10003;</Text>
								</TouchableOpacity>
							</View>
							<TouchableOpacity
								onPress={() => {
									setModalVisibled(!modalVisibled);
								}}
								style={styles.closeModalBtn}
							>
								<Image
									source={require("../assets/img/close.png")}
									style={styles.closeModalBtnIcon}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</Modal> */}
			</Animated.View>
		// </PanGestureHandler>
	);
}
