import React from 'react';
import { AppRouter } from '../components/Router/AppRouter';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './store'
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header></Header>
                <AppRouter></AppRouter>
                <Footer></Footer>
            </Router>
        </Provider>
    )
};

export default App;
