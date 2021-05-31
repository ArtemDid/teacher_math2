import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Main from './components/main'
import About from './components/about'
import Header from './components/header'
import Footer from './components/footer'
import Myeduc from './components/myeduc'
import Znodpa from './components/znodpa'
import Work from './components/work'
import Portfolio from './components/portfolio'
import Photo from './components/photo'
import NormData from './components/normData'


function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/myeduc" component={Myeduc} />
          <Route path="/znodpa" component={Znodpa} />
          <Route path="/work" component={Work} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/photo" component={Photo} />
          <Route path="/norm" component={NormData} />

        </Switch>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
