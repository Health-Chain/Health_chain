import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import Appoinments from "./pages/Appoinments";
import AllDoctors from "./components/AllDoctors/AllDoctors";
import DoctorsDetails from "./components/DoctorsDetails/DoctorsDetails";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="doctors" element={<AllDoctors />} />
        <Route path="doctor/:id" element={<DoctorsDetails />} />
        <Route path="appoinment/:id" element={<Appoinments />} />
      </Routes>
    </div>
  );
};
export default App;
