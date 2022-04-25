/* eslint-disable */
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import Header from "../components/Header";
import TaskItem from "../components/TaskItem";
import { styles } from "../src/assets/styles";

const TASK_STATUS = {
  DONE: 1,
  NOT_DONE: 0,
};

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const MainScreen = () => {
  const [tasks, setTasks] = useState([]); // {id: 1, title: "check email", status: }
  const [taskTitle, setTaskTitle] = useState("");

  const addTask = () => {
    let newTask = [
      ...tasks,
      {
        id: getRandomInt(0, 10000),
        title: taskTitle,
        status: TASK_STATUS.NOT_DONE,
      },
    ];
    if (taskTitle !== "") setTasks(newTask);
    setTaskTitle("");
  };

  const deleteTask = (taskId) => {
    let newTask = tasks.filter((item) => item.id !== taskId);
    setTasks(newTask);
  };

  const onCompleteTask = (taskId) => {
    let newTask = tasks.map((item) => {
      if (item.id === taskId) {
        return {
          ...item,
          status: !item.status,
        };
      } else {
        return item;
      }
    });
    setTasks(newTask);
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.parentContainer}>
        {/* header */}
        <Header />

        {/* Adding task */}
        <View style={styles.addingTaskContainer}>
          <TextInput
            placeholder={"Your task..."}
            style={styles.addingInput}
            value={taskTitle}
            onChangeText={(title) => setTaskTitle(title)}
          />
          <TouchableOpacity style={styles.addingBtn} onPress={addTask}>
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
            {tasks.filter((item) => item.status).length}/{tasks.length}
          </Text>
        </View>

        {/* Task list */}
        <FlatList
          data={tasks}
          renderItem={({ item, idx }) => (
            <TaskItem
              task={item}
              deleteTask={deleteTask}
              onCompleteTask={onCompleteTask}
            />
          )}
          keyExtractor={(item, idx) => String(idx)}
          style={{ paddingHorizontal: 20, marginVertical: 20}}
        />
      </View>
    </View>
  );
};

export default MainScreen;
