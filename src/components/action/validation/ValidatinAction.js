import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Action from '../Action';
import ValidationSettings from './validationActionComponents/ValidationSettings';

class ValidationAction extends Component {
    render() {
        return (
            <Action
                checked={this.props.checked}
                title="Validation"
                collapsible
                onToggleActive={this.props.onToggleActive}
            >
                <ValidationSettings {...this.props} />
            </Action>
        );
    }
}

ValidationAction.propTypes = {
    checked: PropTypes.bool.isRequired,
    onToggleActive: PropTypes.func.isRequired
};

export default ValidationAction;
