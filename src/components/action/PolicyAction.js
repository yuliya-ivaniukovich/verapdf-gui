import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPolicyFilePath } from '../../redux/modules/configuration/policy';

class PolicyAction extends Component {
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
                        ref={a => (this.policyFileInput = a)}
                        onChange={() => {
                            this.props.getPolicyFilePath(
                                this.policyFileInput.value
                            );
                        }}
                    />
                    <input
                        type="text"
                        className="policy-input-file-name"
                        value={this.props.configuration.policy.policyFilePath}
                        readOnly
                    />
                    <button
                        className="policy-file-select-btn"
                        onClick={this.clickTriger}
                    >
                        select
                    </button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
    return {
        getPolicyFilePath: policyFileInput => {
            dispatch(getPolicyFilePath(policyFileInput));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PolicyAction);
