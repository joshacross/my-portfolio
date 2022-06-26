import Portfolio from '../components/Portfolio'
import About from '../components/About';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';

function PortfolioPage () {
    return(
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <Portfolio />
                <About />
                <Contact />
            </main>
        </>
    )
}

export default PortfolioPage;