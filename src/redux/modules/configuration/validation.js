import { createAction, handleActions } from 'redux-actions';

//- Actions
export const validationActions = {
    toggleValidationActive: createAction('VALIDATION_ACTIVE_TOGGLE'),
    selectValidationProfile: createAction('VALIDATION_PROFILE_SELECT'),
    setCustomProfilePath: createAction('VALIDATION_CUSTOM_PROFILE_PATH_SET'),
    toggleFixMetadata: createAction('VALIDATION_FIX_METADATA_TOGGLE'),
    selectFixedFilePrefix: createAction('VALIDATION_FIXED_FILE_PREFIX_SELECT'),
    toggleReportPassedRules: createAction(
        'VALIDATION_REPORT_PASSED_RULES_TOGGLE'
    ),
    toggleStopValidationThreshold: createAction(
        'VALIDATION_STOP_THRESHOLD_TOGGLE'
    ),
    selectAmountOfFailedChecks: createAction(
        'VALIDATION_AMOUNT_0F_FAILED_CHECKS_SELECT',
        failedCheks => +failedCheks
    )
};

//- State
const initialState = {
    active: false,
    profile: 'auto-detected',
    profileFilePath: undefined,
    fixMetadata: false,
    fixedFilePrefix: 'veraFixMd_',
    reportPassedRules: false,
    stopValidationThreshold: false,
    amountOfFailedChecks: 100 // stops file check after amount of failed checks
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
        VALIDATION_CUSTOM_PROFILE_PATH_SET: (state, action) => {
            return { ...state, profileFilePath: action.payload };
        },
        VALIDATION_FIX_METADATA_TOGGLE: state => {
            return { ...state, fixMetadata: !state.fixMetadata };
        },
        VALIDATION_FIXED_FILE_PREFIX_SELECT: (state, action) => {
            return {
                ...state,
                fixedFilePrefix: action.payload
            };
        },
        VALIDATION_REPORT_PASSED_RULES_TOGGLE: state => {
            return {
                ...state,
                reportPassedRules: !state.reportPassedRules
            };
        },
        VALIDATION_STOP_THRESHOLD_TOGGLE: state => {
            return {
                ...state,
                stopValidationThreshold: !state.stopValidationThreshold
            };
        },
        VALIDATION_AMOUNT_0F_FAILED_CHECKS_SELECT: (state, action) => {
            return {
                ...state,
                amountOfFailedChecks: action.payload
            };
        }
    },
    initialState
);
