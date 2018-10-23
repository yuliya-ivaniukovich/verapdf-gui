import React, { Component } from 'react';

import Action from '../Action';
import FeaturesSettings from './FeaturesSettings.container';
import PropTypes from 'prop-types';

class FeaturesAction extends Component {
    render() {
        return (
            <Action
                title="Extract Features"
                collapsible
                checked={this.props.checked}
                onToggleActive={this.props.onToggleActive}
            >
                <FeaturesSettings />
            </Action>
        );
    }
}
FeaturesAction.propTypes = {
    checked: PropTypes.bool.isRequired,
    onToggleActive: PropTypes.func.isRequired
}
export default FeaturesAction;
