import { connect } from 'react-redux';

import { validationActions } from '../../../redux/modules/configuration/validation';
import ValidationAction from './ValidatinAction';

const {
    toggleFixMetadata,
    toggleIncludeInformation,
    toggleStopValidation,
    selectValidationProfile,
    getProfilePath,
    selectAmountFails,
    selectPrefix
} = validationActions;

const mapStateToProps = state => {
    return {
        checked: state.configuration.validation.active,
        profilesValues: state.validationProfiles,
        profile: state.configuration.validation.profile,
        profilePath: state.configuration.validation.profileFilePath,
        prefix: state.configuration.validation.prefix,
        amountFails: state.configuration.validation.amountFails,
        includeInformation:
            state.configuration.validation.includeInformationInReport,
        isFixMetadata: state.configuration.validation.fixMetadata,
        stopValidation: state.configuration.validation.stopValidation
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleActive: () => {
            dispatch(validationActions.toggleValidationActive());
        },
        getValidationProfileValue: value =>
            dispatch(selectValidationProfile(value)),
        selectFixMetadata: () => dispatch(toggleFixMetadata()),
        selectIncludeInformation: () => dispatch(toggleIncludeInformation()),
        getProfilePath: path => dispatch(getProfilePath(path)),
        selectStopValidation: () => dispatch(toggleStopValidation()),
        selectAmoutFails: e => dispatch(selectAmountFails(e.target.value)),
        selectPrefix: e => dispatch(selectPrefix(e.target.value))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ValidationAction);
