import { ADD_NEW_TASK, TOGGLE_ONE_TASK } from './actionTypes';

export const addNewTask = (task) => {
  return {
    type: ADD_NEW_TASK,
    taskId: task.id,
    taskName: task.taskName
  }
}

export const toggleTask = (taskId) => {
  return {
    type: TOGGLE_ONE_TASK,
    taskId: taskId
  }
}