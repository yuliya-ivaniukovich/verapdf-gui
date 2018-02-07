import {createAction, handleActions} from 'redux-actions';

//- Actions
export const setValidationActive = createAction('VALIDATION_ACTIVE_SET');

//- State
const initialState = {
    active: false
};

//- Reducers
export default handleActions({
    VALIDATION_ACTIVE_SET: (state, action) => {
        return {...state, active: action.payload};
    }
}, initialState);