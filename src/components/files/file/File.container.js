import {connect} from 'react-redux';

import { filesToValidateActions } from "../../../redux/modules/filesToValidate";
import File from "./File";

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
    onDel: (file) => {
        dispatch(filesToValidateActions.delFile(file))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(File);