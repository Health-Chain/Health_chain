// DoctorsProfile.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllDoctors from '../components/AllDoctors/AllDoctors';
import DoctorsDetails from '../components/DoctorsDetails/DoctorsDetails';

function DoctorsProfile() {
  return (
    <Routes>
      <Route path="/" element={<AllDoctors />} /> {/* List of all doctors */}
      <Route path="/doctor/:id" element={<DoctorsDetails />} /> {/* Doctor details */}
    </Routes>
  );
}

export default DoctorsProfile;

