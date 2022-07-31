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
import Estate from "./Pages/Estate";
import Horticulture from "./Pages/Horticulture";
import Crops from "./Pages/Crops";
import Animal from "./Pages/Animal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/registrasi-products" element={<RegisProducts />} />
          <Route path="/estate" element={<Estate />} />
          <Route path="/horticulture" element={<Horticulture />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail-products" element={<DetailProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
