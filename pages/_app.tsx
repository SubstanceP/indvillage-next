import React, { InsHTMLAttributes } from 'react';
import "../styles/globals.css";
import "../styles/materialize.css"

// Components
import NavBar from './components/NavBar';
import HeaderContent from './components/HeaderContent';
import CardContainer from './components/CardContainer';
import ContactForm from './components/ContactForm';

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <NavBar />
                    <HeaderContent />
                </header>
                    <CardContainer />
                <footer>
                    <ContactForm />
                </footer>
            </React.Fragment>
        )
    }
}
