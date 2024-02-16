import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flight from "./pages/Flight";
import Cabs from "./pages/Cabs";
import Hotels from "./pages/Hotels";
import Logoin from "./pages/Logoin";
import Trains from "./pages/Trains";
import SignUp from "./pages/SignUp";
import Buses from "./pages/Buses";
import Navbar from "./components/Navbar";
import Discover from "./pages/Discover";
import Agra from "./pages/Agra";
import Goa from "./pages/Goa";
import Mysore from "./pages/Mysore";
import Kashmir from "./pages/Kashmir";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight" element={<Flight />} />
        
        <Route path="/trains" element={<Trains />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/buses" element={<Buses />} />
        <Route path="/cabs" element={<Cabs />} />
        <Route path="/login" element={<Logoin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/agra" element={<Agra />} />
        <Route path="/goa" element={<Goa />} />
        <Route path="/mysore" element={<Mysore />} />
        <Route path="/kashmir" element={<Kashmir />} />
      </Routes>
    </div>
  );
};

export default App;
