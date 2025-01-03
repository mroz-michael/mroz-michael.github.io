import './styles/App.css'
import Home from './components/Home';
import Projects from './components/Projects'
import Experience from './components/Experience';
import { HashRouter as Router,  Route, Routes } from 'react-router-dom';
function App() {
  
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App
