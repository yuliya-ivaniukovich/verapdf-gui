import { combineReducers } from "redux";
import configuration from "./configuration";
import filesToValidate from "./filesToValidate";
import validationProfilesValues from "./validationProfilesValues";

export const rootReducer = combineReducers({
    configuration,
    filesToValidate,
    validationProfilesValues
});
