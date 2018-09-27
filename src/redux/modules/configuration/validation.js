import { createAction, handleActions } from 'redux-actions';

//- Actions
export const validationActions = {
    toggleValidationActive: createAction('VALIDATION_ACTIVE_TOGGLE'),
    toggleFixMetadata: createAction('FIX_METADATA_TOGGLE'),
    toggleIncludeInformation: createAction('INCLUDE_INFORMATION_TOGGLE'),
    toggleStopValidation: createAction('VAIDATION_STOP_TOGGLE'),
    selectValidationProfile: createAction('VALIDATION_PROFILE_SELECT'),
    getProfilePath: createAction('PROFILE_GET_PATH'),
    selectAmountFails: createAction('AMOUNT_FAILS_SELECT'),
    selectPrefix: createAction('SELECT_PREFIX')
};

//- State
const initialState = {
    active: false,
    profile: 'custom',
    profileFilePath: null,
    fixMetadata: false,
    prefix: 'veraFixMd_',
    includeInformationInReport: false,
    stopValidation: false,
    amountFails: 100
};

//- Reducers
export default handleActions(
    {
        VALIDATION_ACTIVE_TOGGLE: state => {
            return { ...state, active: !state.active };
        },
        VALIDATION_PROFILE_SELECT: (state, action) => {
            return { ...state, profile: action.payload };
        },
        PROFILE_GET_PATH: (state, action) => {
            return { ...state, profileFilePath: action.payload };
        },
        FIX_METADATA_TOGGLE: state => {
            return { ...state, fixMetadata: !state.fixMetadata };
        },
        SELECT_PREFIX: (state, action) => {
            return {
                ...state,
                prefix: action.payload
            };
        },
        INCLUDE_INFORMATION_TOGGLE: state => {
            return {
                ...state,
                includeInformationInReport: !state.includeInformationInReport
            };
        },
        VAIDATION_STOP_TOGGLE: state => {
            return {
                ...state,
                stopValidation: !state.stopValidation
            };
        },
        AMOUNT_FAILS_SELECT: (state, action) => {
            return {
                ...state,
                amountFails: action.payload
            };
        }
    },
    initialState
);
