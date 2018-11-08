import { connect } from 'react-redux';

import SelectPDFButton from "./SelectPDFButton";
import { filesToValidateActions } from "../../redux/modules/filesToValidate";
import { jobActions } from '../../redux/modules/job';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch, { createJob }) => ({
    onSelect: file => {
        if (createJob) {
            dispatch(jobActions.createJob(file))
        } else {
            const isElectron = window.location.search.includes('electron=true') || window.location.protocol === 'file:' ;
            isElectron ? dispatch(filesToValidateActions.addLocalFile(file)):
                        dispatch(filesToValidateActions.addFile(file));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPDFButton);