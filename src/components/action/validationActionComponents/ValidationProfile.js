import React, { Component } from "react";

import ValidationProfileSelect from "./ValidationProfileSelect";

class ValidationProfile extends Component {
    fileInput = null;

    openFile = () => {
        this.fileInput.click();
    };

    render() {
        const {
            getProfilePath,
            profilePath,
            getValidationProfileValue,
            profilesValues
        } = this.props;
        return (
            <div>
                <span>ValidationProfile:</span>
                <ValidationProfileSelect
                    profilesValues={profilesValues}
                    getInputValue={getValidationProfileValue}
                />
                <input
                    onChange={() => getProfilePath(this.fileInput.value)}
                    className="input-file-hidden"
                    type="file"
                    ref={input => (this.fileInput = input)}
                />
                <input
                    className="input-path"
                    defaultValue={profilePath}
                    type="text"
                />
                <button onClick={this.openFile} className="btn-browse">
                    Browse
                </button>
            </div>
        );
    }
}

export default ValidationProfile;
