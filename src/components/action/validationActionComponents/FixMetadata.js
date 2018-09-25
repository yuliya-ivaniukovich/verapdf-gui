import React, { Fragment } from "react";

function FixMetadata(props) {
    const { prefix, selectPrefix } = props;
    return (
        <Fragment>
            <div>
                <span className="file-save-label">save fixed file to:</span>
                <input
                    className="save-fixed-file"
                    placeholder="Near source file"
                    type="text"
                />
                <button className="btn-browse">Browse</button>
            </div>
            <div className="input-prefix-container">
                <span className="prefix-label">with prefix:</span>
                <input
                    className="input-prefix-value"
                    onChange={e => selectPrefix(e)}
                    type="text"
                    defaultValue={prefix}
                />
            </div>
        </Fragment>
    );
}

export default FixMetadata;
