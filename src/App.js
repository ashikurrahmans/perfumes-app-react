import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Menu/Navbar";
import Login from "./Components/LogIn/Login";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Signup from "./Components/LogIn/Signup";
import NotFound from "./Components/404NotFound/NotFound";
import Blog from "./Components/Blog/Blog";
import Inventory from "./Components/Inventory/Inventory";
import RequiredAuth from "./Components/Required/RequiredAuth";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <RequiredAuth>
          <Route path="/inventory" element={<Inventory />} />
        </RequiredAuth>
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
