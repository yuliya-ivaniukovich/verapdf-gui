import { combineReducers } from 'redux';
import configuration from './configuration';
import filesToValidate from './filesToValidate';
import validationProfiles from './validationProfiles';
import job from './job';

export const rootReducer = combineReducers({
    job,
    configuration,
    filesToValidate,
    validationProfiles
});
