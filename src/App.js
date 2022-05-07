import NavBar from "./components/NavBar/NavBar";
import { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';





function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

/*faltan escribir las rutas del itemListContainer */
