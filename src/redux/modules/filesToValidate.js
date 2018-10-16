import { createAction, handleActions } from 'redux-actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { from } from 'rxjs';
import _ from 'lodash';

import {ajax} from '../../api/api';

const createFormData = files => {
    const body = new FormData()
    body.append('file', files[0])
    return body;
}

const createFileList = response => {
    if(response.message === 'File already exists') {
        alert('File already exists, please choose a new file');
        return new Error(response.message)
    }
     const file = _.chain([response])
            .keyBy('fileId')
            .mapValues(() => ({type: 'pdf', path: response.path}))
            .value()
    return file
}

//- Actions
export const filesToValidateActions = {
    delFile: createAction('FILE_TO_VALIDATE_DEL'),
    addFilesRequest: createAction('FILES_TO_VALIDATE_ADD_REQUEST'),
    addFilesSuccess: createAction('FILES_TO_VALIDATE_ADD_SUCCESS'),
}

//- State
const initialState = {};

//- Reducers
export default handleActions({
    FILES_TO_VALIDATE_ADD_SUCCESS: (state, action) => {
        return {
            ...state,
            ..._.mapValues(action.payload, file => ({...file, status: null, uploaded: true}))
        };
    },
    FILE_TO_VALIDATE_DEL: (state, action) => {
        return {
            ..._.pick(state, _.keys(state).filter(file => (file !== action.payload)))
        };
    }
}, initialState);

//- Epics
export const addFilesEpic = (action$,state$) => action$.pipe(
    ofType('FILES_TO_VALIDATE_ADD_REQUEST'),
    mergeMap(action => from(ajax.post(`/api/jobs/${state$.value.job.id}/files`, {
      method: 'POST',
      body: createFormData(action.payload)
      }))
        .pipe(
            map( response => filesToValidateActions.addFilesSuccess(createFileList(response))),
            catchError(error => console.log(error))
  )));

export const filesToValidateEpic = combineEpics(
    addFilesEpic
);

//- Selector
export const getFilesToValidate = state => state.filesToValidate;