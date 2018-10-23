import { connect } from 'react-redux';

import { policyActions } from '../../../redux/modules/configuration/policy';
import PolicyAction from './PolicyAction';

const { togglePolicyActive } = policyActions;

const mapStateToProps = state => {
    return {
        checked: state.configuration.policy.active,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleActive: () => {
            dispatch(togglePolicyActive());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PolicyAction);
