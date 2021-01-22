import './App.css';
import { Switch, Route } from "react-router-dom";
import React, { useState } from 'react'
import { CursorProvider } from 'react-cursor-custom'
// import styled from 'styled-components'


import Landing from "./components/Landing"
import About from "./components/About"
import Work from "./components/Work"
import Contact from "./components/Contact"
// import NavBar from "./components/NavBar"

function App() {

const [ color ] = useState('#0C95F1')
const [ transition ] = useState(100)
const [ ring ] = useState(false)
const [ ringSize ] = useState(36)

  return (
    <div className="App">
      <CursorProvider color={color} noRing={ring} ringSize={ringSize} transitionTime={transition}>
      {/* <NavBar /> */}
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
