import '@/styles/app.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoApp from '@/components/TodoApp'
//import Navbar from '@/components/Navbar'
import Form from '@/components/Form'
import {BrowserRouter as Router} from 'react-router-dom';

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <Router>
      <TodoApp />
    </Router>
  </React.StrictMode>

);
