import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ValidationProfileSelect.css';

class ValidationProfileSelect extends Component {
    render() {
        const { getInputValue, profilesValues, toggleShowInput } = this.props;
        return (
            <select
                onChange={e => {
                    let isShow = e.target.value === 'custom';
                    isShow ? toggleShowInput(isShow) : toggleShowInput(isShow);
                    getInputValue(e.target.value);
                }}
                className="validation-profile-select"
            >
                {profilesValues.map((value, idx) => (
                    <option key={idx}>{value}</option>
                ))}
            </select>
        );
    }
}

ValidationProfileSelect.propTypes = {
    getInputValue: PropTypes.func.isRequired,
    profilesValues: PropTypes.array.isRequired
};

export default ValidationProfileSelect;
