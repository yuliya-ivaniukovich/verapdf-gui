import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import ValidationProfileSelect from './ValidationProfileSelect';

class ValidationProfile extends Component {
    state = {
        isShow: false
    };

    fileInput = null;

    openFile = () => {
        this.fileInput.click();
    };

    toggleShowInput = isShow => {
        this.setState({
            isShow
        });
    };

    render() {
        const {
            setCustomProfilePath,
            profileFilePath,
            getValidationProfileValue,
            profilesValues
        } = this.props;

        return (
            <div>
                <span>ValidationProfile:</span>
                <ValidationProfileSelect
                    toggleShowInput={this.toggleShowInput}
                    profilesValues={profilesValues}
                    getInputValue={getValidationProfileValue}
                />
                <input
                    onChange={() => setCustomProfilePath(this.fileInput.value)}
                    className="input-file-hidden"
                    type="file"
                    ref={input => (this.fileInput = input)}
                />

                {this.state.isShow ? (
                    <Fragment>
                        <input
                            readOnly
                            className="input-path"
                            defaultValue={profileFilePath}
                            type="text"
                        />
                        <button onClick={this.openFile} className="btn-browse">
                            Browse
                        </button>
                    </Fragment>
                ) : null}
            </div>
        );
    }
}

ValidationProfile.propTypes = {
    profile: PropTypes.string,
    setCustomProfilePath: PropTypes.func.isRequired,
    profileFilePath: PropTypes.string,
    getValidationProfileValue: PropTypes.func.isRequired,
    profilesValues: PropTypes.array.isRequired
};

export default ValidationProfile;
