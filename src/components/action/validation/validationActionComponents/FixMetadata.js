import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function FixMetadata({ fixedFilePrefix, selectFixedFilePrefix }) {
    return (
        <Fragment>
            <div>
                <span className="file-save-label">save fixed file to:</span>
                <input
                    readOnly
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
                    onChange={e => selectFixedFilePrefix(e.target.value)}
                    type="text"
                    defaultValue={fixedFilePrefix}
                />
            </div>
        </Fragment>
    );
}

FixMetadata.propTypes = {
    fixedFilePrefix: PropTypes.string.isRequired,
    selectFixedFilePrefix: PropTypes.func.isRequired
};

export default FixMetadata;
