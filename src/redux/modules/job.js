import { createAction,handleActions } from 'redux-actions';
import { addFiles } from './filesToValidate';

//- Actions
const createJobRequest = createAction('NEW_JOB_CREATE_REQUEST')
const createJobSuccess = createAction('NEW_JOB_CREATE_SUCCESS')
const createJobFail = createAction('NEW_JOB_CREATE_FAILED')

export function createNewJob(formData) {
    return dispatch => {
        dispatch(createJobRequest());
        return fetch('http://localhost:8080/api/jobs', { method: 'POST' })
            .then(response => response.json())
            .then(response => {
                dispatch(createJobSuccess(response.jobId));
                dispatch(addFiles(formData));
            })
            .catch(error => {
                dispatch(createJobFail(error));
            });
    };
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
        })
    },
    initialState
);
