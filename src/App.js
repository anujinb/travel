import React from "react"
import Navbar from "./components/Appbar"
import Home from "./components/Home"
import Services from "./components/Services"
import Booking from "./components/Booking"
import About from "./components/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HashRouter } from "react-router-dom"

function App() {
  return (
    <HashRouter>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/booking" exact component={Booking} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </HashRouter>
  )
}

export default App
