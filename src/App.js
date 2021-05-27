import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Main from './components/main'
import Main2 from './components/main2'
import Header from './components/header'
import Footer from './components/footer'



function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/main2" component={Main2} />
        </Switch>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
