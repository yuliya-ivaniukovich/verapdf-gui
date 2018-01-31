import React, {Component} from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from 'reactstrap';
import aboutVerapdf from './about-verapdf.PNG';
import 'bootstrap/dist/css/bootstrap.css';
import './HelpMenu.css';

class HelpMenu extends Component {
    constructor(props) {
        super(props);
        this.renderOptions = this.renderOptions.bind(this);
        this.toggle = this.toggle.bind(this);
        this.renderModal = this.renderModal.bind(this);
        this.state = {
            modal: false
        };
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    renderModal() {
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle} className='about-us-modal'>
                <ModalHeader toggle={this.toggle}>About us</ModalHeader>
                <ModalBody>
                    <img src={aboutVerapdf} alt="about veraPDF"></img>
                </ModalBody>
                <ModalFooter>
                    <a href="http://verapdf.org/" target="_blank" className="visit-verapdforg">Visit veraPDF.org</a>
                    <Button color="secondary" onClick={this.toggle}>OK</Button>
                </ModalFooter>
            </Modal>
        );
    }

    renderOptions() {
        return (
            <DropdownMenu>
                <DropdownItem onClick={() => window.open('http://docs.verapdf.org/gui/')}>GUI</DropdownItem>
                <DropdownItem onClick={() => window.open('http://docs.verapdf.org/validation/')}>Validation</DropdownItem>
                <DropdownItem onClick={() => window.open('http://docs.verapdf.org/policy/')}>Policy</DropdownItem>
                <DropdownItem className="divider" divider></DropdownItem>
                <DropdownItem onClick={this.toggle}>About us</DropdownItem>
                {this.renderModal()}
            </DropdownMenu>
        );
    }

    render() {
        return (
            <UncontrolledDropdown>
                <DropdownToggle className="help-button">
                    <span className="material-icons">help_outline</span>
                </DropdownToggle>
                {this.renderOptions()}
            </UncontrolledDropdown>
        );
    }
}

export default HelpMenu;