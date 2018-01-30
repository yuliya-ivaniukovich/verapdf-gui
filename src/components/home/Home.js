import React from 'react';
import { Button } from 'reactstrap';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <Button color="success" className="files-button">
                    <span>Choose PDF file</span>
                    <small>or directory</small>
                </Button>
            </div>
        );
    }
}

export default Home;