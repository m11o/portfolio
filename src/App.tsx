import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Home from './components/pages/home'
import Resume from "./components/pages/resume"
import BlogList from "./components/pages/blog/list"
import BlogDetail from "./components/pages/blog/detail"
import Work from "./components/pages/work"

import Main from './components/layouts/main'

const App: React.FC = () => {
  return (
    <Router>
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Work />} />
          <Route path='/posts/:id' element={<BlogDetail />} />
          <Route path='/posts' element={<BlogList />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Main>
    </Router>
  )
}

export default App
