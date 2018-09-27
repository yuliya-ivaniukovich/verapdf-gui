import { connect } from 'react-redux';

import { featuresActions } from '../../../redux/modules/configuration/features';
import FeaturesAction from './FeatureAction';

const { toggleFeaturesActive, addSelectedFeatures } = featuresActions;

const mapStateToProps = state => {
    return {
        checked: state.configuration.features.active,
        selectedFeatures: state.configuration.features.selectedFeatures
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleActive: () => {
            dispatch(toggleFeaturesActive());
        },
        addSelectedFeatures: selectedFeatures => {
            dispatch(addSelectedFeatures(selectedFeatures));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeaturesAction);
