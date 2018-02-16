import {connect} from 'react-redux';
import {setValidationActive} from '../../redux/modules/configuration/validation';
import Action from './Action';
import React from 'react';

const children = (
    <div>
        Validation profile...
    </div>
);

const mapStateToProps = state => {
    return {
        checked: state.configuration.validation.active,
        title: "Validation",
        collapsible: true,
        children: children
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setActive: (active) => {
            dispatch(setValidationActive(active));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Action);
