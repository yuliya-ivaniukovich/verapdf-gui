import { createAction, handleActions } from 'redux-actions';

//- Actions
export const toggleFeaturesActive = createAction('FEATURES_ACTIVE_TOGGLE');
export const addSelectedFeatures = createAction('ADD_SELECTED_FEATURES');

//- State
const initialState = {
    active: false,
    selectedFeatures: [
        { value: 'information dictionary', label: 'Information Dictionary' }
    ]
};

//- Reducers
export default handleActions(
    {
        FEATURES_ACTIVE_TOGGLE: state => {
            return { ...state, active: !state.active };
        },
        ADD_SELECTED_FEATURES: (state, action) => {
            return { ...state, selectedFeatures: action.payload };
        }
    },
    initialState
);
