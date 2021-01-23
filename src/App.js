import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Countries from './components/Countries'
import Country from './components/Country'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact>
          <Countries />
        </Route>
        <Route path="/countries/:Slug" children={<Country />}></Route>
      </Router>
    </>
  )
}

export default App
