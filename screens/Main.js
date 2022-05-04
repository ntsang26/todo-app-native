import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	FlatList,
	StatusBar,
	Alert,
	ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { taskActionTypes } from "../actions/actionTypes";
import Header from "../src/components/Header";
import TaskItem from "../src/components/TaskItem";
import { styles, COLOR } from "../src/assets/styles";

const Main = ({ navigation }) => {
	const dispatch = useDispatch();
	const [tasks, setTasks] = useState([]); // {id: 1, title: "check email", status: }
	const [taskTitle, setTaskTitle] = useState("");
	const [loading, setLoading] = useState(true);
	const taskReducers = useSelector((state) => state.taskReducers);
	// console.log(tasks)

	useEffect(() => {
		dispatch({ type: taskActionTypes.GET_LIST_TASK });
	}, [dispatch]);

	useEffect(() => {
		if (taskReducers.type) {
			if (taskReducers.type === taskActionTypes.GET_LIST_TASK_SUCCESS) {
				if (taskReducers.data) {
					setTasks(taskReducers.data);
					setLoading(false);
				}
			} else if (taskReducers.type === taskActionTypes.GET_LIST_TASK_FAILED) {
				setTasks([]);
				setLoading(false);
			} else if (taskReducers.type === taskActionTypes.ADD_NEW_TASK_SUCCESS) {
				dispatch({ type: taskActionTypes.GET_LIST_TASK });
			} else if (
				taskReducers.type === taskActionTypes.TOGGLE_ONE_TASK_SUCCESS
			) {
				dispatch({ type: taskActionTypes.GET_LIST_TASK });
			}
		}
	}, [taskReducers]);

	return (
		<View style={{ flex: 1 }}>
			<StatusBar barStyle="default" />
			<View style={styles.parentContainer}>
				{/* header */}
				<Header navigation={navigation} />

				{/* Adding task */}
				<View style={styles.addingTaskContainer}>
					<TextInput
						placeholder={"Your task..."}
						style={styles.addingInput}
						value={taskTitle}
						onChangeText={(title) => setTaskTitle(title)}
					/>
					<TouchableOpacity
						style={styles.addingBtn}
						onPress={() => {
							if (taskTitle.length === 0) {
								Alert.alert("Thông báo", "Vui lòng điền thông tin!");
							} else {
								dispatch({
									type: taskActionTypes.ADD_NEW_TASK,
									taskName: taskTitle,
								});
								setTaskTitle("");
							}
						}}
					>
						<Image
							source={require("./../src/assets/img/plus.png")}
							style={styles.addingBtnIcon}
						/>
					</TouchableOpacity>
				</View>

				{/* Title of body */}
				<View style={styles.titleBodyContainer}>
					<Text style={styles.titleBodyText}>Today's task</Text>
					<Text style={styles.titleBodyText}>
						{tasks.filter((item) => item.completed).length}/{tasks.length}
					</Text>
				</View>

				{/* Task list */}
				{loading ? (
					<ActivityIndicator
						size={"large"}
						color={COLOR.mainColor}
						style={{ marginTop: 30 }}
					/>
				) : (
					<FlatList
						data={tasks}
						renderItem={({ item, idx }) => (
							<TaskItem key={idx} task={item} dispatch={dispatch} />
						)}
						keyExtractor={(item, idx) => String(idx)}
						style={{ paddingHorizontal: 20, marginVertical: 20 }}
					/>
				)}
			</View>
		</View>
	);
};

export default Main;
