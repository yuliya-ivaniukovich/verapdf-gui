import { combineReducers } from 'redux';
import configuration from './configuration';
import filesToValidate from './filesToValidate';
import validationProfiles from './validationProfiles';

export const rootReducer = combineReducers({
    configuration,
    filesToValidate,
    validationProfiles
});
