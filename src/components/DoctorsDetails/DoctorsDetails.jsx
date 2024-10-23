// DoctorDetails.jsx
import { useParams } from "react-router-dom";
import { doctors } from "../../data/doctorsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DoctorsDetails() {
  const { id } = useParams(); // Get doctor ID from URL
  const doctor = doctors.find((doc) => doc.id === parseInt(id));

  const settings = {
    dots: true, // Enable dots pagination
    speed: 500, // Set the speed of transition
    slidesToShow: 3, // Show 3 slides at once (on big screens)
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval in milliseconds (3 seconds)
    responsive: [
      {
        breakpoint: 1024, // Screen width below 1024px (for smaller screens)
        settings: {
          slidesToShow: 2, // Show 2 slides at once
          slidesToScroll: 1, // Scroll one slide at a time
          infinite: true,
        },
      },
      {
        breakpoint: 600, // Screen width below 600px (for mobile screens)
        settings: {
          slidesToShow: 1, // Show 1 slide at once
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-8 mt-12">
      {doctor ? (
        <div>
          <div className="flex items-center md:items-start justify-center md:flex-row flex-col md:gap-8">
            <div>
              <img src={doctor.src} className="bg-blue shadow-2xl rounded-md" />
            </div>
            <div className="md:w-96">
              <div className="bg-white p-8 md:p-12 shadow-2xl   rounded-md">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="font-bold text-2xl">{doctor.name}</h2>
                  <img src={doctor.icon} className="w-10 h-10" alt="" />
                </div>
                <p className="flex flex-col md:flex-row font-semibold mb-3 text-gray-900">
                  {doctor.skill}{" "}
                  <span className="text-gray-500 md:mx-4 py-2 px-4 md:mt-0 mt-2 border rounded-full text-sm">
                    {doctor.year}
                  </span>
                </p>
                <h5 className=" text-gray-900 font-medium text-lg">
                  {doctor.about}{" "}
                  <FontAwesomeIcon icon={doctor.icon2} className="mr-2 w-3" />
                </h5>
                <p className="text-sm  text-gray-800">{doctor.text}</p>
                <h5 className="pt-2 font-bold text-gray-600">
                  {doctor.appoint} :{" "}
                  <span className="text-gray-950">{doctor.amount} </span>
                </h5>
              </div>

              <div>
                <h5>{doctor.booking}</h5>
                <div>
                  <ul className="flex flex-col  mt-4 font-medium    md:flex-col md:mt-0 ">
                    <li
                      className="hidden"
                      // onClick={() => handleNavbarClick("All")}
                    >
                      All
                    </li>
                    <li>
                      <a
                        href="#"
                        // onClick={() => handleCombinedClick("Category 1")}
                        className=" mt-3 border  flex flex-col items-center justify-center gap-1  py-4 px-2 text-gray-600  rounded-full "
                      >
                        <span>MON</span> <span>22</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        // onClick={() => handleCombinedClick("Category 2")}
                        className=" border py-4 px-2 mt-3 text-gray-600 rounded-full flex flex-col items-center justify-center gap-1   "
                      >
                        {" "}
                        <span>TUE</span> <span>23</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        // onClick={() => handleCombinedClick("Category 3")}
                        className=" py-4 px-2 mt-3 border text-gray-600 rounded-full flex flex-col items-center justify-center gap-1  "
                      >
                        <span>WED</span> <span>24</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        // onClick={() => handleCombinedClick("Category 4")}
                        className=" py-4 px-2 border mt-3 text-gray-600 rounded-full flex flex-col items-center justify-center gap-1"
                      >
                        <span>THUS</span> <span>25</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        // onClick={() => handleCombinedClick("Category 5")}
                        className=" py-4 px-2 border mt-3 text-gray-600 rounded-full flex flex-col items-center justify-center gap-1"
                      >
                        <span>FRI</span> <span>26</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        // onClick={() => handleCombinedClick("Category 6")}
                        className=" py-4 px-2 border mt-3 text-gray-600 rounded-full flex flex-col items-center justify-center gap-1 "
                      >
                        <span>SAT</span> <span>27</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <Slider {...settings}>
                  <div>
                    <img src="image1.jpg" alt="Slide 1" />
                  </div>
                  <div>
                    <img src="image2.jpg" alt="Slide 2" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Doctor not found</p>
      )}
    </div>
  );
}

export default DoctorsDetails;
