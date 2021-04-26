import React, { InsHTMLAttributes } from 'react';
import "../styles/globals.css";

// Components
import NavBar from './components/NavBar';
import HeaderContent from './components/HeaderContent';
import CardContainer from './components/CardContainer';


export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <NavBar />
                    <HeaderContent />
                </header>
                    <CardContainer />
            </React.Fragment>
        )
    }
}
