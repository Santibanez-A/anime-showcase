import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Anime from "./pages/Anime";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/anime" element={<Anime />} />

      </Routes>

    </BrowserRouter>

  );

};

export default App;