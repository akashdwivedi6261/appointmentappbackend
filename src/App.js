import "./styles.css";
import styled from "styled-components";

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./Contexts/AuthContextProvider";
import HomePage from "./components/HomePage";
import SlotsPage from "./components/SlotsPage";

export default function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <Routes>
           <Route index element={<HomePage />} />
           <Route path="/:id" element={<SlotsPage />} />
      </Routes>
    </div>
  );
}
