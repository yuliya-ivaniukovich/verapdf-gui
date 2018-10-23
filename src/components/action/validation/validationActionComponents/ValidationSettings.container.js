import { connect } from 'react-redux';

import { validationActions } from '../../../../redux/modules/configuration/validation';
import ValidationSettings from './ValidationSettings';

const {
    selectValidationProfile,
    setCustomProfilePath,
    toggleFixMetadata,
    selectFixedFilePrefix,
    toggleReportPassedRules,
    toggleStopValidationThreshold,
    selectAmountOfFailedChecks
} = validationActions;

const mapStateToProps = state => {
    return {
        profilesValues: state.validationProfiles,
        profile: state.configuration.validation.profile,
        profileFilePath: state.configuration.validation.profileFilePath,
        fixedFilePrefix: state.configuration.validation.fixedFilePrefix,
        reportPassedRules: state.configuration.validation.reportPassedRules,
        isFixMetadata: state.configuration.validation.fixMetadata,
        stopValidationThreshold:
            state.configuration.validation.stopValidationThreshold,
        amountOfFailedChecks:
            state.configuration.validation.amountOfFailedChecks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getValidationProfileValue: value =>
            dispatch(selectValidationProfile(value)),
        setCustomProfilePath: path => dispatch(setCustomProfilePath(path)),
        selectFixMetadata: () => dispatch(toggleFixMetadata()),
        selectFixedFilePrefix: prefix =>
            dispatch(selectFixedFilePrefix(prefix)),
        toggleReportPassedRules: () => dispatch(toggleReportPassedRules()),
        toggleStopValidationThreshold: () =>
            dispatch(toggleStopValidationThreshold()),
        selectAmountOfFailedChecks: failedCheks =>
            dispatch(selectAmountOfFailedChecks(failedCheks))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ValidationSettings);