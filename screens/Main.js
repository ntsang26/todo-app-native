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
	ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { taskActionTypes } from "../actions/actionTypes";
import Header from "../src/components/Header";
import TaskItem from "../src/components/TaskItem";
import { styles, COLOR } from "../src/assets/styles";
import { FontAwesome } from "@expo/vector-icons";

const Main = ({ navigation }) => {
	const dispatch = useDispatch();
	const [tasks, setTasks] = useState([]);
	const [taskTitle, setTaskTitle] = useState("");
	const [loading, setLoading] = useState(true);
	const taskReducers = useSelector((state) => state.taskReducers);

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
				setLoading(true);
			} else if (
				taskReducers.type === taskActionTypes.TOGGLE_ONE_TASK_SUCCESS
			) {
				dispatch({ type: taskActionTypes.GET_LIST_TASK });
				// setLoading(true);
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
						<FontAwesome name="plus-circle" size={30} color={COLOR.mainColor} />
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
					<ScrollView style={{ paddingHorizontal: 20, marginVertical: 10 }}>
						{tasks.map((item, idx) => (
							<TaskItem key={idx} task={item} dispatch={dispatch} />
						))}
					</ScrollView>
				)}
			</View>
		</View>
	);
};

export default Main;
