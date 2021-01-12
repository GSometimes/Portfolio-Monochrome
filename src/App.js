import './App.css';
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/"><Landing /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/portfolio"><Portfolio/></Route>
      <Route path="/contact"><Contact/></Route>
      </Switch>
    </div>
  );
}

export default App;
