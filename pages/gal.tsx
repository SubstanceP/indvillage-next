import React, { InsHTMLAttributes } from 'react';
import "../styles/globals.css";
import "../styles/materialize.css"

// Components
import NavBar from './components/NavBar';
import HeaderContent from './components/HeaderContent';
import ContactForm from './components/ContactForm';
import Gallery from './components/Gallery';




export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                    <NavBar />
                    <HeaderContent />
                </header>
                    <Gallery />
                <footer>
                    <ContactForm />
                </footer>
            </React.Fragment>
        )
    }
}
