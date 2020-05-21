import React from 'react';
import './App.css';
import { Route, Switch  } from 'react-router-dom';
import { Auth, Help, Home, Nav, PetIndex, PetProfile } from './components';

const App = props => {
  return (
    <div className="App">
    { /** 
      *  TODOs: 
      * 1. Decide if any components should always be shown - those won't go into routes
      * 2. For the rest of the components, use the tools from React Router to make sure they are the only component rendered at their given path
      * 
    */}
      <Nav />
      <Switch> {/** in switch, make sure you go most specific to least and/or use exact  */}
        {/**
         * Router props => auto passed down in component notation 
         */}
        <Route path="/pets/:id" component={PetProfile}/> 
        <Route path="/pets" component={PetIndex}/> 
        <Route path="/login" component={Auth}/>
        <Route path="/help" render={(routerProps) => <Help urgency={5} {...routerProps}/>}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
