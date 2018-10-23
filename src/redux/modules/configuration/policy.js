import { createAction, handleActions } from 'redux-actions';

//- Actions
export const policyActions = {
    togglePolicyActive: createAction('POLICY_ACTIVE_TOGGLE'),
    getPolicyFilePath: createAction('POLICY_FILE_PATH_GET')
};
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
        POLICY_FILE_PATH_GET: (state, action) => {
            return { ...state, policyFilePath: action.payload };
        }
    },
    initialState
);
