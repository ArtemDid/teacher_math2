import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Main from './components/main'
import About from './components/about'
import Header from './components/header'
import Footer from './components/footer'
import Myeduc from './components/myeduc'


function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/myeduc" component={Myeduc} />
        </Switch>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
