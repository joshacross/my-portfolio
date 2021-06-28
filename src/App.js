import React, {useState} from 'react';
import Navigation from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact'
import Footer from './components/Footer';

function App() {

    const [contactSelected, setContactSelected] = useState(false);

    return (
        <div>
            <header>
                <Navigation
                    contactSelected={contactSelected}
                    setContactSelected={setContactSelected}>
                </Navigation>
            </header>
            <main>
                {!contactSelected ? (
                    <>
                    <About></About>
                    </>
                ) : (
                    <ContactForm></ContactForm>
                )}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    )
}

export default App;