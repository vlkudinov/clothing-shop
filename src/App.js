import React from 'react';
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

import './App.scss'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop/hats' component={() => <h1>hats</h1>}/>
        <Route path='/shop/jackets' component={() => <h1>jackets</h1>}/>
        <Route path='/shop/sneakers' component={() => <h1>sneakers</h1>}/>
        <Route path='/shop/womens' component={() => <h1>womens</h1>}/>
        <Route path='/shop/mens' component={() => <h1>mens</h1>}/>
      </Switch>
    </div>
  )
}

export default App;
