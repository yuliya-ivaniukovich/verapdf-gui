import React from 'react';
import ValidationAction from '../action/ValidationAction.container';
import FeaturesAction from '../action/FeaturesAction.container';
import PolicyAction from '../action/PolicyAction.container';

class Validation extends React.Component {
    render() {
        return (
            <div className="validation">
                <ValidationAction/>
                <FeaturesAction/>
                <PolicyAction/>
            </div>
        );
    }
}

export default Validation;