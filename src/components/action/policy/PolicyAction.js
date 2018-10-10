import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Action from '../Action';
import PolicyProfile from './PolicyProfile.container';

class PolicyAction extends Component {
    render() {
        return (
            <Action
                title="Perform Policy Checks"
                collapsible={false}
                checked={this.props.checked}
                onToggleActive={this.props.onToggleActive}
            >
                <PolicyProfile  />
            </Action>
        );
    }
}
PolicyAction.propTypes = {
    checked: PropTypes.bool.isRequired,
    onToggleActive: PropTypes.func.isRequired
}
export default PolicyAction;
