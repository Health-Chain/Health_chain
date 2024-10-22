import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutUS from "./pages/AboutUS";
import Navbar from "./components/Navbar/Navbar";
import Appoinments from "./pages/Appoinments";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/appoinment/doc:id" element={<Appoinments />} />
      </Routes>
    </div>
  );
};

export default App;
