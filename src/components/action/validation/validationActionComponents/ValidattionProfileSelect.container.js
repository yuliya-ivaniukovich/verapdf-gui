import { connect } from 'react-redux';

import ValidationProfileSelect from './ValidationProfileSelect';
import { profileActions } from '../../../../redux/modules/validationProfiles';

const { loadProfiles } = profileActions;

const mapStateToProps = state => ({
    profilesValues: state.validationProfiles.values,
    isLoaded: state.validationProfiles.isLoaded
})

const mapDispatchToProps = dispatch => ({
    getProfiles: () => dispatch(loadProfiles())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ValidationProfileSelect);

