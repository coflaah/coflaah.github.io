import { useEffect, useRef, useState } from "react";

const About = () => {
  const animatedRef = useRef(null);
  const [about, setAbout] = useState(true);
  const [hilang, setHilang] = useState(false);

  return (
    <>
      <div className=" min-h-screen flex justify-center items-center ">
        {about ? (
          <>
            <div
              className={`flex justify-center animate__animated ${
                hilang
                  ? "animate__fadeOutRight"
                  : about && "animate__fadeInLeft"
              }`}
            >
              <div className=" hidden  md:flex lg:flex  items-center">
                {hilang && (
                  <div className=" transform -rotate-90">
                    <img src="./img/y8.gif" alt="" />
                  </div>
                )}
              </div>
              <div
                className={`bg-white p-5 text-black w-3/4 lg:w-1/2 md:w-1/2 rounded-3xl shadow-xl  `}
              >
                <h1 className="text-3xl font-bold mb-5">About Me</h1>
                <p className="p-1 lg:p-10 md:p-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  asperiores, laudantium cumque debitis aspernatur, aperiam
                  voluptas modi earum quia id consequatur eveniet tempore
                  sapiente nesciunt enim eum voluptatem exercitationem sunt.
                </p>
              </div>
              <button
                className="text-white text-3xl p-3"
                onClick={() => {
                  setHilang(true);
                  setTimeout(() => {
                    setHilang(false);
                    setAbout(false);
                  }, 500);
                }}
              >
                Available in <i className="bi bi-arrow-bar-right"></i>
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              className={`flex justify-center animate__animated ${
                hilang
                  ? "animate__fadeOutRight"
                  : !about && "animate__fadeInLeft"
              }`}
            >
              <div className="bg-white p-5 text-black w-3/4  rounded-3xl shadow-xl">
                <h1 className="text-3xl font-bold mb-5">Available in</h1>
                <div className="flex flex-col m-10 gap-4">
                  <button className="bg-green-400 hover:bg-green-500 p-4 text-center text-white text-3xl font-bold rounded-2xl shadow-lg">
                    TokoPedia
                  </button>
                  <button className="bg-amber-500 hover:bg-amber-600 p-4 text-center text-white text-3xl font-bold rounded-2xl shadow-lg">
                    Shopee
                  </button>
                </div>
              </div>
              <button
                className="text-white text-3xl p-3"
                onClick={() => {
                  setHilang(true);
                  setTimeout(() => {
                    setHilang(false);
                    setAbout(true);
                  }, 500);
                }}
              >
                About us<i className="bi bi-arrow-bar-right"></i>
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default About;
