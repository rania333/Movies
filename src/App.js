import './App.css';
import FormComponent from './component/Signup/FormComponent';
import React, {useState} from 'react';
import NavbarComponent from './component/Navbar/NavbarComponent';
import Home from './component/Home/Home';
import Fav from './component/Fav/Fav';
import Filter from './component/Filter/Filter';
import Signup from './component/Signup/FormComponent';
import Login from './component/Login/Login';
import Details from './component/Details/Details';
import {Switch, Route, Redirect} from 'react-router-dom';

function App() {
  // let [login, setLogin] = useState(true);
  return (
    <div className="App">
      <NavbarComponent/>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/filter' component={Filter} />
        {/* handle fav */}
        {/* <Route path='/fav'>
          {login ? <Fav/> : <Redirect to='/'/>}
        </Route> */}
        <Route path="/fav" component={Fav} />
        <Route path="/details/:id" component={Details} />

        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
