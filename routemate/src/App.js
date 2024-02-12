import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from "./components/Home"
import { ProductList } from "./components/ProductList"
import { ProductDetail } from "./components/ProductDetail"
import { Contact } from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="products/1001" element={<ProductDetail />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
