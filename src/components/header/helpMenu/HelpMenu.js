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
import logo from './images/veraPDF-logo.jpg';
import partners from './images/partners.png'
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
                    <img src={logo} alt="veraPDF"></img>
                    <p>© 2015 veraPDF Consortium</p>
                    <p>Funded by the European Commission's PREFORMA Project</p>
                    <img src={partners} alt="partners"></img>
                    <p>Version: 1.10.6</p>
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