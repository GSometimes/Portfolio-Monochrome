import './App.css';
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/"><Landing /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/work"><Work/></Route>
      <Route path="/contact"><Contact/></Route>
      </Switch>
    </div>
  );
}

export default App;
