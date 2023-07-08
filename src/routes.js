import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Inicio from '../src/pages/Inicio';
import About from '../src/pages/About';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre" element={<About />} />
        </Routes>
    );
}