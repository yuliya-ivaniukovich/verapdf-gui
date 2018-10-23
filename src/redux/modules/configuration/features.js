import { createAction, handleActions } from 'redux-actions';

//- Actions
export const featuresActions = {
    toggleFeaturesActive: createAction('FEATURES_ACTIVE_TOGGLE'),
    addSelectedFeatures: createAction('SELECTED_FEATURES_ADD')
};

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
        SELECTED_FEATURES_ADD: (state, action) => {
            return { ...state, selectedFeatures: action.payload };
        }
    },
    initialState
);
