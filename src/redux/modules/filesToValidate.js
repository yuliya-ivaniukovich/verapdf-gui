import {createAction, handleActions} from 'redux-actions';
import _ from 'lodash';

//- Actions
export const addFiles = createAction('FILES_TO_VALIDATE_ADD', files => files);

//- State
const initialState = {

};

//- Reducers
export default handleActions({
    FILES_TO_VALIDATE_ADD: (state, action) => {
        return {
            ...state,
            ..._.mapValues(action.payload, file => ({...file, status: null}))
        };
    }
}, initialState);

//- Selector
export const getFilesToValidate = state => state.filesToValidate;