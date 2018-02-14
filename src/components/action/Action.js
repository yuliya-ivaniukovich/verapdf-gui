import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';
import {Collapse, Button, CardBody, Card} from 'reactstrap';

import "./Action.css"

class Action extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.renderSettingsBtn = this.renderSettingsBtn.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    renderSettingsBtn() {
        let btnColor = this.props.checked ? (this.state.collapse ? '#397adf' : '#7d7d7d') : '#b7b7b7';
        if (this.props.collapsible) {
            if (this.props.checked) {
                return (
                    <div className="settings">
                        <Button onClick={this.toggle} className="settings-btn">
                            <MaterialIcon color={btnColor} icon="settings"/>
                        </Button>
                        <Collapse isOpen={this.state.collapse}>
                            <Card>
                                <CardBody>
                                    {this.props.children}
                                </CardBody>
                            </Card>
                        </Collapse>
                    </div>
                );
            }
            else {
                return (
                    <div className="settings">
                        <Button className="blocked-settings-btn">
                            <MaterialIcon color={btnColor} icon="settings"/>
                        </Button>
                    </div>
                );
            }
        }
        else {
            return null;
        }
    }

    renderCheckBox() {
        if (this.props.checked) {
            return (
                <MaterialIcon icon="check_box"/>
            );
        }
        else {
            return (
                <MaterialIcon icon="check_box_outline_blank"/>
            );
        }
    }

    render() {
        return (
            <div className="action ">
                <div className="check-box">{this.renderCheckBox()}</div>
                <div className="title">{this.props.title}</div>
                {this.renderSettingsBtn()}
            </div>
        );
    }
}

Action.propTypes = {
    checked: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    collapsible: PropTypes.bool.isRequired,
    children: PropTypes.object.isRequired
};

export default Action;
