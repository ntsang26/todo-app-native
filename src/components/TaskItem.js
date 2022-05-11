import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { styles, COLOR } from "../assets/styles";
import { taskActionTypes } from "../../actions/actionTypes";
import {
	PanGestureHandler,
	PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
	useAnimatedGestureHandler,
	useAnimatedStyle,
	useSharedValue,
	withSpring,
	withTiming,
} from "react-native-reanimated";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default function TaskItem({ task, dispatch }) {
	const translateX = useSharedValue(0);

	const panGesture = useAnimatedGestureHandler({
		onStart: (_, ctx) => {
			ctx.startX = translateX.value;
		},
		onActive: (e, ctx) => {
			const y = ctx.startX + e.translationX;
			if (y < 0) {
				translateX.value = y;
			}
		},
		onEnd: () => {
			if (translateX.value < -50) {
				translateX.value = withSpring(-55);
			} else {
				translateX.value = withSpring(0);
			}
		},
	});

	const rStyle = useAnimatedStyle(() => ({
		transform: [{ translateX: translateX.value }],
	}));

	return (
		<View style={styles.taskContainer}>
			<TouchableOpacity
				style={styles.deleteBtn}
				onPress={() => {
					dispatch({
						type: taskActionTypes.DELETE_ONE_TASK,
						taskId: task.taskId,
					});
				}}
			>
				<FontAwesome name="trash" size={24} color="red" />
			</TouchableOpacity>

			<Animated.View style={[styles.taskItem, rStyle]}>
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
						<FontAwesome name="check-circle" size={28} color="#2ecc71" />
					) : (
						<FontAwesome name="circle-thin" size={28} color="#888" />
					)}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						dispatch({
							type: taskActionTypes.TOGGLE_ONE_TASK,
							taskId: task.taskId,
							completed: !task.completed,
						});
					}}
				>
					<Text
						style={{
							...styles.taskName,
							textDecorationLine: task.completed ? "line-through" : "none",
							color: task.completed ? "#999" : COLOR.mainColor,
						}}
					>
						{task.taskName}
					</Text>
				</TouchableOpacity>
				<PanGestureHandler onGestureEvent={panGesture}>
					<Animated.View
						style={{
							position: "absolute",
							right: 10,
							justifyContent: "center",
							alignItems: "center",
							width: 20
						}}
					>
						<Entypo name="dots-three-vertical" size={24} color="#636e72" />
					</Animated.View>
				</PanGestureHandler>
			</Animated.View>
		</View>
	);
}
