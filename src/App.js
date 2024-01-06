import React, { useState } from 'react';

import Home from './components/Home';
import Menu from './components/Menu';
import Cats from './components/Cats';
import Booking from './components/Booking';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileHome from './components/MobileHome';
import MobileFooter from './components/MobileFooter';
import MobileHeader from './components/MobileHeader';

function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState({
        width: undefined,
        height: undefined,
    });

    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);

        // Call handleResize immediately to set the initial size
        handleResize();

        // Remove the event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures this effect runs only once on mount

    return windowSize;
}




function App() {
    const { width } = useWindowSize();
    const [currentPage, setCurrentPage] = useState('home');

    const isMobile = width <= 768;

    if (isMobile) {
        return (
            <div className="App">
                <MobileHeader setCurrentPage={setCurrentPage} />

                {currentPage === 'home' && <MobileHome />}
                {currentPage === 'menu' && <Menu />}
                {currentPage === 'cats' && <Cats />}
                {currentPage === 'booking' && <Booking />}

                <MobileFooter setCurrentPage={setCurrentPage} />

                <div>
                    <button onClick={() => setCurrentPage('home')}>Home</button>
                    <button onClick={() => setCurrentPage('cats')}>Cats</button>
                    <button onClick={() => setCurrentPage('menu')}>Menu</button>
                    <button onClick={() => setCurrentPage('booking')}>Booking</button>
                </div>
            </div>
        );
    }

    return (
        <div className="App">

            <Header setCurrentPage={setCurrentPage} />

            {currentPage === 'home' && <Home />}
            {currentPage === 'menu' && <Menu />}
            {currentPage === 'cats' && <Cats />}
            {currentPage === 'booking' && <Booking />}

            <Footer setCurrentPage={setCurrentPage}/>

            

            <div>
                <button onClick={() => setCurrentPage('home')}>Home</button>
                <button onClick={() => setCurrentPage('cats')}>Cats</button>
                <button onClick={() => setCurrentPage('menu')}>Menu</button>
                <button onClick={() => setCurrentPage('booking')}>Booking</button>
            </div>
        </div>
    );
}

export default App;