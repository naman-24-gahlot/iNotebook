// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App'; 


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
 
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Find the root element where you want to mount your app
const container = document.getElementById('root');

// Create a root and render your app into the container
const root = createRoot(container);
root.render(<App />);
