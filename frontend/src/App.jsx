import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage"
import Test from "./components/test1.jsx"
import Test2 from "./components/test2.jsx"
function App() {

  return (
      <Router>
          <Routes>
              {/* The single-page AI website is mapped to the root URL */}
              <Route path="/" element={<MainPage />} />
              <Route path="/t" element={<Test />} />
              <Route path="/tt" element={<Test2 />} />
          </Routes>
      </Router>
  );
}

export default App
