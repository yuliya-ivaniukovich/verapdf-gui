import React from 'react';
import logo from './vera-logo.png';

import './App.css';
import Home from './home/Home';
import HelpMenu from "./header/helpMenu/HelpMenu";
import ValidationAction from './action/ValidationAction.container';
import FeaturesAction from './action/FeaturesAction.container';
import PolicyAction from './action/PolicyAction.container';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <header>
                    <img src={logo} alt="logo"/>
                    <h2>PDF/A Conformance Checker</h2>
                    <HelpMenu/>
                </header>
                <article>
                    {this.renderArticle()}
                    <ValidationAction/>
                    <FeaturesAction/>
                    <PolicyAction/>
                </article>
                <footer>
                    { /* Here will be components to control info view settings */ }
                </footer>
            </div>
        );
    }

    renderArticle() {
        switch (this.props.view) {
            case 'VALIDATION':
                return (<div>Validation started</div>);
            case 'HOME':
            default:
                return (<Home/>);
        }
    }
}

export default App;
