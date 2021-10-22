import React from 'react';
import Navbar from './components/Navbar';
import TextUtils from './components/TextUtils';
import { Route, Switch} from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
      <>
      <Navbar/>
       <Switch>
         <Route exact path="/Home" component={Home} ></Route>
         <Route exact path="/TextUtils" component={TextUtils}></Route>
       </Switch>
      </>
  );
}

export default App;
