import './App.css';
import ContactForm from './components/Contact.js'
import Hero from './components/Hero.js'
import Info from './components/Info.js'
import Navbar from './components/Navbar.js'

function App() {
  return (
    <div>
      {/* Redundant since this is a first/basic draft */}
      {/* <Navbar/> */}
      <Hero/>
      <Info/>
      {/* Redundant for now since I am emailing Gary. */}
      <ContactForm/>
    </div>
  );
}

export default App;
