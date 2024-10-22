import React from 'react'
import DoctorsProfile from './pages/DoctorsProfile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <div>
      
      <Router>
      <Routes>
        <Route path="/*" element={<DoctorsProfile />} /> {/* All doctor-related routes */}
      </Routes>
    </Router>
    </div>
  )
}

export default App
