import './App.css';
import { Switch, Route } from "react-router-dom";
import React, { useState } from 'react'
import { CursorProvider } from 'react-cursor-custom'



import Landing from "./components/Landing"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"



function App() {

const [ color ] = useState('#0C95F1')
const [ transition ] = useState(100)
const [ ring ] = useState(false)
const [ ringSize ] = useState(36)

  return (
    <div className="App">
      <CursorProvider color={color} noRing={ring} ringSize={ringSize} transitionTime={transition}>
      <Switch>
      <Route exact path="/"><Landing /></Route>
      <Route path="/about"><About /></Route>
      <Route path="/work"><Work/></Route>
      <Route path="/contact"><Contact/></Route>
      </Switch>
      </CursorProvider>

    </div>
  );
}

export default App;
