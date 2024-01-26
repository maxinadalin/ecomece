import { combineReducers } from "redux";
import auth from "./auth";
import Alert from "./alert";
import Categories from "./categories";

export default combineReducers({
    auth,
    Alert,
    Categories,
    
    
})