import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import { NavigationContainer } from "@react-navigation/native";
import NavigationContent from "./NavigationContent";
import createSagaMiddleware from "redux-saga";

import rootSagas from "./sagas/rootSagas";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<NavigationContent />
			</NavigationContainer>
		</Provider>
	);
}

sagaMiddleware.run(rootSagas);

export default App;
