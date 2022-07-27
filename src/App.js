import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Beranda from "./Pages/Beranda";
import './App.css';
import RegisProducts from "./Pages/RegisProducts";
import Products from "./Pages/Products";
import DetailProducts from "./Pages/DetailProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/registrasi-products" element={<RegisProducts />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail-products" element={<DetailProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
