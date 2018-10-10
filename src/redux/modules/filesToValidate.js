import {createAction, handleActions} from 'redux-actions';
import _ from 'lodash';


const createFormData = files => {
    const body = new FormData()
    body.append('file', files[0])
    return body;
}

const createFileList = response => {
    if(response.message === 'File already exists') {
        alert('File already exists, please choose a new file');
        return new Error('File already exists')
    }
     const file = _.chain([response])
            .keyBy('fileId')
            .mapValues(() => ({type: 'pdf', path: response.path}))
            .value()
    return file
}

//- Actions
const addFilesRequest = createAction('FILES_TO_VALIDATE_ADD_REQUEST')
const addFilesSuccess = createAction('FILES_TO_VALIDATE_ADD_SUCCESS')

export const addFiles = (files) => {
        return (dispatch, getState)=> {
            const state = getState();
            dispatch(addFilesRequest());
            fetch(`http://localhost:8080/api/jobs/${state.job.id}/files`, {
                method: 'POST',
                body: createFormData(files)
            })
                .then(response => response.json())
                .then(response => dispatch(addFilesSuccess(createFileList(response))))
                .catch(error => console.error(error))
        }
};
export const delFile = createAction('FILE_TO_VALIDATE_DEL');

//- State
const initialState = {};

//- Reducers
export default handleActions({
    FILES_TO_VALIDATE_ADD_SUCCESS: (state, action) => {
        return {
            ...state,
            ..._.mapValues(action.payload, file => ({...file, status: null}))
        };
    },
    FILE_TO_VALIDATE_DEL: (state, action) => {
        return {
            ..._.pick(state, _.keys(state).filter(file => (file !== action.payload)))
        };
    }
}, initialState);

//- Selector
export const getFilesToValidate = state => state.filesToValidate;