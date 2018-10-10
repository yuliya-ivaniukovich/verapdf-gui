import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Action from '../Action';
import ValidationSettings from './validationActionComponents/ValidationSettings.container';

class ValidationAction extends Component {
    render() {
        return (
            <Action
                checked={this.props.checked}
                title="Validation"
                collapsible
                onToggleActive={this.props.onToggleActive}
            >
                <ValidationSettings />
            </Action>
        );
    }
}

ValidationAction.propTypes = {
    checked: PropTypes.bool.isRequired,
    onToggleActive: PropTypes.func.isRequired
};

export default ValidationAction;
