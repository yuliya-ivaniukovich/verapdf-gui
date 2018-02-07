import {createAction, handleActions} from 'redux-actions';

//- Actions
export const setPolicyActive = createAction('POLICY_ACTIVE_SET');

//- State
const initialState = {
    active: false
};

//- Reducers
export default handleActions({
    POLICY_ACTIVE_SET: (state, action) => {
        return {...state, active: action.payload};
    }
}, initialState);