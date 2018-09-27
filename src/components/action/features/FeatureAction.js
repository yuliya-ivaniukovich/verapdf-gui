import React, { Component } from 'react';
import Action from '../Action';
import FeaturesSettings from './FeaturesSetings';

class FeaturesAction extends Component {
    render() {
        console.log(this.props);
        return (
            <Action
                title="Extract Features"
                collapsible
                checked={this.props.checked}
                onToggleActive={this.props.onToggleActive}
            >
                <FeaturesSettings {...this.props} />
            </Action>
        );
    }
}

export default FeaturesAction;