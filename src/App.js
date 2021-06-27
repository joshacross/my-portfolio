import React from 'react';
import Navigation from './components/Nav';
import About from './components/About';

function App() {
    return (
        <div>
            <header>
                <Navigation></Navigation>
            </header>
            <main>
                <About></About>
            </main>
        </div>
    )
}

export default App;