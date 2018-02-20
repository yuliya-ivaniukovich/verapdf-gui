import {connect} from 'react-redux';
import {toggleValidationActive} from '../../redux/modules/configuration/validation';
import Action from './Action';


const mapStateToProps = state => {
    return {
        checked: state.configuration.validation.active,
        title: "Validation",
        collapsible: true,
        children: null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleActive: () => {
            dispatch(toggleValidationActive());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Action);
