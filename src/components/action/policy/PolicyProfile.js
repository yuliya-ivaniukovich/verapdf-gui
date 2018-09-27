import React, { Component } from 'react';

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
                        ref={value => (this.policyFileInput = value)}
                        onChange={() => {
                            this.props.getPolicyFilePath(
                                this.policyFileInput.value
                            );
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
                        select
                    </button>
                </div>
            </div>
        );
    }
}

export default PolicyProfile;
