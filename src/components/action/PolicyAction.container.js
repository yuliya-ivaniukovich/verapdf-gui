import {connect} from 'react-redux';
import {setPolicyActive} from '../../redux/modules/configuration/policy';
import Action from './Action';
import React from 'react';

const children = (
    <div>
        Policy file:
    </div>
);

const mapStateToProps = state => {
    return {
        checked: state.configuration.policy.active,
        title: "Perform Policy Checks",
        collapsible: true,
        children: children
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setActive: (active) => {
            dispatch(setPolicyActive(active));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Action);
