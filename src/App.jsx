import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import Appoinments from "./pages/Appoinments";
import DoctorsProfile from "./pages/DoctorsProfile"

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/appoinment/doc:id" element={<Appoinments />} />
        <Route path="/doctorsprofile" element={<DoctorsProfile/>}></Route>

      </Routes>
    </div>
  );
};

export default App;
