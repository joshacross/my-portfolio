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
                <About />
                <Contact />
            </main>
        </>
    )
}

export default AboutPage;