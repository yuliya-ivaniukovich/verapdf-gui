import { createAction, handleActions } from 'redux-actions';
import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { filesToValidateActions } from './filesToValidate';
import { ajax } from '../../api/api';

//- Actions
export const jobActions = {
    createJobRequest: createAction('NEW_JOB_CREATE_REQUEST'),
    createJobSuccess: createAction('NEW_JOB_CREATE_SUCCESS', jobId => jobId, (jobId, file) => ({file})),
    createJobFail: createAction('NEW_JOB_CREATE_FAILED')
}

//- State
const initialState = {
    id: null,
    isLoading: false,
    created: false,
    error: false
};

//- Reducers
export default handleActions(
    {
        NEW_JOB_CREATE_REQUEST: state => ({
            ...state,
            isLoading: true   
        }),
        NEW_JOB_CREATE_SUCCESS: (state, action) => ({
            ...state,
            id: action.payload,
            created: true,
            isLoading: false 
        }),
        NEW_JOB_CREATE_FAILED: state => ({
            ...state,
            error: true 
        }),
    },
    initialState
);

// - Epics 
const createNewJobEpic = action$ => action$.pipe(
    ofType('NEW_JOB_CREATE_REQUEST'),
    mergeMap(action => from(ajax.post('api/jobs', { method: 'POST' }))
        .pipe(
            map(response => jobActions.createJobSuccess(response.jobId, action.payload)),
            catchError(error => of(jobActions.createJobFail()))
        )
    )
)

const addFilesEpic = action$ => action$.pipe(
    ofType('NEW_JOB_CREATE_SUCCESS'),
    map(action=> filesToValidateActions.addFilesRequest(action.meta.file))
)

export const jobEpic = combineEpics(
    createNewJobEpic,
    addFilesEpic
)