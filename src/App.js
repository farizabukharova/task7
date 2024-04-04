// src/App.js

import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import PerformanceAnalysis from './components/PerformanceAnalysis';

function App() {
    return (
        <div className="App">
            <h1>My Image Gallery</h1>
            <ImageGallery />
            <PerformanceAnalysis />
        </div>
    );
}

export default App;
