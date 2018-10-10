import { connect } from 'react-redux';

import { policyActions } from '../../../redux/modules/configuration/policy';
import PolicyProfile from './PolicyProfile';

const {  getPolicyFilePath } = policyActions;

const mapStateToProps = state => {
    return {
        policyFilePath: state.configuration.policy.policyFilePath
    };
};

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
)(PolicyProfile);
