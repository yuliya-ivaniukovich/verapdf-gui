import React from 'react';
import {Collapse} from 'reactstrap';
import File from './File.js'
import _ from 'lodash'
import SelectPDFButton from '../home/SelectPDFButton.container';
import MaterialIcon from 'material-icons-react';

import './SelectedFiles.css';

class SelectedFiles extends React.Component {
    constructor(props) {
        super(props);

        this.renderFiles = this.renderFiles.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        this.state = {
            open: true
        }
    }

    toggleOpen() {
        this.setState({...this.state,open: !this.state.open});
    }

    renderFiles() {
        return (
            _.keys(this.props.files)
                .map(file => {
                    return (<File key={file} onDel={this.props.onDel} path={file}/>);
                })
        );
    }

    render() {
        let fileNum = _.keys(this.props.files).length;
        return (
            <div className="selected-files">
                <h5>Selected {fileNum} {fileNum > 1 ? 'files' : 'file'}</h5>
                <div className='hide-btn' onClick={this.toggleOpen}><h5>{this.state.open ? 'hide' : 'show'}</h5></div>
                <Collapse isOpen={this.state.open}>
                    {this.renderFiles()}
                </Collapse>
                <SelectPDFButton renderButton={(openFileDialog) => {
                    return (
                        <div className="files-button" onClick={openFileDialog}>
                            <MaterialIcon icon="add_circle_outline"/>
                        </div>
                    );
                }}/>
            </div>
        );
    }
}

export default SelectedFiles;