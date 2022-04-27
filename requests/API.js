import axios from "axios";
import { API_URL } from "./APIConfig";

function* requestAPI(endpoint, method = "GET", params) {
	try {
		return yield axios({
			method: method,
			url: `${API_URL}/${endpoint}`,
			data: params,
		});
	} catch (err) {
		console.log(err);
	}
}

function* requestGetAPI(url, params) {
	return yield requestAPI(url, "GET", params);
}

function* requestPostAPI(url, params) {
	return yield requestAPI(url, "POST", params);
}

function* requestPutAPI(url, params) {
	return yield requestAPI(url, "PUT", params);
}

function* requestDeleteAPI(url, params) {
	return yield requestAPI(url, "DELETE", params);
}

const API = {
	requestGetAPI,
	requestPostAPI,
	requestPutAPI,
	requestDeleteAPI,
};

export default API;
