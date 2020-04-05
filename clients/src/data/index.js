import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import contacts from "./reducer/contacts";

const store = createStore(contacts, applyMiddleware(thunk));

export default store;
