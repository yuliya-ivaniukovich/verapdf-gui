import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import job, { jobEpic } from './job';
import configuration from './configuration';
import { profilesEpics } from './validationProfiles';
import validationProfiles from './validationProfiles';
import filesToValidate, { filesToValidateEpic } from './filesToValidate';

export const rootReducer = combineReducers({
    job,
    configuration,
    filesToValidate,
    validationProfiles
});

export const rootEpic = combineEpics(
    jobEpic,
    profilesEpics,
    filesToValidateEpic
)
