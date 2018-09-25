import React, { Component } from "react";
import { connect } from "react-redux";

import CheckBox from "./checkBox/CheckBox";
import "./ValidationAction.css";
import ValidationProfile from "./validationActionComponents/ValidationProfile";
import FixMetadata from "./validationActionComponents/FixMetadata";
import { validationActions } from "../../redux/modules/configuration/validation";

const {
    selectFixMetadata,
    selectIncludeInformation,
    stopValidation,
    selectValidationProfile,
    getProfilePath,
    selectAmountFails,
    selectPrefix
} = validationActions;

class ValidationAction extends Component {
    fileInput = null;

    render() {
        const titleInformation =
            "include information on passed rules into the report";

        const {
            profilesValues,
            getValidationProfileValue,
            isFixMetadata,
            selectFixMetadata,
            profilePath,
            includeInformation,
            selectIncludeInformation,
            selectPrefix,
            stopValidation,
            amountFails,
            prefix,
            selectStopValidation,
            selectAmoutFails,
            getProfilePath
        } = this.props;

        return (
            <div>
                <ValidationProfile
                    profilesValues={profilesValues}
                    getProfilePath={getProfilePath}
                    profilePath={profilePath}
                    getValidationProfileValue={getValidationProfileValue}
                />
                <div>
                    <CheckBox
                        checked={isFixMetadata}
                        title="Fix metadata:"
                        onChange={selectFixMetadata}
                    />
                </div>
                <FixMetadata selectPrefix={selectPrefix} prefix={prefix} />
                <CheckBox
                    title={titleInformation}
                    checked={includeInformation}
                    onChange={selectIncludeInformation}
                />
                <div className="validation-checks-fail-container">
                    <CheckBox
                        checked={stopValidation}
                        title="Stop validation after "
                        onChange={selectStopValidation}
                    />
                    <input
                        defaultValue={amountFails}
                        onChange={e => selectAmoutFails(e)}
                        className="failed-checks-input"
                        type="number"
                    />
                    <span>failed checks</span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
    getValidationProfileValue: value =>
        dispatch(selectValidationProfile(value)),
    selectFixMetadata: () => dispatch(selectFixMetadata()),
    selectIncludeInformation: () => dispatch(selectIncludeInformation()),
    getProfilePath: path => dispatch(getProfilePath(path)),
    selectStopValidation: () => dispatch(stopValidation()),
    selectAmoutFails: e => dispatch(selectAmountFails(e.target.value)),
    selectPrefix: e => dispatch(selectPrefix(e.target.value))
});

export default connect(
    mapStateToProps,
    mapDispathToProps
)(ValidationAction);
