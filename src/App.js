import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



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
        <Route path='/shop/categories/:categoryId' element={<ItemListContainer />} />
        <Route path='/shop/item/:id' element={<ItemDetailContainer />} />
        <Route path='/shop/categories/:categoryId/item/:id' element={<ItemDetailContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
