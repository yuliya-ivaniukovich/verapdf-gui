import { createAction, handleActions } from 'redux-actions';

//- Actions
export const togglePolicyActive = createAction('POLICY_ACTIVE_TOGGLE');
export const getPolicyFilePath = createAction('GET_POLICY_FILE_PATH');
//- State
const initialState = {
    active: false,
    policyFilePath: ''
};

//- Reducers
export default handleActions(
    {
        POLICY_ACTIVE_TOGGLE: state => {
            return { ...state, active: !state.active };
        },
        GET_POLICY_FILE_PATH: (state, action) => {
            return { ...state, policyFilePath: action.payload };
        }
    },
    initialState
);
