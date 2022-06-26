import Jumbotron from '../components/Jumbotron';
import About from '../components/About';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';

function AboutPage () {
    return(
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Jumbotron />
                <About />
                <Contact />
            </main>
        </>
    )
}

export default AboutPage;