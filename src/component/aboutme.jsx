import { useEffect, useRef } from "react";

const About = () => {
  const animatedRef = useRef(null);

  useEffect(() => {
    const animatedElement = animatedRef.current;

    const handleScroll = () => {
      const elementTop = animatedElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        animatedElement.classList.add("animate__animated", "animate__bounceIn");
      } else {
        animatedElement.classList.remove(
          "animate__animated",
          "animate__bounceIn"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Hapus kelas animasi saat komponen dibongkar
    return () => {
      animatedElement.classList.remove(
        "animate__animated",
        "animate__bounceIn"
      );
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className=" min-h-screen flex justify-center items-center ">
        <div
          className="bg-white p-5 text-black w-3/4 lg:w-1/2 md:w-1/2 rounded-3xl shadow-xl"
          ref={animatedRef}
        >
          <h1 className="text-3xl font-bold mb-5">About Me</h1>
          <p className="p-1 lg:p-10 md:p-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            asperiores, laudantium cumque debitis aspernatur, aperiam voluptas
            modi earum quia id consequatur eveniet tempore sapiente nesciunt
            enim eum voluptatem exercitationem sunt.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
