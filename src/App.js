import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Beers from "./routes/Beers";
import { Routes, Route } from "react-router-dom";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import AddBeer from "./routes/AddBeer";
import Login from "./routes/Login";
import Footer from "./components/Footer";
import ScrollToTop from "./hooks/ScrollToTop";
import Profile from "./routes/Profile";
import PhotoTips from "./routes/PhotoTips"; // import NoAuthRequire from "./hooks/NoAuthRequire";
// import AuthRequire from "./hooks/AuthRequire";
import Loader from "./components/Loader";

function App() {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  if (splash) {
    return <Loader />;
  } else {
    return (
      <div className="App">
        <Navbar />
        <ScrollToTop>
          <Routes>
            {/* <Route element={<NoAuthRequire />}> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            {/* </Route> */}
            {/* <Route element={<AuthRequire />}> */}
            <Route path="/tips" element={<PhotoTips />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/birra-form" element={<AddBeer />} />
            <Route path="/birras" element={<Beers />} />
            {/* </Route> */}
          </Routes>
        </ScrollToTop>
        <Footer />
      </div>
    );
  }
}

export default App;
