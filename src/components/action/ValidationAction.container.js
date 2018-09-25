import React from "react";
import { connect } from "react-redux";

import { validationActions } from "../../redux/modules/configuration/validation";
import ValidationAction from "./ValidationAction";
import Action from "./Action";

const mapStateToProps = state => {
    return {
        checked: state.configuration.validation.active,
        title: "Validation",
        collapsible: true,
        children: (
            <ValidationAction
                profilesValues={
                    state.validationProfilesValues.validationProfiles
                }
                profile={state.configuration.validation.profile}
                profilePath={state.configuration.validation.profileFilePath}
                prefix={state.configuration.validation.prefix}
                amountFails={state.configuration.validation.amountFails}
                includeInformation={
                    state.configuration.validation.includeInformationInReport
                }
                isFixMetadata={state.configuration.validation.fixMetadata}
                stopValidation={state.configuration.validation.stopValidation}
            />
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleActive: () => {
            dispatch(validationActions.toggleValidationActive());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Action);
