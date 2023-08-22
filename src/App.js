import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar'
import About from './Components/About'
import Menu from './Components/Menu'
import Specials from './Components/Specials'
import Testimonials from './Components/Testimonials';
import Review from './Components/Review';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Specials/>
      <Testimonials/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
