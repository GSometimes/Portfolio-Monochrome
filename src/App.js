import './App.css';
import { Switch, Route, Link } from "react-router-dom";

import Landing from "./components/Landing"


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/"><Landing /></Route>
      {/* <Route path="/about"><About/></Route> */}
      </Switch>
    </div>
  );
}

export default App;
