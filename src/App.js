import React from 'react';
import 'normalize.css';
import './styles/main.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="App">
    <Header/>
    <Footer/>
  </div>
);

export default App;
