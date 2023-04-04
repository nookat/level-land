import React from 'react';
import 'normalize.css';
import './styles/main.scss';

import { cn } from '@bem-react/classname';
import './App.scss';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';

import IndexPage from './views/Index/IndexPage/IndexPage';

const App = () => {
  const app = cn('App');

  return (
    <div className={app()}>
      <div className={app('Wrapper')}>
        <Header/>
          <IndexPage/>
        <Footer/>
      </div>
    </div>
  )
};

export default App;
