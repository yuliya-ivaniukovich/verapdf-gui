import { createAction, handleActions } from 'redux-actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { from } from 'rxjs';
import _ from 'lodash';

import {FilesApi} from '../../api/files';

//- Actions
export const filesToValidateActions = {
    delFile: createAction('FILE_TO_VALIDATE_DEL'),
    addFile: createAction('FILE_TO_VALIDATE_ADD_REQUEST', file => file),
    addFileSuccess: createAction('FILE_TO_VALIDATE_ADD_SUCCESS'),
    addFileFailed: createAction('FILE_TO_VALIDATE_ADD_FAILED')
};

//- State
const initialState = {};

//- Reducers
export default handleActions({
    FILE_TO_VALIDATE_ADD_SUCCESS: (state, action) => {
        let {fileId, path} = action.payload;
        return {
            ...state,
            [fileId]: {
                type: 'pdf',
                path,
                status: null
            }
        };
    },
    FILE_TO_VALIDATE_DEL: (state, action) => {
        return {
            ..._.pick(state, _.keys(state).filter(file => (file !== action.payload)))
        };
    }
}, initialState);

//- Epics
export const addFilesEpic = (action$, state$) => action$.pipe(
    ofType(filesToValidateActions.addFile.toString()),
    mergeMap(action =>
        from(FilesApi.uploadFile(state$.value.job.id, action.payload)).pipe(
            map(file => filesToValidateActions.addFileSuccess(file)),
            catchError(error => filesToValidateActions.addFileFailed())
        )
    )
);

//- Selector
export const getFilesToValidate = state => state.filesToValidate;