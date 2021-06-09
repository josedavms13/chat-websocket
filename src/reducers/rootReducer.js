import {combineReducers} from "redux";

import messagesReducer from "./messagesReducer";
import userReducer from "./userReducer";
import homeReducer from "./homeReducer";


export default combineReducers({
    userReducer : userReducer,
    message : messagesReducer,
    homeReducer : homeReducer,

})