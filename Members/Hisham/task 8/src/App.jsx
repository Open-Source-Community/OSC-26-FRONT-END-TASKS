import './App.css'
import Nav from './components/Navbar/Nav'
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Footer from "./components/Footer/Footer"
function App() {

  return (
    <>
      <Nav/>
      <main>
        <About/>
        <Projects/>
      </main>
      <Footer/>
    </>
  )
}

export default App
