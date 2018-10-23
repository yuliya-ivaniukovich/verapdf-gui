import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class FeaturesSettings extends Component {
    
    render() {
        const { selectedFeatures } = this.props;
        const featuresValues = this.props.featuresValues.map(value => ({value, label: value}));
        return (
            <div className="features">
                <span className="feature-label">Include features:</span>
                <Select
                    options={featuresValues}
                    isMulti
                    className="select"
                    onChange={selectedFeatures => {
                        this.props.addSelectedFeatures(selectedFeatures);
                    }}
                    defaultValue={selectedFeatures[0]}
                />
            </div>
        );
    }
}
FeaturesSettings.propTypes = {
    selectedFeatures: PropTypes.array.isRequired,
    featuresValues: PropTypes.array.isRequired
}
export default FeaturesSettings;
