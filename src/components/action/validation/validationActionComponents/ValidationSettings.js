import React, { Component } from 'react';

import CheckBox from '../../checkBox/CheckBox';
import './ValidationSettings.css';
import ValidationProfile from './ValidationProfile';
import FixMetadata from './FixMetadata';

class ValidationSettings extends Component {
    fileInput = null;

    render() {
        const titleInformation =
            'include information on passed rules into the report';

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

export default ValidationSettings;
