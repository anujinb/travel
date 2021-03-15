import React from 'react';
import Navbar from './components/Appbar';
import Home from './components/Home';
import Services from './components/Services';
import Booking from './components/Booking';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/booking" component={Booking} />
      </Switch>
    </Router>
  );
}

export default App;
