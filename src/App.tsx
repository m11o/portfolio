import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Home from './components/pages/home'
import Resume from "./components/pages/resume"

const Work = () => <h1>Work</h1>
const Blog = () => <h1>Blog</h1>

import Main from './components/layouts/main'

const App = () => {
  return (
    <Router>
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Work />} />
          <Route path='/posts' element={<Blog />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Main>
    </Router>
  )
}

export default App
