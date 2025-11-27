import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Products from "./Components/Products";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;