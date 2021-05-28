import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Main from './components/main'
import About from './components/about'
import Header from './components/header'
import Footer from './components/footer'



function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
