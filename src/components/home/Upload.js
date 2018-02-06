import React from 'react';
import PropTypes from 'prop-types';

class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.setFileInput = this.setFileInput.bind(this);
        this.openFileDialog = this.openFileDialog.bind(this);
        this.onFileSelected = this.onFileSelected.bind(this);
    }

    setFileInput(fileInput) {
        this.fileInput = fileInput;
    }

    openFileDialog() {
        this.fileInput.click();
    }

    onFileSelected(event) {
        if (event.target.files.length > 0) {
            this.props.onImport(event.target.files);
        }
    }

    render() {
        return (
            <div className="item import">
                {this.props.renderButton(this.openFileDialog)}
                <input type="file"
                       name="packageFile"
                       multiple
                       ref={this.setFileInput}
                       onChange={ this.onFileSelected } hidden={true}/>
            </div>
        );
    }
}

Upload.propTypes = {
    renderButton: PropTypes.func.isRequired,
    onImport: PropTypes.func.isRequired,
};

export default Upload;