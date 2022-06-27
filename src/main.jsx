import React from 'react'
import ReactDOM from 'react-dom/client'
import { CriptoUIApp } from './CriptoUIApp'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CriptoUIApp />
  </BrowserRouter>
)
