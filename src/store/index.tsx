import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { reducers } from "./reducers/index";

export const store = createStore(reducers, applyMiddleware(thunk, logger));
