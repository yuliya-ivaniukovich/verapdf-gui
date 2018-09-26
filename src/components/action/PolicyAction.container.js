import { connect } from "react-redux";
import { togglePolicyActive } from "../../redux/modules/configuration/policy";
import Action from "./Action";
import React from "react";
import PolicyAction from "./PolicyAction";

const mapStateToProps = state => {
    return {
        checked: state.configuration.policy.active,
        title: "Perform Policy Checks",
        collapsible: false,
        children: <PolicyAction state={state} />
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleActive: () => {
            dispatch(togglePolicyActive());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Action);
