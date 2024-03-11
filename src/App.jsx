import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Loginsignup from "./pages/Loginsignup";
import Footer from "./pages/Footer";
import DisplayProduct from "./pages/DisplayProduct";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/:category" element={<ShopCategory />} />
        {/* <Route
          path="/Women"
          element={<ShopCategory category="Women" banner={banner_women} />}
        />
        <Route
          path="/Kids"
          element={<ShopCategory category="Kid" banner={banner_kids} />}
        /> */}
        <Route path="/Product" element={<Product />} />
        <Route path=":ProductId" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Loginsignup />} />
        <Route path="/product/:productId" element={<DisplayProduct/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
