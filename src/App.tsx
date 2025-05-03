import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import './App.css'

function App() {
  return (
    <div className="bg-gray-100 text-black dark:bg-white">
      <Header />
      <Home />
      <Education/>
      <Projects/>
      <Achievements/>
      <Skills/>
      <Footer />
    </div>
  )
}

export default App
