import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
import Beranda from "./Pages/Beranda";
import './App.css';
import RegisProducts from "./Pages/RegisProducts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/registrasi-products" element={<RegisProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
