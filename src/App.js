import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
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
          <HashRouter>
              <Routes>
                  <Route path="/" element={<IndexPage />} />
                  <Route path="/Archieve" element={<ArchievePage />} />
                  <Route path="/About" element={<AboutPage />} />
                  <Route path="/Contact" element={<ContactPage />} />

                  <Route path="/404" element={<NotFoundPage />} />
                  <Route path="*" element={<Navigate replace to="/404"/>}/>
              </Routes>
          </HashRouter>
         
    </div>
  );
}

export default App;
