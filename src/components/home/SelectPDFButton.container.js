import { connect } from 'react-redux';

import SelectPDFButton from "./SelectPDFButton";
import { filesToValidateActions } from "../../redux/modules/filesToValidate";
import { jobActions } from '../../redux/modules/job';

export const mapStateToProps = state => ({
    job: state.job,
    files: state.filesToValidate
});

export const mapDispatchToProps = (dispatch, { createJob }) => ({
    onSelect: fileList => {
        if (createJob) {
            dispatch(jobActions.createJobRequest(fileList))
        } else {
            dispatch(filesToValidateActions.addFilesRequest(fileList))
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPDFButton);