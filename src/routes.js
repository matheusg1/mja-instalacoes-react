import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Inicio from '../src/pages/Inicio';
import About from '../src/pages/About';
import Portfolio from './pages/Portfolio';
import Servicos from './pages/Servicos';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<About />} />
        </Routes>
    );
}