import React from 'react';
import { createRoot } from 'react-dom/client';
import MainComponent from './components';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<MainComponent />);