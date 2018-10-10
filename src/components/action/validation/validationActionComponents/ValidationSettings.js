import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';

import CheckBox from '../../checkBox/CheckBox';
import './ValidationSettings.css';
import ValidationProfile from './ValidationProfile';
import FixMetadata from './FixMetadata';

class ValidationSettings extends Component {
    fileInput = null;

    renderStopValidationTitle = () => {
        const { amountOfFailedChecks, selectAmountOfFailedChecks } = this.props;
        return (
            <Fragment>
                <span>Stop validation after</span>
                <input
                    defaultValue={amountOfFailedChecks}
                    onChange={e => selectAmountOfFailedChecks(e.target.value)}
                    className="failed-checks-input"
                    type="number"
                />
                <span>failed checks</span>
            </Fragment>
        );
    };

    render() {
        const {
            profile,
            profilesValues,
            profileFilePath,
            getValidationProfileValue,
            setCustomProfilePath,
            isFixMetadata,
            selectFixMetadata,
            fixedFilePrefix,
            selectFixedFilePrefix,
            reportPassedRules,
            toggleReportPassedRules,
            stopValidationThreshold,
            toggleStopValidationThreshold
        } = this.props;

        return (
            <Fragment>
                <ValidationProfile
                    porfile={profile}
                    profilesValues={profilesValues}
                    setCustomProfilePath={setCustomProfilePath}
                    profileFilePath={profileFilePath}
                    getValidationProfileValue={getValidationProfileValue}
                />
                <CheckBox
                    checked={isFixMetadata}
                    title="Fix metadata:"
                    onChange={selectFixMetadata}
                />
                <Collapse isOpen={isFixMetadata}>
                    <FixMetadata
                        selectFixedFilePrefix={selectFixedFilePrefix}
                        fixedFilePrefix={fixedFilePrefix}
                    />
                </Collapse>
                <CheckBox
                    title="Include information on passed rules into the report"
                    checked={reportPassedRules}
                    onChange={toggleReportPassedRules}
                />
                <CheckBox
                    checked={stopValidationThreshold}
                    title={this.renderStopValidationTitle()}
                    onChange={toggleStopValidationThreshold}
                />
            </Fragment>
        );
    }
}

ValidationSettings.propTypes = {
    profile: PropTypes.string.isRequired,
    profilesValues: PropTypes.array.isRequired,
    profileFilePath: PropTypes.string,
    getValidationProfileValue: PropTypes.func.isRequired,
    setCustomProfilePath: PropTypes.func.isRequired,
    isFixMetadata: PropTypes.bool.isRequired,
    selectFixMetadata: PropTypes.func.isRequired,
    fixedFilePrefix: PropTypes.string.isRequired,
    selectFixedFilePrefix: PropTypes.func.isRequired,
    reportPassedRules: PropTypes.bool.isRequired,
    toggleReportPassedRules: PropTypes.func.isRequired,
    stopValidationThreshold: PropTypes.bool.isRequired,
    toggleStopValidationThreshold: PropTypes.func.isRequired,
    amountOfFailedChecks: PropTypes.number.isRequired,
    selectAmountOfFailedChecks: PropTypes.func.isRequired
};

export default ValidationSettings;
