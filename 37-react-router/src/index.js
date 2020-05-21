import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
// router component interfaces with the browser
// holds state
// by wrapping it around App, now app has access to that BrowserRouter and it's state (generally)

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
