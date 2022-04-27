import { all } from "redux-saga/effects";
import {
	watchCompleteTask,
	watchDeleteTask,
	watchGetListTasks,
	watchPostAddTask,
} from "./taskSagas";

export default function* rootSagas() {
	yield all([
		watchGetListTasks(),
		watchPostAddTask(),
		watchCompleteTask(),
		watchDeleteTask(),
	]);
}
