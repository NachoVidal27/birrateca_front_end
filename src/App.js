import "./App.css";
import Beers from "./routes/Beers";
import { Routes, Route } from "react-router-dom";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import AddBeer from "./routes/AddBeer";
import Login from "./routes/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/birra-form" element={<AddBeer />} />
        <Route path="/birras" element={<Beers />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
