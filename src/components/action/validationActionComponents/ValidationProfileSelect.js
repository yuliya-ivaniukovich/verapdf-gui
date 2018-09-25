import React, { Component } from "react";

import "./ValidationProfileSelect.css";

class ValidationProfileSelect extends Component {
    render() {
        const { getInputValue, profilesValues } = this.props;
        return (
            <select
                onChange={e => getInputValue(e.target.value)}
                className="validation-profile-select"
            >
                {profilesValues.map((value, idx) => (
                    <option key={idx}>{value}</option>
                ))}
            </select>
        );
    }
}

export default ValidationProfileSelect;
