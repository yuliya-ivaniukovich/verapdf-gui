import React from 'react';
import logo from './vera-logo.png';
import MaterialIcon from 'material-icons-react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header>
                    <img src={logo} alt="logo"/>
                    <h2>PDF/A Conformance Checker</h2>
                    <MaterialIcon icon="help" invert/>
                </header>
                <article className="files-info">
                    <div>
                        <Button className="files-button">
                            Choose PDF file
                            <br/>
                            <small>or directory</small>
                        </Button>
                    </div>
                </article>
                <footer>
                    { /* Here will be components to control info view settings */ }
                </footer>
            </div>
        );
    }
}

/*
class HelpDropdown extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    <MaterialIcon icon="help"/>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>GUI</DropdownItem>
                    <DropdownItem>Validation</DropdownItem>
                    <DropdownItem>Policy</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Check for updates</DropdownItem>
                    <DropdownItem>About</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}
*/

export default App;
