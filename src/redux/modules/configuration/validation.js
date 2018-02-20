import {createAction, handleActions} from 'redux-actions';

//- Actions
export const toggleValidationActive = createAction('VALIDATION_ACTIVE_TOGGLE');

//- State
const initialState = {
    active: false
};

//- Reducers
export default handleActions({
    VALIDATION_ACTIVE_TOGGLE: (state) => {
        return {...state, active: !state.active};
    }
}, initialState);