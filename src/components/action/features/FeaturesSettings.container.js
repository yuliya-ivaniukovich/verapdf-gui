import { connect } from 'react-redux';

import { featuresActions } from '../../../redux/modules/configuration/features';
import FeatureSettings from './FeaturesSettings';

const { addSelectedFeatures } = featuresActions;

const mapStateToProps = state => {
    return {
        selectedFeatures: state.configuration.features.selectedFeatures
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addSelectedFeatures: selectedFeatures => {
            dispatch(addSelectedFeatures(selectedFeatures));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FeatureSettings);
