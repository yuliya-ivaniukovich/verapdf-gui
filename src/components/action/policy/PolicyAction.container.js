import { connect } from 'react-redux';

import { policyActions } from '../../../redux/modules/configuration/policy';
import PolicyAction from './PolicyAction';

const { togglePolicyActive, getPolicyFilePath } = policyActions;

const mapStateToProps = state => {
    return {
        checked: state.configuration.policy.active,
        policyFilePath: state.configuration.policy.policyFilePath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleActive: () => {
            dispatch(togglePolicyActive());
        },
        getPolicyFilePath: policyFileInput => {
            dispatch(getPolicyFilePath(policyFileInput));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PolicyAction);
