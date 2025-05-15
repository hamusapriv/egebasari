import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RoomPage from "./pages/RoomPage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classroom" element={<RoomPage />} />
      </Routes>
    </>
  );
}
