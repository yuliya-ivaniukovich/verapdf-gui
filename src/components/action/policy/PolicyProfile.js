import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isElectron } from '../../../enviroment';

class PolicyProfile extends Component {
    policyFileInput = null;
    clickTrigger = () => {
        this.policyFileInput.click();
    };
    render() {
        return (
            <div className="policy">
                <span className="policy-file-label">Policy file:</span>

                <div className="policy-input-file">
                    <input
                        className="policy-input-file-hidden"
                        type="file"
                        hidden
                        ref={input => (this.policyFileInput = input)}
                        onChange={() => {
                            if(!isElectron) {
                                this.props.getPolicyFilePath(this.policyFileInput.value);
                            } else {
                                this.props.getPolicyFilePath(this.policyFileInput.files[0].path);
                            }
                        }}
                    />
                    <input
                        type="text"
                        className="policy-input-file-name"
                        value={this.props.policyFilePath}
                        readOnly
                    />
                    <button
                        className="policy-file-select-btn"
                        onClick={this.clickTrigger}
                    >
                        Browse
                    </button>
                </div>
            </div>
        );
    }
}

PolicyProfile.propTypes = {
    policyFilePath: PropTypes.string.isRequired,
    getPolicyFilePath: PropTypes.func.isRequired
}
export default PolicyProfile;
