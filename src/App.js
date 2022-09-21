import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import { useDispatch } from "react-redux";
import { API_CALL_REQUEST } from "./redux/apiCalling/action";
import Products from "./components/products/Products";
import {
  Routes,
  Route,
  // Redirect,
} from "react-router-dom";
import SingleItem from "./components/SingleItem/SingleItem";
function App() {
  const dispatch = useDispatch();
  
    dispatch({
      type: API_CALL_REQUEST,
    })
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/product/:id" element={<SingleItem/>} />
      </Routes>
    </div>
  );
}

export default App;
