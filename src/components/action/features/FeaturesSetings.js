import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    { value: 'actions', label: 'Actions' },
    { value: 'graphic states', label: 'Graphic States' },
    { value: 'information dictionary', label: 'Information Dictionary' },
    { value: 'output intents', label: 'Output Intents' },
    { value: 'shadings', label: 'Shadings' },
    { value: 'annotations', label: 'Annotations' },
    { value: 'fonts', label: 'Fonts' },
    { value: 'interactive form fields', label: 'Interactive Form Fields' },
    { value: 'pages', label: 'Pages' },
    { value: 'signatures', label: 'Signatures' },
    { value: 'color spaces', label: 'Color Spaces' },
    { value: 'forms', label: 'Forms' },
    { value: 'low level info', label: 'Low Level Info' },
    { value: 'patterns', label: 'patterns' },
    { value: 'document security', label: 'Document Security' },
    { value: 'icc profiles', label: 'ICC Profiles' },
    { value: 'metadata', label: 'Metadata' },
    { value: 'postscript', label: 'Postscript' },
    { value: 'embedded files', label: 'Embedded Files' },
    { value: 'images', label: 'Images' },
    { value: 'outlines', label: 'Outlines' },
    { value: 'properties dictionaries', label: 'Properties Dictionaries' }
];

class FeaturesSettings extends Component {
    render() {
        const selectedFeatures = this.props.selectedFeatures;
        console.log(this.props);
        return (
            <div className="features">
                <span className="feature-label">Include features:</span>
                <Select
                    options={options}
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

export default FeaturesSettings;
