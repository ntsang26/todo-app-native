import Animated, {
	useSharedValue,
	useAnimatedStyle,
} from "react-native-reanimated";
import { Button } from "react-native";

function Box() {
	const offset = useSharedValue(0);

	const animatedStyles = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: offset.value * 255 }],
		};
	});

	return (
		<>
			<Animated.View
				style={[
					{ width: 50, height: 50, backgroundColor: "red" },
					animatedStyles,
				]}
			/>
			<Button onPress={() => (offset.value = Math.random())} title="Move" />
		</>
	);
}

export default Box;
