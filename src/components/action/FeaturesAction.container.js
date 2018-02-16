import {connect} from 'react-redux';
import {setFeaturesActive} from '../../redux/modules/configuration/features';
import Action from './Action';
import React from 'react';

const children = (
    <div>
        Include features:
    </div>
);

const mapStateToProps = state => {
    return {
        checked: state.configuration.features.active,
        title: "Extract Features",
        collapsible: true,
        children: children
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setActive: (active) => {
            dispatch(setFeaturesActive(active));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Action);
