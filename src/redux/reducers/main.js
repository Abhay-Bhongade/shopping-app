import {combineReducers} from "redux";
import { cartreducer } from "./reducer";
import {wishreducer} from './reducer';
import { viewreducer } from "./reducer";
import { AuthReducer } from "./authReducer";


const rootred = combineReducers({
    cartreducer, wishreducer, viewreducer,
    auth: AuthReducer
});


export default rootred
