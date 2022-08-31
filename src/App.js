import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages";
import Form from "./pages/form";
import Validate from "./pages/validate";
import Wallet from "./pages/wallet";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='wallet' element={<Wallet />} />
        <Route path='form' element={<Form />} />
        <Route path='validate' element={<Validate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
