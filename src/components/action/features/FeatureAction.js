import React, { Component } from 'react';
import Action from '../Action';
import FeaturesSettings from './FeaturesSettings.container';

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

export default FeaturesAction;
