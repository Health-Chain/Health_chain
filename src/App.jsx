import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import Appoinments from "./pages/Appoinments";
import DoctorsProfile from "./pages/DoctorsProfile";
import Consultants from "./pages/Consultants";
import Emergency from "./pages/Emergency";
import Insurance from "./pages/Insurance";
import Create_account from "./pages/Create_account";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appoinment/:docId" element={<Appoinments />} />
        <Route path="/doctorsprofile" element={<DoctorsProfile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/consultants" element={<Consultants />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/insurance" element={<Insurance/>} />
        <Route path="create_account" element={<Create_account/>}/>
       </Routes>
    </div>
  );
};
export default App;


