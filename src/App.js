
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ApiDataFetch from './components/ApiDataFetch';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Cards from './components/Cards';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';


function App() {
  const [search,setSearch] = useState("")
  return (
    <div className="App">
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path='/' element={<ApiDataFetch search={search} />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/cardsDel/:id' element={<ProductDetail/>}/>
      </Routes>
      <Footer/>
       

    </div>
  );
}

export default App;
