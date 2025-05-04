import { home } from "../../data/data";
import Typewriter from "typewriter-effect";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <section
        className="relative overflow-hidden text-white px-4 sm:px-6 md:px-6 lg:px-8 h-screen flex flex-col justify-center items-center
        bg-gradient-to-br from-gray-900 to-teal-800" // Background gradient
      >
        <div
          className="absolute inset-0
          bg-gradient-to-br from-gray-950 to-teal-900 opacity-70 animate-gradient-x" // Background gradient overlay
        ></div>

        {/* Animated floating shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-teal-400 rounded-full opacity-30 animate-pulse-slow mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-600 rounded-full opacity-30 animate-pulse-slow mix-blend-multiply filter blur-3xl"></div>

        {home.map((value, i) => (
          <div
            className="relative z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 py-10 md:py-0" // Removed md:items-start, keeping items-center for vertical alignment in flex row
            key={i}
          >
            <div
              className="flex-1 text-center" // Removed md:text-left to center text on all screen sizes
              data-aos="fade-right"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 tracking-wide drop-shadow-lg">
                {value.text}
              </h3>

              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                <Typewriter
                  options={{
                    strings: [value.name, value.post, value.design],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </h1>
              <p
                className="text-lg md:text-xl mb-8 max-w-lg mx-auto drop-shadow-md" // Added mx-auto to center the max-w-lg paragraph
                data-aos="fade-left"
              >
                {value.desc}
              </p>
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
              >
                Contact Me
              </button>
              <div className="flex justify-center space-x-8 text-3xl drop-shadow-md mt-8">
                {" "}
                {/* Removed md:justify-start to center icons on all screen sizes */}
                <a
                  href="https://www.facebook.com/share/161uQ4N9HN/?mibextid=kFxxJD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-transform duration-300 ease-in-out transform hover:scale-125"
                  title="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href=" https://github.com/eangmengkong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-transform duration-300 ease-in-out transform hover:scale-125"
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://t.me/MengkongEang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-300 transition-transform duration-300 ease-in-out transform hover:scale-125"
                  title="Telegram"
                >
                  <FaTelegram />
                </a>
              </div>
            </div>
            {/* Assuming value.img is used here for an image */}
            {value.img && (
              <div
                className="flex-1 flex justify-center" // Changed md:justify-end to justify-center to center image on all screen sizes
                data-aos="fade-left"
              >
                <img
                  src={value.img}
                  alt={value.name ? `${value.name} Hero Image` : "Hero Image"}
                  className="w-full max-w-sm rounded-lg shadow-xl"
                />
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
