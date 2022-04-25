import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "../src/assets/styles";

export default function TaskItem({ task, deleteTask, onCompleteTask }) {
  return (
    <View style={styles.taskItem}>
      <TouchableOpacity onPress={() => onCompleteTask(task.id)}>
        {task.status ? (
          <Image
            source={require("./../src/assets/img/check_circle.png")}
            style={styles.addingBtnIcon}
          />
        ) : (
          <Image
            source={require("./../src/assets/img/uncheck_circle.png")}
            style={styles.addingBtnIcon}
          />
        )}
      </TouchableOpacity>
      <Text
        style={{
          ...styles.taskName,
          textDecorationLine: task.status ? "line-through" : "none",
        }}
      >
        {task.title}
      </Text>
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => deleteTask(task.id)}
      >
        <Image
          source={require("./../src/assets/img/remove_circle.png")}
          style={styles.deleteBtnIcon}
        />
      </TouchableOpacity>
    </View>
  );
}
