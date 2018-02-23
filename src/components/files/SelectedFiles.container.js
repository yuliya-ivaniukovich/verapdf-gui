import {connect} from 'react-redux';

import {getFilesToValidate,delFile} from "../../redux/modules/filesToValidate";
import SelectedFiles from "./SelectedFiles";

export const mapStateToProps = state => ({
    files: getFilesToValidate(state)
});

export const mapDispatchToProps = dispatch => ({
    onDel: file=>{
        dispatch(delFile(file))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedFiles);