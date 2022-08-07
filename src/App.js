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
import ProductsCrops from "./Pages/ProductsCrops";
import DetailProductsCrops from "./Component/Products/DetailProductsCrops";
import ProductsHorticulture from "./Pages/ProductsHorticulture";
import DetailHorticulture from "./Component/Products/DetailHorticulture";
import ProductsAnimal from "./Pages/ProductsAnimal";
import DetailAnimal from "./Component/Products/DetailAnimal";
import RegisteredProducts from "./Pages/RegisteredProducts";

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
          <Route path="/products-estate/:item" element={<Products />} />
          <Route path="/products-crops/:item" element={<ProductsCrops />} />
          <Route path="/products-horticulture/:item" element={<ProductsHorticulture />} />
          <Route path="/products-animal/:item" element={<ProductsAnimal />} />
          <Route path="/detail-estate/:idProducts" element={<DetailProducts />} />
          <Route path="/detail-crops/:idProducts" element={<DetailProductsCrops />} />
          <Route path="/detail-horticulture/:idProducts" element={<DetailHorticulture />} />
          <Route path="/detail-animal/:idProducts" element={<DetailAnimal />} />
          <Route path="/registered-products" element={<RegisteredProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
