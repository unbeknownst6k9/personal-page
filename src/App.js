import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';
import logo from './logo.svg';
import './App.css';

//Pages
import IndexPage from './pages/Index';
import NotFoundPage from './pages/404';
import ArchievePage from './pages/Archieve';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<IndexPage />} />
                  <Route exact path="/Archieve" element={<ArchievePage />} />
                  <Route exact path="/About" element={<AboutPage />} />
                  <Route exact path="/Contact" element={<ContactPage />} />

                  <Route exact path="/404" element={<NotFoundPage />} />
                  <Route path="*" element={<Navigate replace to="/404"/>}/>
              </Routes>
          </BrowserRouter>
         
    </div>
  );
}

export default App;
