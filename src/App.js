import React, {useState} from 'react';
import Navigation from './components/Navigation';
import Jumbotron from './components/Jumbotron';
import Portfolio from './components/Portfolio'
import About from './components/About';
import ContactForm from './components/Contact'
import Footer from './components/Footer';

function App() {

    const [contactSelected, setContactSelected] = useState(false);

    return (
            <div>
                <header>
                    <Navigation>
                        contactSelected={contactSelected}
                        setContactSelected={setContactSelected}
                    </Navigation>
                </header>
                <main>
                    <Jumbotron />
                    <Portfolio />
                    {!contactSelected ? (
                        <>
                        <About />
                        </>
                    ) : (
                        <ContactForm />
                    )}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
    )
}

export default App;