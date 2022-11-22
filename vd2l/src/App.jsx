import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';

function App() {

  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
