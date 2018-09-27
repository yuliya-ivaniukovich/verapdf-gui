import React, { Component } from 'react';

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

export default ValidationAction;
