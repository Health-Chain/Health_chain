import Hero from "../components/Hero/Hero";
import Speciality from "../components/Speciality/Speciality";
import CreateAccount from "../components/CreateAccount/CreateAccount";
import TopDoctors from "../components/Doctors/TopDoctors";

const HomePage = () => {
  return (
    <div
      className="homepage"
      style={{ backgroundColor: "#ffffff", height: "auto" }}
    >
      <Hero />
      <Speciality />
      <TopDoctors />
      <CreateAccount />
    </div>
  );
};

export default HomePage;
