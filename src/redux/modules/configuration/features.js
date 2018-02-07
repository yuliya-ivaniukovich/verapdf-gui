import {createAction, handleActions} from 'redux-actions';

//- Actions
export const setFeaturesActive = createAction('FEATURES_ACTIVE_SET');

//- State
const initialState = {
    active: false
};

//- Reducers
export default handleActions({
    FEATURES_ACTIVE_SET: (state, action) => {
        return {...state, active: action.payload};
    }
}, initialState);