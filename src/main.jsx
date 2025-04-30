import { HashRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

import Nav from './components/navbar/nav.jsx';
import Home from './pages/home/home.jsx';
import Project from './pages/project/project.jsx';
import About from './pages/about/about.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/about' element={<About />}/>
      </Route>
    </Routes>
  </HashRouter>
)
