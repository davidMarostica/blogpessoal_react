import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cadastro from "./pages/cadastro/Cadastro";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow flex items-center justify-center">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Cadastro />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
