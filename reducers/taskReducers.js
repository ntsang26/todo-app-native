import { taskActionTypes } from "../actions/actionTypes";

const tasks = {
	message: "",
};

const taskReducers = (state = tasks, action) => {
	switch (action.type) {
		case taskActionTypes.GET_LIST_TASK_SUCCESS:
			return {
				type: taskActionTypes.GET_LIST_TASK_SUCCESS,
				data: action.data,
				status: action.message,
			};
		case taskActionTypes.GET_LIST_TASK_FAILED:
			return {
				type: taskActionTypes.GET_LIST_TASK_FAILED,
				status: action.message,
			};
		case taskActionTypes.ADD_NEW_TASK_SUCCESS:
			return {
				type: taskActionTypes.ADD_NEW_TASK_SUCCESS,
				data: action.data,
			};
		case taskActionTypes.ADD_NEW_TASK_FAILED:
			return {
				type: taskActionTypes.ADD_NEW_TASK_FAILED,
				status: action.message,
			};
		case taskActionTypes.TOGGLE_ONE_TASK_SUCCESS:
			return {
				type: taskActionTypes.TOGGLE_ONE_TASK_SUCCESS,
				data: action.data,
			};
		case taskActionTypes.TOGGLE_ONE_TASK_FAILED:
			return {
				type: taskActionTypes.TOGGLE_ONE_TASK_FAILED,
				status: action.message,
			};
		case taskActionTypes.DELETE_ONE_TASK_SUCCESS:
			return {
				type: taskActionTypes.TOGGLE_ONE_TASK_SUCCESS,
				data: action.data,
			};
		case taskActionTypes.DELETE_ONE_TASK_FAILED:
			return {
				type: taskActionTypes.DELETE_ONE_TASK_FAILED,
				status: action.message,
			};
		default:
			return state;
	}
};

export default taskReducers;
