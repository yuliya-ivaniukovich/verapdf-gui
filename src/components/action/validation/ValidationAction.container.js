import { connect } from 'react-redux';

import { validationActions } from '../../../redux/modules/configuration/validation';
import ValidationAction from './ValidatinAction';

const mapStateToProps = state => ({
        checked: state.configuration.validation.active,
});

const mapDispatchToProps = dispatch => ({
        onToggleActive: () => dispatch(validationActions.toggleValidationActive())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ValidationAction);
