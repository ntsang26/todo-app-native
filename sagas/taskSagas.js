import API from "../requests/API";
import { APIConfig } from "../requests/APIConfig";
import { put, takeEvery } from "redux-saga/effects";
import { taskActionTypes } from "../actions/actionTypes";

function* getListTasks() {
	let response = yield API.requestGetAPI(APIConfig.GET_TASKS);

	if (response && response.status === 200) {
		yield put({
			type: taskActionTypes.GET_LIST_TASK_SUCCESS,
			data: response.data,
			status: response.status,
		});
	} else {
		yield put({
			type: taskActionTypes.GET_LIST_TASK_FAILED,
			message: response ? response.message : "",
		});
	}
}

export function* watchGetListTasks() {
	yield takeEvery(taskActionTypes.GET_LIST_TASK, getListTasks);
}

function* postAddTask({ taskName }) {
	let response = yield API.requestPostAPI(APIConfig.ADD_TASK, {
		taskName,
	});

	if (response && (response.status === 201 || response.status === 200)) {
		yield put({
			type: taskActionTypes.ADD_NEW_TASK_SUCCESS,
			data: response.data,
			status: response.status,
		});
	} else {
		yield put({
			type: taskActionTypes.ADD_NEW_TASK_FAILED,
			message: response ? response.message : "",
		});
	}
}

export function* watchPostAddTask() {
	yield takeEvery(taskActionTypes.ADD_NEW_TASK, postAddTask);
}

function* completeTask({ taskId, completed }) {
	let response = yield API.requestPutAPI(`${APIConfig.COMPLETE_TASK}/${taskId}`, {
		taskId,
		completed,
	});

	if (response && (response.status === 201 || response.status === 200)) {
		yield put({
			type: taskActionTypes.TOGGLE_ONE_TASK_SUCCESS,
			data: response.data,
			status: response.status,
		});
	} else {
		yield put({
			type: taskActionTypes.TOGGLE_ONE_TASK_FAILED,
			message: response ? response.message : "",
		});
	}
}

export function* watchCompleteTask() {
	yield takeEvery(taskActionTypes.TOGGLE_ONE_TASK, completeTask);
}

function* deleteTask({ taskId }) {
	let response = yield API.requestDeleteAPI(`${APIConfig.DELETE_TASK}/${taskId}`, {
		taskId,
	});

	if (response && (response.status === 201 || response.status === 200)) {
		yield put({
			type: taskActionTypes.DELETE_ONE_TASK_SUCCESS,
			data: response.data,
			status: response.status,
		});
	} else {
		yield put({
			type: taskActionTypes.DELETE_ONE_TASK_FAILED,
			message: response ? response.message : "",
		});
	}
}

export function* watchDeleteTask() {
	yield takeEvery(taskActionTypes.DELETE_ONE_TASK, deleteTask);
}
