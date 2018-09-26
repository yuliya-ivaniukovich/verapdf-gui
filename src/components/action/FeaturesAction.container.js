import { connect } from 'react-redux';
import { toggleFeaturesActive } from '../../redux/modules/configuration/features';
import Action from './Action';
import React from 'react';
import FeaturesAction from './FeatureAction';
const mapStateToProps = state => {
    return {
        checked: state.configuration.features.active,
        title: 'Extract Features',
        collapsible: true,
        children: <FeaturesAction state={state} />
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleActive: () => {
            dispatch(toggleFeaturesActive());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Action);
