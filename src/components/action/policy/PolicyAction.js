import React, { Component } from 'react';
import Action from '../Action';
import PolicyProfile from './PolicyProfile';
class PolicyAction extends Component {
    render() {
        return (
            <Action
                title="Perform Policy Checks"
                collapsible={false}
                checked={this.props.checked}
                onToggleActive={this.props.onToggleActive}
            >
                <PolicyProfile {...this.props} />
            </Action>
        );
    }
}

export default PolicyAction;
