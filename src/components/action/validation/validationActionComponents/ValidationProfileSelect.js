import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ValidationProfileSelect.css';

class ValidationProfileSelect extends Component {
    componentDidMount = () => {
        this.props.getProfiles()
    }

    render() {
        const { getInputValue, profilesValues, toggleShowInput, isLoaded } = this.props;
        return (
            <select
                onChange={e => {
                    let isShow = e.target.value === 'custom';
                    isShow ? toggleShowInput(isShow) : toggleShowInput(isShow);
                    getInputValue(e.target.value);
                }}
                className="validation-profile-select"
            >
                <option>auto-detect</option>
                <option>custom</option>
                {isLoaded && profilesValues.map((value, idx) => (
                    <option key={idx}>PDF/A-{value}</option>
                ))}
            </select>
        );
    }
}

ValidationProfileSelect.propTypes = {
    profilesValues: PropTypes.array,
    toggleShowInput: PropTypes.func.isRequired,
    getInputValue: PropTypes.func.isRequired,
    isLoaded: PropTypes.bool.isRequired
};

export default ValidationProfileSelect;
