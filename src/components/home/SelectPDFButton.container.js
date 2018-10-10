import { connect } from 'react-redux';

import SelectPDFButton from "./SelectPDFButton";
import { addFiles } from "../../redux/modules/filesToValidate";
import { createNewJob } from '../../redux/modules/job';

export const mapStateToProps = state => ({
    job: state.job,
    files: state.filesToValidate
});

export const mapDispatchToProps = (dispatch, { createJob }) => ({
    onSelect: fileList => {
        if (createJob) {
            dispatch(createNewJob(fileList))
        } else {
            dispatch(addFiles(fileList))
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectPDFButton);