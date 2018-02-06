import React from 'react';
import {Button} from 'reactstrap';
import './Home.css';
import Upload from "./Upload";


class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Upload onImport={this.onImport} renderButton={(openFileDialog) => {
                    return (
                        <Button color="success" className="files-button" onClick={openFileDialog}>
                            <span>Choose PDF file</span>
                            <small>or directory</small>
                        </Button>
                    );
                }}/>
            </div>
        );
    }

    onImport = (files) => {
        console.log(files);
    }
}

export default Home;