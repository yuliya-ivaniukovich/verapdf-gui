import { createAction, handleActions } from 'redux-actions';
import { ofType, combineEpics } from 'redux-observable';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { from, of } from 'rxjs';

import { filesToValidateActions } from './filesToValidate';
import { JobApi } from '../../api/job';

//- Actions
export const jobActions = {
    createJob: createAction('NEW_JOB_CREATE_REQUEST', () => ({}), file => ({file})),
    createJobSuccess: createAction('NEW_JOB_CREATE_SUCCESS', jobId => jobId, (jobId, file) => ({file})),
    createJobFail: createAction('NEW_JOB_CREATE_FAILED', message => message)
};

//- State
const initialState = {
    id: null,
    isLoading: false,
    error: null
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
            isLoading: false 
        }),
        NEW_JOB_CREATE_FAILED: (state, action) => ({
            ...state,
            error: action.payload,
            isLoading: false
        })
    },
    initialState
);

// - Epics 
const createNewJobEpic = action$ => action$.pipe(
    ofType(jobActions.createJob.toString()),
    mergeMap(action =>
        from(JobApi.createJob()).pipe(
            map(job => jobActions.createJobSuccess(job.jobId, action.meta.file)),
            catchError(error => of(jobActions.createJobFail(error.message)))
        )
    )
);

const addFilesEpic = action$ => action$.pipe(
    ofType(jobActions.createJobSuccess.toString()),
    map(action => filesToValidateActions.addFile(action.meta.file))
);

export const jobEpic = combineEpics(
    createNewJobEpic,
    addFilesEpic
);